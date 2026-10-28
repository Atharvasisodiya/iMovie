import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBookings } from '../api/bookings'
import { formatCurrency, formatDate } from '../utils/format'

function MyBookings() {
  const [bookings, setBookings] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getBookings().then(setBookings)
  }, [])

  return (
    <section className="section section--page">
      <div className="section__header">
        <p className="eyebrow">Your tickets</p>
        <h2>My Bookings</h2>
      </div>
      {bookings.length === 0 ? (
        <p className="empty-state">No bookings yet. Choose a movie and reserve a few seats.</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <article
              key={booking.id}
              className="booking-item"
              onClick={() => navigate(`/confirmation/${booking.id}`)}
            >
              <img src={booking.poster} alt="" />
              <div>
                <h3>{booking.movieTitle}</h3>
                <p>
                  {formatDate(booking.date)} • {booking.showtime}
                </p>
                <p>
                  Seats {booking.seats.join(', ')} • {formatCurrency(booking.total)}
                </p>
                <p className="booking-item__id">{booking.id}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default MyBookings
