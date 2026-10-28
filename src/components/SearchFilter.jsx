function SearchFilter({ query, genre, genres, onQueryChange, onGenreChange }) {
  return (
    <div className="filters">
      <label className="search-field">
        <span className="sr-only">Search movies</span>
        <input
          type="search"
          placeholder="Search titles, genres, or directors"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </label>
      <div className="genre-pills" role="tablist" aria-label="Filter by genre">
        {genres.map((item) => (
          <button
            key={item}
            type="button"
            className={item === genre ? 'pill is-active' : 'pill'}
            onClick={() => onGenreChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilter
