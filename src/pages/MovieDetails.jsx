import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieById } from '../api/movies'
import { useBooking } from '../context/BookingContext'
import { formatCurrency, formatDate, formatDuration } from '../utils/format'

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { setPendingBooking } = useBooking()
  const [movie, setMovie] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedShowtime, setSelectedShowtime] = useState('')
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    getMovieById(id).then((found) => {
      setMovie(found)
      setSelectedDate(found?.dates?.[0] ?? '')
      setSelectedShowtime(found?.showtimes?.[0] ?? '')
      setStatus(found ? 'ready' : 'missing')
    })
  }, [id])

  if (status === 'loading') {
    return (
      <section className="section section--page">
        <p className="empty-state">Loading movie…</p>
      </section>
    )
  }

  if (status === 'missing' || !movie) {
    return (
      <section className="section section--page">
        <p className="empty-state">Movie not found.</p>
      </section>
    )
  }

  const continueToSeats = () => {
    setPendingBooking({
      movie,
      date: selectedDate,
      showtime: selectedShowtime,
      seats: [],
    })
    navigate(`/book/${movie.id}/seats`)
  }

  return (
    <section className="details">
      <div className="details__banner" style={{ backgroundImage: `url(${movie.backdrop})` }}>
        <div className="details__banner-overlay">
          <div className="details__layout">
            <img className="details__poster" src={movie.poster} alt={`${movie.title} poster`} />
            <div>
              <p className="eyebrow">iMovie original presentation</p>
              <h1>{movie.title}</h1>
              <p className="hero__meta">
                <span>{movie.certificate}</span>
                <span>{movie.language}</span>
                <span>{movie.genre.join(' • ')}</span>
                <span>{formatDuration(movie.duration)}</span>
                <span>★ {movie.rating}</span>
              </p>
              <p className="hero__synopsis">{movie.synopsis}</p>
              <p className="details__cast">
                Directed by {movie.director}. Starring {movie.cast.join(', ')}.
              </p>
              <p className="details__price">From {formatCurrency(movie.price)} per ticket</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section__header">
          <p className="eyebrow">Choose a screening</p>
          <h2>Dates & showtimes</h2>
        </div>
        <div className="choice-row">
          {movie.dates.map((date) => (
            <button
              key={date}
              type="button"
              className={date === selectedDate ? 'choice is-active' : 'choice'}
              onClick={() => setSelectedDate(date)}
            >
              {formatDate(date)}
            </button>
          ))}
        </div>
        <div className="choice-row">
          {movie.showtimes.map((time) => (
            <button
              key={time}
              type="button"
              className={time === selectedShowtime ? 'choice is-active' : 'choice'}
              onClick={() => setSelectedShowtime(time)}
            >
              {time}
            </button>
          ))}
        </div>
        <button className="btn btn--primary" type="button" onClick={continueToSeats}>
          Select seats
        </button>
      </div>
    </section>
  )
}

export default MovieDetails
