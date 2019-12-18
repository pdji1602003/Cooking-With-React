import React from 'react'
import Ingredient from './Ingredient' 

export default function IngredientList({ingredients}) {
	const IngredientElement = ingredients.map(ingredient => <Ingredient key={ingredient.id} {...ingredient}/>)

	return (
		<div className="ingredient-grid">
			{IngredientElement}
		</div>
	)
}
