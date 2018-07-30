import React from 'react'
import DumbRender from './DumbRender.component'
import Something from './Something'

const myDumbCmp = <DumbRender />

export default class InnerCondition extends React.PureComponent {
	state = {
		show: true,
	}
	componentWillUnmount = () => {
		console.log('InnerCondition unmount')
	}

	handlerShow = () => {
		this.setState(prevState => ({ show: !prevState.show }))
	}

	render = () => {
		if (!this.state.show) {
			return (
				<div>
					<br />
					My Inner Condition Component {this.props.counter}
					<button onClick={this.props.onClickCounter}>INC</button>
					{myDumbCmp}
					<button onClick={this.handlerShow}>SHOW</button>
				</div>
			)
		}
		return (
			<div>
				<Something />
				<br />
				My Inner Condition Component {this.props.counter}
				<button onClick={this.props.onClickCounter}>INC</button>
				{myDumbCmp}
				<button onClick={this.handlerShow}>SHOW</button>
			</div>
		)
	}
}
