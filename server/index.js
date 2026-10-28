
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { movies } from '../src/data/movies.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: /^http:\/\/localhost:517[0-9]$/ }));
app.use(express.json());

const bookingSchema = new mongoose.Schema(
  {
    movieId: { type: String, required: true },
    movieTitle: { type: String, required: true },
    poster: String,
    date: { type: String, required: true },
    showtime: { type: String, required: true },
    seats: { type: [String], required: true },
    total: { type: Number, required: true },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
    status: { type: String, default: 'confirmed' },
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);

function formatBooking(booking) {
  const item = booking.toObject ? booking.toObject() : booking;
  return {
    ...item,
    id: String(item._id ?? item.id),
  };
}

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'CineBook API is running' });
});

app.get('/api/movies', (_req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find((item) => String(item.id) === req.params.id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  res.json(movie);
});

app.get('/api/bookings', async (_req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings.map(formatBooking));
  } catch (error) {
    res.status(500).json({ message: 'Could not load bookings' });
  }
});

app.get('/api/bookings/:id', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(formatBooking(booking));
  } catch {
    res.status(500).json({ message: 'Could not load booking' });
  }
});

app.post('/api/bookings', async (req, res) => {
  try {
    const { movieId, movieTitle, poster, date, showtime, seats, total, customer } = req.body;

    if (!movieId || !movieTitle || !date || !showtime ||
        !Array.isArray(seats) || seats.length === 0 ||
        !customer?.name || !customer?.email || !customer?.phone ||
        !Number.isFinite(Number(total)) || Number(total) < 0) {
      return res.status(400).json({ message: 'Please provide valid booking details' });
    }

    const existingBookings = await Booking.find({ movieId, date, showtime });
    const requestedSeats = new Set(seats.map(String));
    const conflict = existingBookings.some((booking) =>
      booking.seats.some((seat) => requestedSeats.has(String(seat)))
    );

    if (conflict) {
      return res.status(409).json({
        message: 'One or more selected seats have already been booked. Please choose different seats.',
      });
    }

    const booking = await Booking.create({
      movieId, movieTitle, poster, date, showtime,
      seats: seats.map(String), total: Number(total), customer,
    });

    res.status(201).json(formatBooking(booking));
  } catch (error) {
    console.error('Booking creation failed:', error.message);
    res.status(500).json({ message: 'Could not complete the booking' });
  }
});

async function startServer() {
  if (!process.env.MONGODB_URI) {
    console.error('Missing MONGODB_URI. Add it to server/.env');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`CineBook API running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
}

startServer();
