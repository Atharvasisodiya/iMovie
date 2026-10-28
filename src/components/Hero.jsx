import { useNavigate } from 'react-router-dom'
import { formatDuration } from '../utils/format'

function Hero({ movie }) {
  const navigate = useNavigate()

  if (!movie) return null

  return (
    <section className="hero" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <div className="hero__overlay">
        <div className="hero__content">
          <p className="eyebrow">Now showing</p>
          <h1>{movie.title}</h1>
          <p className="hero__meta">
            <span>{movie.certificate}</span>
            <span>{movie.genre.join(' • ')}</span>
            <span>{formatDuration(movie.duration)}</span>
            <span>★ {movie.rating}</span>
          </p>
          <p className="hero__synopsis">{movie.synopsis}</p>
          <div className="hero__actions">
            <button className="btn btn--primary" type="button" onClick={() => navigate(`/movies/${movie.id}`)}>
              Book Tickets
            </button>
            <button className="btn btn--ghost" type="button" onClick={() => navigate('/movies')}>
              Browse movies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
