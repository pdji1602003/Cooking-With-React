//基於我們對於import的理解，我們理解到React是React library的default class，
//而component並非default，而是react的附屬function。
//我們理解到api的真正意涵，即是他人寫好的functions名稱。

import React, { useContext } from 'react'
import Recipe from './Recipe'
import {RecipeContext} from './App'

export default function RecipeList({ recipes, searchResult }) {
	const { handleAddRecipe } = useContext(RecipeContext)
	console.log(searchResult);

	return (
		<div className="recipe-list">
			{recipes
				.filter(recipe => recipe.name.toLowerCase().search(searchResult.toLowerCase()) !== -1)
				.map(recipe => <Recipe key={recipe.id} {...recipe} />)}
			<div className="recipe-list_add-btn-container">
				<button 
					className="btn btn-primary" 
					onClick={() => handleAddRecipe()}
				>
					Add Recipe
				</button>
			</div>
		</div>
	)
}



