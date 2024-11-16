import React from 'react'
import RecipeItem from './RecipeItem'

export default function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map(r => (
        <RecipeItem key={r.id} recipe={r} />
      ))}
    </div>
  )
}