import React from 'react';
import './App.css';

const MovieCard = ({movie}) => {
    return (
    <div className="movie-card">
        <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/150' }
        alt={movie.Title}
        />
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>

    </div>
    );
}

  

export default MovieCard;
