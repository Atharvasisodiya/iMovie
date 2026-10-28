import { useEffect, useState } from 'react'
import { getFeaturedMovie, getMovies } from '../api/movies'
import Hero from '../components/Hero'
import MovieCard from '../components/MovieCard'

function Home() {
  const [featured, setFeatured] = useState(null)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getFeaturedMovie().then(setFeatured)
    getMovies().then(setMovies)
  }, [])

  return (
    <>
      <Hero movie={featured} />
      <section className="section">
        <div className="section__header">
          <p className="eyebrow">This week at iMovie</p>
          <h2>Now playing</h2>
        </div>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
