import React from 'react'
import DumbRender from './DumbRender.component'
import Something from './Something'

export default class OuterCondition extends React.PureComponent {
	state = {
		show: true,
	}

	componentWillUnmount = () => {
		console.log('Outer Condition unmount')
	}

	handlerShow = () => {
		this.setState(prevState => ({ show: !prevState.show }))
	}

	render = () => {
		return (
			<span>
				{this.state.show && <Something />}
				<br />
				My Outer Condition Component {this.props.counter}
				<button onClick={this.props.onClickCounter}>INC</button>
				<DumbRender />
				<button onClick={this.handlerShow}>SHOW</button>
			</span>
		)
	}
}
