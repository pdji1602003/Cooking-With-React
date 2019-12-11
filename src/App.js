import React from 'react'
import RecipeList from './RecipeList'

export default function App(props) {
	return (
		<>
			<RecipeList recipes={sampleRecipes}/>
		</>
	)
}

const sampleRecipes = [
	{
		id:1, 
		name:'Plain Chicken',
		cookTime:'1:45',
		servings:3,
		instructions:`
		1. Put salt on chicken 
		2. Put chicken in oven 
		3. Eat chicken`
	},
	{
		id:2, 
		name:'Plain Pork',
		cookTime:'0:45',
		servings:5,
		instructions:`
		1. Put paprika on pork
		2. Put chicken in oven 
		3. Eat pork`
	}
]