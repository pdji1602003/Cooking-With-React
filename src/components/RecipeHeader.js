import React from 'react'


export default function RecipeHeader(props) {
	const {
		searchResult, 
		handleSearchRecipe
	 } = props

	return (
		<header className="recipe--header">
			<form action="/" className="recipe--header_form">
				<label htmlFor="searchBar" className="recipe--header_search-icon">
					<span role="img" aria-label="magnifying glass">search</span>
				</label>
				<input
					type="text"
					id="searchBar"
					className="recipe--header_input"
					placeholder="Search for recipes here..."
					minLength="1"
					onChange={(e) => handleSearchRecipe(e)}
				/>
			</form>
		</header>
	)
}
