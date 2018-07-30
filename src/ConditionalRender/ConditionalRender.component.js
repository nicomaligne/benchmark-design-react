import React from 'react'
import OuterCondition from './OuterCondition.component'
import InnerCondition from './InnerCondition.component'

const MODE = {
	INNER: 0,
	OUTER: 1,
}

export default class ConditionalRender extends React.Component {
	state = {
		mode: MODE.INNER,
		outerCounter: 0,
		innerCounter: 0,
	}

	handlerOuterCounter = () => {
		this.setState(prevState => ({ outerCounter: prevState.outerCounter + 1 }))
	}

	handlerInnerCounter = () => {
		this.setState(prevState => ({ innerCounter: prevState.innerCounter + 1 }))
	}

	handlerChangeMode = (event, mode) => {
		this.setState({ mode })
	}

	render = () => {
		return (
			<React.Fragment>
				<button onClick={event => this.handlerChangeMode(event, MODE.INNER)}>
					Change Mode With Inner Condition
				</button>
				<button onClick={event => this.handlerChangeMode(event, MODE.OUTER)}>
					Change Mode With Outer Condition
				</button>
				<div>
					{this.state.mode === MODE.OUTER && (
						<OuterCondition
							onClickCounter={this.handlerOuterCounter}
							counter={this.state.outerCounter}
						/>
					)}
					{this.state.mode === MODE.INNER && (
						<InnerCondition
							onClickCounter={this.handlerInnerCounter}
							counter={this.state.innerCounter}
						/>
					)}
				</div>
			</React.Fragment>
		)
	}
}
