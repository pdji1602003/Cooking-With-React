import React from 'react'
import { ThemeProvider } from 'styled-components'
import Chatbot from 'react-simple-chatbot'
import { steps } from './Steps'

export default function CustomChatbot() {
	const config = {
		width: '300px',
		height: '400px',
		floating: true, 
		className:'isWordWrap'
	}

	const theme = {
		background: '#f5f8fb',
		headerBgColor: 'rgb(81, 9, 216)',
		headerFontColor: '#fff',
		headerFontSize: 'inherit',
		botBubbleColor: 'rgb(81, 9, 216)',
		botFontColor: '#fff',
		userBubbleColor: '#fff',
		userFontColor: '#4a4a4a',
	}

	console.dir(Chatbot);

	return (
		<ThemeProvider theme={theme}>
			<Chatbot
				steps={steps}
				{...config}
			/>
		</ThemeProvider>
	)
}



