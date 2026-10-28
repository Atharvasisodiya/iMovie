import { useNavigate } from 'react-router-dom'
import { formatDuration } from '../utils/format'

function MovieCard({ movie }) {
  const navigate = useNavigate()

  return (
    <article className="movie-card" onClick={() => navigate(`/movies/${movie.id}`)}>
      <div className="movie-card__poster">
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <span className="movie-card__rating">★ {movie.rating}</span>
      </div>
      <div className="movie-card__body">
        <h3>{movie.title}</h3>
        <p>{movie.genre.join(' / ')}</p>
        <p className="movie-card__duration">{formatDuration(movie.duration)}</p>
      </div>
    </article>
  )
}

export default MovieCard
