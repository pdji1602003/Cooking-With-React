import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import uuidv4 from 'uuid/v4'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

export default function App(props) {
	const [selectedRecipeId, setSelectedRecipeId] = useState()
	const [recipes, setRecipes] = useState(sampleRecipes)
	const selectedRecipe = recipes.find( recipe => recipe.id === selectedRecipeId)
	

	useEffect(() => {
		const recipeStored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (recipeStored != null) setRecipes(recipeStored)
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
	}, [recipes]) 

	const recipeContextValue = {
		handleRecipeAdd, 
		handleRecipeDelete, 
		handleRecipeSelect,
		handleRecipeChange
	}

	function handleRecipeSelect(id){
		setSelectedRecipeId(id)
	}

	function handleRecipeAdd() {
		const newRecipe = {
			id: uuidv4(),
			name: 'New recipe',
			cookTime: '1:00',
			servings: 1,
			instructions: `instructions..`,
			ingredients: [
				{
					id: uuidv4(),
					name: 'Name',
					amount: '1 Tbs'
				}
			]
		}

		setRecipes([...recipes, newRecipe])
	}

	function handleRecipeChange(id, recipe){
		const newRecipes = [...recipes]
		const index = newRecipes.findIndex(r => r.id === id)
		newRecipes[index] = recipe
		setRecipes(newRecipes)
	}

	function handleRecipeDelete(id) {
		setRecipes(recipes.filter(recipe => recipe.id !== id))
	}

	return (
		<RecipeContext.Provider value={recipeContextValue}>
			<RecipeList
				recipes={recipes}
			/>
			{selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
		</RecipeContext.Provider>
	)
}

const sampleRecipes = [
	{
		id: 1,
		name: 'Plain Chicken',
		cookTime: '1:45',
		servings: 3,
		instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
		ingredients: [
			{
				id: 1,
				name: 'Chicken',
				amount: '2 Pounds'
			},
			{
				id: 2,
				name: 'Salt',
				amount: '1 Tbs'
			}
		]
	},
	{
		id: 2,
		name: 'Plain Pork',
		cookTime: '0:45',
		servings: 5,
		instructions: "1.Put paprika on pork\n2.Put pork in oven\n3.Eat pork",
		ingredients: [
			{
				id: 1,
				name: 'Pork',
				amount: '3 Pounds'
			},
			{
				id: 2,
				name: 'Paprika',
				amount: '2 Tbs'
			}
		]
	}
]