import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'


export default function RecipeEdit({ recipe }) {
	return (
		<div className="recipe--edit">
			<div className="recipe--edit__remove-button-container">
				<button className="btn recipe-edit__remove-button">&times;</button>
			</div>
			<div className="recipe--edit__details-grid">
				<label className="recipe--edit_label" htmlFor="name">Name</label>
				<input
					className="recipe--edit_input"
					type="text"
					name="name"
					id="name"
					value={recipe.name}
				/>
				<label className="recipe--edit_label" htmlFor="cookTime">Cook Time</label>
				<input
					className="recipe--edit_input"
					type="text"
					name="cookTime"
					id="cookTime"
					value={recipe.cookTime}
				/>
				<label className="recipe--edit_label" htmlFor="servings">Servings</label>
				<input
					className="recipe--edit_input"
					type="number"
					min="1"
					name="servings"
					id="servings" 
					value={recipe.servings}
				/>
				<label className="recipe--edit_label" htmlFor="instructions">Instructions</label>
				<textarea
					className="recipe--edit_input"
					name="instructions"
					id="instructions"
					value={recipe.instructions}
				/>
			</div>
			<br />
			<label className="recipe--edit_label">Ingredients</label>
			<div className="recipe--edit_ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				<RecipeIngredientEdit />
				<RecipeIngredientEdit />
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button className="btn btn--primary">Add Ingredient</button>
			</div>
		</div>
	)
}