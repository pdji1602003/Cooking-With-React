import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import uuidv4 from 'uuid/v4'

export default function RecipeEdit({ recipe }) {
	// save handleRecipeChange in the constant variable from useContext(RecipeContext)
	const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

	function handleChange(changes) {
		handleRecipeChange(recipe.id, { ...recipe, ...changes })
	}

	function handleIngredientChange(id, ingredient) {
		const newIngrediens = [...recipe.ingredients]
		const index = newIngrediens.findIndex(i => i.id === id)
		newIngrediens[index] = ingredient
		handleChange({ ingredients: newIngrediens })
	}

	function handleIngredientAdd() {
		const newIngredient = {
			id: uuidv4(),
			name: '',
			amount: ''
		}

		handleChange({
			ingredients: [...recipe.ingredients, newIngredient]
		})
	}

	function handleIngredientDelete(id) {
		handleChange({ ingredients: recipe.ingredients.filter(i => i.id !== id) })
	}

	return (
		<div className="recipe--edit">
			<div className="recipe--edit__remove-button-container">
				<button
					className="btn recipe-edit__remove-button"
					onClick={() => handleRecipeSelect(undefined)}
				>
					&times;
				</button>
			</div>
			<div className="recipe--edit__details-grid">
				<label className="recipe--edit_label" htmlFor="name">Name</label>
				<input
					className="recipe--edit_input"
					type="text"
					name="name"
					id="name"
					value={recipe.name}
					onChange={(e) => handleChange({ name: e.target.value })}
				/>
				<label className="recipe--edit_label" htmlFor="cookTime">Cook Time</label>
				<input
					className="recipe--edit_input"
					type="text"
					name="cookTime"
					id="cookTime"
					value={recipe.cookTime}
					onChange={(e) => handleChange({ cookTime: e.target.value })}
				/>
				<label className="recipe--edit_label" htmlFor="servings">Servings</label>
				<input
					className="recipe--edit_input"
					type="number"
					min="1"
					name="servings"
					id="servings"
					value={recipe.servings}
					onChange={(e) => handleChange({ servings: e.target.value })}
				/>
				<label className="recipe--edit_label" htmlFor="instructions">Instructions</label>
				<textarea
					className="recipe--edit_input"
					name="instructions"
					id="instructions"
					value={recipe.instructions}
					onChange={(e) => handleChange({ instructions: e.target.value })}
				/>
			</div>
			<br />
			<label className="recipe--edit_label">Ingredients</label>
			<div className="recipe--edit_ingredient-grid">
				<div>Name</div>
				<div>Amount</div>
				<div></div>
				{recipe.ingredients.map(ingredient => (
					<RecipeIngredientEdit
						key={ingredient.id}
						ingredient={ingredient}
						handleIngredientAdd={handleIngredientAdd}
						handleIngredientChange={handleIngredientChange}
						handleIngredientDelete={handleIngredientDelete}
					/>
				))}
			</div>
			<div className="recipe-edit__add-ingredient-btn-container">
				<button
					className="btn btn--primary"
					onClick={() => handleIngredientAdd()}
				>
					Add Ingredient
				</button>

			</div>
		</div>
	)
}