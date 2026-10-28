import client from './client'

const STORAGE_KEY = 'cinebook.bookings'
const USE_REMOTE_API = Boolean(import.meta.env.VITE_API_URL)

function readLocalBookings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

function writeLocalBookings(bookings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
}

export async function createBooking(payload) {
  if (USE_REMOTE_API) {
    const { data } = await client.post('/bookings', payload)
    return data
  }

  const bookings = readLocalBookings()
  const requestedSeats = new Set(payload.seats)

  const conflict = bookings.some(
    (booking) =>
      String(booking.movieId) === String(payload.movieId) &&
      booking.date === payload.date &&
      booking.showtime === payload.showtime &&
      (booking.seats || []).some((seat) => requestedSeats.has(seat)),
  )

  if (conflict) {
    throw new Error(
      'One or more selected seats have already been booked. Please choose different seats.',
    )
  }

  const booking = {
    ...payload,
    id: `CB-${Date.now().toString(36).toUpperCase()}`,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  }

  writeLocalBookings([booking, ...bookings])
  return booking
}

export async function getBookings() {
  if (USE_REMOTE_API) {
    const { data } = await client.get('/bookings')
    return data
  }

  return readLocalBookings()
}

export async function getBookingById(id) {
  const bookings = await getBookings()
  return bookings.find((booking) => booking.id === id) ?? null
}
