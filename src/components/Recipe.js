import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'


export default function Recipe(props) {
	const {
		id,
		name,
		cookTime,
		servings,
		instructions,
		ingredients
	} = props

	const { handleSelectRecipe, handleDeleteRecipe } = useContext(RecipeContext)


	return (
		<div className="recipe">
			<div className="recipe-header">
				<h2 className="recipe-title">{name}</h2>
				<div className="recipe-header-btn">
					<button 
						className="btn btn-primary mr-1 mb-1 mb-none"
						onClick={() => handleSelectRecipe(id)}
					>
					Edit
					</button>
					<button 
						className="btn btn-danger"
						onClick={() => handleDeleteRecipe(id)}
					>
					Delete
					</button>
				</div>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Cook Time:</span>
				<span className="recipe-value">{cookTime}</span>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Servings:</span>
				<span className="recipe-value">{servings}</span>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Instructions:</span>
				<div className="recipe-value recipe-value-instruction recipe-value_indented">{instructions}</div>
			</div>
			<div className="recipe-row">
				<span className="recipe-label">Ingredients:</span>
				<IngredientList ingredients={ingredients} />
			</div>
		</div>
	)
}