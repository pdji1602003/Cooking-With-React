import React, { Component } from 'react'
import IngredientList from './IngredientList'

//基於我們對於import的理解，我們理解到React是React library的default class，
//而component並非default，而是react的附屬function。
//我們理解到api的真正意涵，即是他人寫好的functions名稱。

export default function Recipe(props) {
	const {
		name,
		cookTime,
		servings,
		instructions,
		ingredients
	} = props
	return (
		<section className="recipe">
			<div className="recipe-header">
				<h3 className="recipe-tititle">{name}</h3>
				<div>
					<button className="btn btn-primary mr-1">Edit</button>
					<button className="btn btn-danger">Delete</button>
				</div>
			</div>

			<div>
				<span>Cook Time:</span>
				<span> {cookTime}</span>
			</div>
			<div>
				<span>Servings:</span>
				<span> {servings}</span>
			</div>
			<div>
				<span>Instructions:</span>
				<div> {instructions}</div>
			</div>
			<div>
				<span>Ingredients:</span>
				<IngredientList ingredients={ingredients} />
			</div>
		</section>
	)
}

