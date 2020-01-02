import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
import uuidv4 from 'uuid/v4'

export default function RecipeEdit({ recipe }) {
	const { handleDeleteButton, handleChangeRecipe } = useContext(RecipeContext)

	function handleChange(changes) {
		// 將changes覆寫到既有的recipe資料上
		handleChangeRecipe(recipe.id, { ...recipe, ...changes })
	}

	function handleIngredientChange(id, ingredient) {
		const newIngredients = [...recipe.ingredients]
		const index = recipe.ingredients.findIndex(i => i.id === id)
		newIngredients[index] = ingredient
		console.log(newIngredients)
		handleChange({ ingredients: newIngredients })
	}

	function handleIngredientAdd() {
		const newIngredient = {
			id: uuidv4(),
			name: '',
			amount: ''
		}

		handleChange({ingredients: [...recipe.ingredients, newIngredient]})
	}

	function handleIngredientDelete(id){
		handleChange({
			ingredients:recipe.ingredients.filter(i => i.id !== id)
		})
	}

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
				<label className="recipe-edit_label" htmlFor="name">Recipe Name</label>
				<input
					className="recipe-edit_input"
					type="text"
					name="name"
					id="name"
					value={recipe.name}
					onChange={(e) => handleChange({ name: e.target.value })}
				/>
				<label className="recipe-edit_label" htmlFor="cookTime">Cook Time</label>
				<input
					className="recipe-edit_input"
					type="text"
					name="cookTime"
					id="cookTime"
					value={recipe.cookTime}
					onChange={(e) => handleChange({ cookTime: e.target.value })}
				/>
				<label className="recipe-edit_label" htmlFor="servings">Servings</label>
				<input
					className="recipe-edit_input"
					type="number"
					min="1"
					name="servings"
					id="servings"
					value={recipe.servings}
					onChange={(e) => handleChange({ servings: parseFloat(e.target.value) || "" })}
				/>
				<label className="recipe-edit_label" htmlFor="instructions">Instructions</label>
				<textarea
					className="recipe-edit_input recipe-edit_textarea"
					name="instructions"
					id="instructions"
					value={recipe.instructions}
					onChange={(e) => handleChange({ instructions: e.target.value })}
				/>
			</div>
			<label className="recipe-edit_label">Ingredient</label>
			<div className="recipe_edit-add-ingredient-grid">
				<div className="recipe_edit_ingredient-heading">Name</div>
				<div className="recipe_edit_ingredient-heading">Amount</div>
				<div></div>
				{recipe.ingredients.map(ingredient => (
					<RecipeIngredientEdit
						key={ingredient.id}
						ingredient={ingredient}
						handleIngredientChange={handleIngredientChange}
						handleIngredientDelete={handleIngredientDelete}
					/>)
				)}
			</div>
			<div className="recipe-edit_add-ingredient-btn-container">
				<button 
					className="btn btn-primary"
					onClick={handleIngredientAdd}
				>
				Add Ingredient
				</button>
			</div>
		</div>
	)
}
