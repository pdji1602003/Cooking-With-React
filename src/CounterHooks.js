import React, { useState, useContext } from 'react'
import {ThemeContext} from './App'

export default function CounterHooks({ initialCount }) {
	// state是當前state
	const [state, setState] = useState({ count: initialCount })
	const color = useContext(ThemeContext)
	return (
		<div>
			{/* prevState等同於state */}
			<button style={color} onClick={() => setState((prevState) => {
				return { count: prevState.count - 1 }
			})}>-</button>
			<span>{state.count}</span>
			<button style={color} onClick={() => setState((prevState) => {
				return { count: prevState.count + 1 }
			})}>+</button>
		</div>
	)
}