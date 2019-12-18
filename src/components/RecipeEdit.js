import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'

export default function RecipeEdit({ recipe }) {
	const {handleDeleteButton} = useContext(RecipeContext)

	return (
		<div className="recipe-edit">
			<div className="recipe-edit_delete-btn-container">
				<button 
					className="btn"
					onClick={handleDeleteButton}
				>
					&times;
				</button>
			</div>
			<div className="recipe-edit_ingredient-grid">
				<label className="recipe-edit_label" htmlFor="name">Name</label>
				<input
					className="recipe-edit_input"
					type="text"
					name="name"
					id="name"
					value={recipe.name}
				/>
				<label className="recipe-edit_label" htmlFor="cookTime">Cook Time</label>
				<input
					className="recipe-edit_input"
					type="text"
					name="cookTime"
					id="cookTime"
					value={recipe.cookTime}
				/>
				<label className="recipe-edit_label" htmlFor="servings">Servings</label>
				<input 
					className="recipe-edit_input" 
					type="number" 
					min="1" 
					name="servings" 
					id="servings" 
					value={recipe.servings}
				/>
				<label className="recipe-edit_label" htmlFor="instructions">Instructions</label>
				<textarea 
					className="recipe-edit_input recipe-edit_textarea" 
					name="instructions" 
					id="instructions" 
					value={recipe.instructions}
				/>
			</div>
			<label className="recipe-edit_label">Ingredient</label>
			<div className="recipe_edit-add-ingredient-grid">
				<div className="recipe_edit_ingredient-heading">Name</div>
				<div className="recipe_edit_ingredient-heading">Amount</div>
				<div></div>
				<RecipeIngredientEdit />
			</div>
			<div className="recipe-edit_add-ingredient-btn-container">
				<button className="btn btn-primary">Add Ingredient</button>
			</div>
		</div>
	)
}
