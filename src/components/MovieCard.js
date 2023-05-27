import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
return (
    <Link to={`/movie/${movie.title}`} style={{ textDecoration: 'none' }}>
    <div className="movie-card" style={{ width: '250px', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#263238', color: '#fff' }}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '5px', marginBottom: '10px' }} />
        <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>{movie.title}</h3>
        <p style={{ fontSize: '14px', marginBottom: '10px' }}>{movie.description}</p>
        <div className="movie-rating" style={{ backgroundColor: '#f8f8f8', padding: '5px', fontSize: '14px', borderRadius: '3px', color: '#333' }}>{movie.rating}</div>
    </div>
    </Link>
);
};

export default MovieCard;
