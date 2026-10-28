import { useEffect, useMemo, useState } from 'react'
import { getMovies } from '../api/movies'
import { genres as genreOptions } from '../data/movies'
import MovieCard from '../components/MovieCard'
import SearchFilter from '../components/SearchFilter'

function Movies() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('All')

  useEffect(() => {
    getMovies().then(setMovies)
  }, [])

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return movies.filter((movie) => {
      const matchesGenre = genre === 'All' || movie.genre.includes(genre)
      const matchesQuery =
        !needle ||
        movie.title.toLowerCase().includes(needle) ||
        movie.director.toLowerCase().includes(needle) ||
        movie.genre.some((item) => item.toLowerCase().includes(needle))
      return matchesGenre && matchesQuery
    })
  }, [movies, query, genre])

  return (
    <section className="section section--page">
      <div className="section__header">
        <p className="eyebrow">Browse the catalog</p>
        <h2>Movies</h2>
      </div>
      <SearchFilter
        query={query}
        genre={genre}
        genres={genreOptions}
        onQueryChange={setQuery}
        onGenreChange={setGenre}
      />
      {filtered.length === 0 ? (
        <p className="empty-state">No movies match that search. Try another title or genre.</p>
      ) : (
        <div className="movie-grid">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Movies
