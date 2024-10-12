import React from 'react';
import MovieCard from './MovieCard'
const MovieList =({ movies }) =>{
    return (
        <div>
            {movies.length>0 ? (
                <div className="movie-list">
                    {movies.map((movie)=>(
                        <MovieCard key={movie.imdbID} movie={movie}/>

                    ))}


                    </div>
    ):(
        <p>No movies found</p>
 )}
        </div>
      ); 
};
  


export default MovieList;
