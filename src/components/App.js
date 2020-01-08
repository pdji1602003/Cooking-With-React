import React, { useState, useEffect } from 'react'
import RecipeHeader from './RecipeHeader'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'
import uuidv4 from 'uuid/v4'
import CustomChatbot from './CustomChatbot'


const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

export const RecipeContext = React.createContext()

export default function App() {
	const [recipes, setRecipes] = useState(sampleRecipes)
	const [selectedRecipeId, setSelectedRecipeId] = useState()
	const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
	const [searchResult, setSearchResult] = useState("")

	const recipeContextValue = {
		handleAddRecipe,
		handleDeleteRecipe, 
		handleSelectRecipe, 
		handleDeleteButton, 
		handleChangeRecipe
	}

	useEffect(() => {
		const storedRecipe = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (storedRecipe != null) setRecipes(storedRecipe)
	}, [])

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
	}, [recipes])

	function handleSelectRecipe(id) {
		setSelectedRecipeId(id)
	}

	function handleAddRecipe() {
		const newRecipe = {
			id: uuidv4(),
			name: 'Delicious Salmon',
			cookTime: '',
			servings: 1,
			instructions: 'some instructions..',
			ingredients: [
				{
					id: uuidv4(),
					name: 'salmon',
					amount: '1 kilo'
				}
			]
		}

		setSelectedRecipeId(newRecipe.id)
		setRecipes([...recipes, newRecipe])
	}

	function handleDeleteRecipe(id) {
		setRecipes(recipes.filter(recipe => recipe.id !== id))
	}

	function handleDeleteButton(){
		setSelectedRecipeId(undefined)
	}

	function handleChangeRecipe(id, recipe){
		const newRecipes = [...recipes]
		const index = newRecipes.findIndex( r => r.id === id)
		newRecipes[index] = recipe
		setRecipes(newRecipes)
	}

	// for searchBar feature
	function handleSearchRecipe(e){
		setSearchResult(e.target.value)
	}

	return (
		<RecipeContext.Provider value={recipeContextValue}>
			<RecipeHeader
				handleSearchRecipe={handleSearchRecipe}
				searchResult={searchResult}
			/>
			<RecipeList
				recipes={recipes}
				handleDeleteRecipe={handleDeleteRecipe}
				searchResult={searchResult}
			/>
			{ selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
			<CustomChatbot/>
		</RecipeContext.Provider>
	)
}

const sampleRecipes = [
	{
		id: 1,
		name: 'Plain Chicken',
		cookTime: '1:45',
		servings: 3,
		instructions: '1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken',
		ingredients: [
			{
				id: 1,
				name: 'chicken',
				amount: '2 pounds'
			},
			{
				id: 2,
				name: 'salt',
				amount: '1 tbs'
			}
		]
	},
	{
		id: 2,
		name: 'Plain Pork',
		cookTime: '2:45',
		servings: 5,
		instructions: '1. Put paprika on pork\n2. Put pork in oven\n3. eat pork',
		ingredients: [
			{
				id: 1,
				name: 'pork',
				amount: '2 pounds'
			},
			{
				id: 2,
				name: 'paprika',
				amount: '1 tbs'
			}
		]
	}
]
