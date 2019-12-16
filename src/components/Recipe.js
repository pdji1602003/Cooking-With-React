import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'

//基於我們對於import的理解，我們理解到React是React library的default class，
//而component並非default，而是react的附屬function。
//我們理解到api的真正意涵，即是他人寫好的functions名稱。

export default function Recipe(props) {
	const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)
	const {
		id,
		name,
		cookTime,
		servings,
		instructions,
		ingredients
	} = props
	return (
		<section className="recipe">
			<div className="recipe--header">
				<h3 className="recipe--title">{name}</h3>
				<div>
					<button 
						onClick={() => handleRecipeSelect(id)}
						className="btn btn--primary mr-1">
						Edit
					</button>
					<button
						onClick={() => handleRecipeDelete(id)}
						className="btn btn--danger">
						Delete
					</button>
				</div>
			</div>

			<div className="recipe--row">
				<span className="recipe--label">Cook Time:</span>
				<span className="recipe--value"> {cookTime}</span>
			</div>
			<div className="recipe--row">
				<span className="recipe--label">Servings:</span>
				<span className="recipe--value"> {servings}</span>
			</div>
			<div className="recipe--row">
				<span className="recipe--label">Instructions:</span>
				<div className="recipe--value recipe__instructions recipe--value__indented"> {instructions}</div>
			</div>
			<div className="recipe--row">
				<span className="recipe--label">Ingredients:</span>
				<div className="recipe--value recipe--value__indented">
					<IngredientList ingredients={ingredients} />
				</div>
			</div>
		</section>
	)
}

