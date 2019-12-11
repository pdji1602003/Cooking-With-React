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
		3. Eat chicken`, 
		ingredients:[
			{
				id:1,
				name:'Chicken',
				amount:'2 Pounds'
			},
			{
				id:2,
				name:'Salt',
				amount:'1 Tbs'
			}
		]
	},
	{
		id:2, 
		name:'Plain Pork',
		cookTime:'0:45',
		servings:5,
		instructions:`
		1. Put paprika on pork
		2. Put chicken in oven 
		3. Eat pork`,
		ingredients:[
			{
				id:1,
				name:'Pork',
				amount:'3 Pounds'
			},
			{
				id:2,
				name:'Paprika',
				amount:'2 Tbs'
			}
		]
	}
]