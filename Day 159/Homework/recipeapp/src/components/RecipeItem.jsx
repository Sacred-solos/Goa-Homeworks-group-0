import React from 'react'

export default function RecipeItem({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">See Full Recipe</a>
    </div>
  )
}