import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieById } from '../api/movies'
import { getBookings } from '../api/bookings'
import SeatMap, { buildSeatLayout } from '../components/SeatMap'
import { useBooking } from '../context/BookingContext'
import { formatCurrency, formatDate, hashString } from '../utils/format'

function getUnavailableSeats(movieId, date, showtime) {
  const seed = hashString(`${movieId}-${date}-${showtime}`)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  return Array.from({ length: 14 }, (_, index) => {
    const row = rows[(seed + index * 3) % rows.length]
    const number = ((seed + index * 7) % 12) + 1
    return `${row}${number}`
  })
}

function seatPrice(moviePrice, seatId) {
  const premium = ['A', 'B', 'C'].includes(seatId[0])
  return moviePrice + (premium ? 80 : 0)
}

function SeatSelection() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { pendingBooking, setPendingBooking } = useBooking()
  const [movie, setMovie] = useState(pendingBooking?.movie ?? null)
  const [selectedSeats, setSelectedSeats] = useState(pendingBooking?.seats ?? [])
  const [bookedSeats, setBookedSeats] = useState([])
  const date = pendingBooking?.date
  const showtime = pendingBooking?.showtime

useEffect(() => {
  if (!movie || !date || !showtime) return

  getBookings()
    .then((bookings) => {
      const matchingSeats = bookings
        .filter(
          (booking) =>
            String(booking.movieId) === String(movie.id) &&
            booking.date === date &&
            booking.showtime === showtime,
        )
        .flatMap((booking) => booking.seats || [])

      setBookedSeats(matchingSeats)
    })
    .catch((error) => {
      console.error('Could not load existing bookings:', error)
    })
}, [movie, date, showtime])

  useEffect(() => {
    if (!movie) {
      getMovieById(id).then(setMovie)
    }
  }, [id, movie])

  const unavailableSeats = useMemo(() => {
    if (!movie || !date || !showtime) return []
  
    return [
      ...new Set([
        ...getUnavailableSeats(movie.id, date, showtime),
        ...bookedSeats,
      ]),
    ]
  }, [movie, date, showtime, bookedSeats])

  const seats = useMemo(() => buildSeatLayout(unavailableSeats), [unavailableSeats])

  if (!movie || !date || !showtime) {
    return (
      <section className="section section--page">
        <p className="empty-state">Pick a movie date and showtime first.</p>
        <button className="btn btn--primary" type="button" onClick={() => navigate(`/movies/${id}`)}>
          Back to movie
        </button>
      </section>
    )
  }

  const toggleSeat = (seatId) => {
    setSelectedSeats((current) =>
      current.includes(seatId) ? current.filter((item) => item !== seatId) : [...current, seatId],
    )
  }

  const total = selectedSeats.reduce((sum, seatId) => sum + seatPrice(movie.price, seatId), 0)

  const continueToCheckout = () => {
    setPendingBooking({
      movie,
      date,
      showtime,
      seats: selectedSeats,
      total,
    })
    navigate('/checkout')
  }

  return (
    <section className="section section--page booking-layout">
      <div>
        <div className="section__header">
          <p className="eyebrow">
            {movie.title} • {formatDate(date)} • {showtime}
          </p>
          <h2>Select your seats</h2>
        </div>
        <SeatMap seats={seats} selectedSeats={selectedSeats} onToggle={toggleSeat} />
      </div>
      <aside className="summary-card">
        <h3>Booking summary</h3>
        <dl>
          <div>
            <dt>Movie</dt>
            <dd>{movie.title}</dd>
          </div>
          <div>
            <dt>Date</dt>
            <dd>{formatDate(date)}</dd>
          </div>
          <div>
            <dt>Showtime</dt>
            <dd>{showtime}</dd>
          </div>
          <div>
            <dt>Seats</dt>
            <dd>{selectedSeats.length ? selectedSeats.join(', ') : 'None selected'}</dd>
          </div>
          <div>
            <dt>Tickets</dt>
            <dd>{selectedSeats.length}</dd>
          </div>
          <div className="summary-card__total">
            <dt>Total</dt>
            <dd>{formatCurrency(total)}</dd>
          </div>
        </dl>
        <button
          className="btn btn--primary"
          type="button"
          disabled={selectedSeats.length === 0}
          onClick={continueToCheckout}
        >
          Continue to checkout
        </button>
      </aside>
    </section>
  )
}

export default SeatSelection
