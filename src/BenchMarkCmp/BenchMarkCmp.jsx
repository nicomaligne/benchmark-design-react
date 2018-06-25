import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import css from './BenchMarkCmp.scss'

export default class BenchMarkCmp extends React.PureComponent {
	static propTypes = {
		value: PropTypes.number,
		onClick: PropTypes.func,
		clickTime: PropTypes.instanceOf(Date),
		title: PropTypes.string,
	}
	static defaultProps = {
		value: 0,
		onClick: undefined,
		clickTime: undefined,
		title: undefined,
	}
	state = {
		initTime: new Date(),
	}

	componentDidMount = () => {
		this.setState({
			didMountTime: new Date(),
		})
	}
	componentDidUpdate = prevProps => {
		if (this.props.value !== prevProps.value) {
			this.setState({
				didUpdateTime: new Date(),
			})
		}
	}

	onClick = () => {
		this.props.onClick()
	}

	render = () => (
		<div className={css.benchMarkCmp}>
			<h4>{this.props.title}</h4>
			<p>
				didMount:
				{this.state.didMountTime &&
					new Date(this.state.didMountTime - this.state.initTime).getMilliseconds()}
				ms
			</p>
			<p>
				didUpdate:
				{this.state.didUpdateTime &&
					new Date(this.state.didUpdateTime - this.props.clickTime).getMilliseconds()}
				ms
			</p>
			<Button bsStyle="primary" onClick={this.onClick}>
				{this.props.value}
			</Button>
		</div>
	)
}
