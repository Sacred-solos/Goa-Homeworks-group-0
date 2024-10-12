import React from 'react';
import './App.css';

const SearchBar = ({query, setQuery}) => {
    const handleInputChange =(e) => {
        setQuery(e.target.value);
    };
    const handleSearch =(e) => {
        e.preventDefault();
        if (query.trim()) {
            setQuery(query);
        }
    
    };
    
      return (
        <form onSubmit ={handleSearch}>
            <input type = "text" value={query} onChange={handleInputChange} placeholder="Search for movies"/>
            <button type="submit" disabled={!query.trim()}>Search</button>
            </form>
      );
    
}

export default SearchBar;
