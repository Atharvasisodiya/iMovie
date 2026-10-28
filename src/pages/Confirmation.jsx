import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBookingById } from '../api/bookings'
import { formatCurrency, formatDate } from '../utils/format'

function Confirmation() {
  const { bookingId } = useParams()
  const navigate = useNavigate()
  const [booking, setBooking] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getBookingById(bookingId).then((found) => {
      setBooking(found)
      setStatus(found ? 'ready' : 'missing')
    })
  }, [bookingId])

  if (status === 'loading') {
    return (
      <section className="section section--page">
        <p className="empty-state">Loading booking…</p>
      </section>
    )
  }

  if (status === 'missing' || !booking) {
    return (
      <section className="section section--page">
        <p className="empty-state">We could not find that booking.</p>
      </section>
    )
  }

  return (
    <section className="section section--page confirmation">
      <div className="ticket">
        <p className="eyebrow">Booking confirmed</p>
        <h1>Enjoy the show.</h1>
        <p className="ticket__id">Reference {booking.id}</p>
        <div className="ticket__body">
          <img src={booking.poster} alt="" />
          <dl>
            <div>
              <dt>Movie</dt>
              <dd>{booking.movieTitle}</dd>
            </div>
            <div>
              <dt>When</dt>
              <dd>
                {formatDate(booking.date)} • {booking.showtime}
              </dd>
            </div>
            <div>
              <dt>Seats</dt>
              <dd>{booking.seats.join(', ')}</dd>
            </div>
            <div>
              <dt>Paid</dt>
              <dd>{formatCurrency(booking.total)}</dd>
            </div>
            <div>
              <dt>Name</dt>
              <dd>{booking.customer.name}</dd>
            </div>
          </dl>
        </div>
        <div className="hero__actions">
          <button className="btn btn--primary" type="button" onClick={() => navigate('/bookings')}>
            View my bookings
          </button>
          <button className="btn btn--ghost" type="button" onClick={() => navigate('/movies')}>
            Book another
          </button>
        </div>
      </div>
    </section>
  )
}

export default Confirmation
