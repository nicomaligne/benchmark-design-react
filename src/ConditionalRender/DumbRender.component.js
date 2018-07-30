import React from 'react'

export default class DumbRender extends React.PureComponent {
	componentWillMount = () => {
		console.log('unmount dumbrender')
	}
	componentDidMount = () => {
		console.log('mount dumbrender')
	}

	render = () => {
		console.log('rendering dumbrender')
		return (
			<ul>
				<li>Choco</li>
				<li>Fraise</li>
				<li>Banana</li>
				<li>Hello world</li>
				<li>Bybye world</li>
			</ul>
		)
	}
}
