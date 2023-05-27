import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css'; // Import the CSS file for MovieDetails component

const MovieDetails = ({ movies }) => {
  const { title } = useParams();

  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>

      <div className="video-wrapper">
        <video className="video" controls>
          <source src={movie.trailerLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Link to="/" className="go-back">Go Back</Link>
    </div>
  );
};

export default MovieDetails;
