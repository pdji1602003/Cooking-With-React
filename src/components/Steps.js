

export const steps = [
	{
		id: '0',
		message: 'Welcome to Cooking With Linyin 👩🏻‍🍳!',
		trigger: '1'
	},
	{
		id: '1',
		message: 'What is your name?',
		trigger: 'name'
	},
	{
		id: 'name',
		user: true,
		trigger: '3'
	},
	{
		id: '3',
		message: 'Hello {previousValue}, glad that you are visiting my website!',
		trigger: '4'
	},
	{
		id: '4',
		message: 'Is there anything I can help you with?',
		trigger: '5'
	},
	{
		id: '5',
		options: [
			{
				value: 'Yes',
				label: 'Yes',
				trigger: '6'
			},
			{
				value: 'No',
				label: 'No',
				trigger: '7'
			}
		]
	},
	{
		id: '6',
		message: 'Please feel free to drop me a line at \npdji1602003@gmail.com',
		end: true
	},
	{
		id: '7',
		message: 'Got it! Feel free to mess around.',
		end: true
	}
]


