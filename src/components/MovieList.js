import React, { useState } from 'react';
import MovieCard from './MovieCard';
import backgroundImage from '../assets/one-piece-background.png'; // Path to your background image

const MovieList = ({ movies }) => {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div>
      <div className="filters" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Title"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
        <input
          type="number"
          placeholder="Minimum Rating"
          value={ratingFilter}
          onChange={handleRatingFilterChange}
        />
      </div>

      <div className="movie-list-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="movie-list" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
      <button onClick={() => handleAddMovie({ title: 'New Movie', rating: 0 })}>
        Add Movie
      </button>
    </div>
  );
};

export default MovieList;
