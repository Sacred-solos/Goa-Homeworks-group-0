import React, { useState } from 'react'
import axios from 'axios'

export default function SearchBar({ setRecipes }) {
  const [query, setQuery] = useState('')

  function handleSearch() {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=ba5c2ab4a730e6f501e424f69408a163	`)
      .then(res => setRecipes(res.data.results))
      .catch(() => setRecipes([]))
  }

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Type something" />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}