import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import RecipeList from './components/RecipeList'

export default function App() {
  const [recipes, setRecipes] = useState([])

  return (
    <div>
      <h1>Recipe Finder</h1>
      <SearchBar setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  )
}