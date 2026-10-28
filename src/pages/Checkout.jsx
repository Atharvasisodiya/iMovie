import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBooking } from '../api/bookings'
import { useBooking } from '../context/BookingContext'
import { formatCurrency, formatDate } from '../utils/format'

function Checkout() {
  const navigate = useNavigate()
  const { pendingBooking, clearPendingBooking } = useBooking()
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  if (!pendingBooking?.seats?.length) {
    return (
      <section className="section section--page">
        <p className="empty-state">No seats selected yet.</p>
        <button className="btn btn--primary" type="button" onClick={() => navigate('/movies')}>
          Browse movies
        </button>
      </section>
    )
  }

  const { movie, date, showtime, seats, total } = pendingBooking

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const booking = await createBooking({
        movieId: movie.id,
        movieTitle: movie.title,
        poster: movie.poster,
        date,
        showtime,
        seats,
        total,
        customer: form,
      })
      clearPendingBooking()
      navigate(`/confirmation/${booking.id}`)
    } catch {
      setError('Could not complete the demo booking. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <section className="section section--page booking-layout">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="section__header">
          <p className="eyebrow">Demo checkout</p>
          <h2>Confirm your tickets</h2>
        </div>
        <label>
          Full name
          <input name="name" required value={form.name} onChange={updateField} placeholder="Atharva Sharma" />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={updateField}
            placeholder="you@college.edu"
          />
        </label>
        <label>
          Phone
          <input name="phone" required value={form.phone} onChange={updateField} placeholder="98765 43210" />
        </label>
        <p className="form-hint">This is a demo checkout. No payment is processed.</p>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="btn btn--primary" type="submit" disabled={submitting}>
          {submitting ? 'Confirming…' : `Confirm booking • ${formatCurrency(total)}`}
        </button>
      </form>
      <aside className="summary-card">
        <h3>Booking summary</h3>
        <img className="summary-card__poster" src={movie.poster} alt="" />
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
            <dd>{seats.join(', ')}</dd>
          </div>
          <div className="summary-card__total">
            <dt>Total</dt>
            <dd>{formatCurrency(total)}</dd>
          </div>
        </dl>
      </aside>
    </section>
  )
}

export default Checkout
