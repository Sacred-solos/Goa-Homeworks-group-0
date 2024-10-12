import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=fe36b1f4`); // Use backticks here
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'No movies found');
        setMovies([]);
      }
    } catch (error) {
      setError('Something went wrong');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [query, fetchMovies]); // Added fetchMovies to the dependency array

  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;