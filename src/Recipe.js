import React, { Component } from 'react'

//基於我們對於import的理解，我們理解到React是React library的default class，
//而component並非default，而是react的附屬function。
//我們理解到api的真正意涵，即是他人寫好的functions名稱。

export default function Recipe(props) {
	const {
		name,
		cookTime,
		servings,
		instructions
	} = props
	return (
		<section>
			<div>
				<h3>{name}</h3>
				<div>
					<button>Edit</button>
					<button>Delete</button>
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
			</div>
		</section>
	)
}

