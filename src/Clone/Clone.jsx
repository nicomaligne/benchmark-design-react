import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import css from './Test.scss'

class ClonePure extends React.Component {
	static propTypes = {
		value: PropTypes.number.isRequired,
		onClick: PropTypes.func.isRequired,
	}
	state = {
		initTime: new Date(),
	}

	componentDidMount = () => {
		this.setState({
			didMountTime: new Date(),
		})
	}
	componentDidUpdate = (prevProps, toto) => {
		if (this.props.value !== prevProps.value) {
			this.setState({
				didUpdateTime: new Date(),
			})
		}
	}

	render = () => (
		<div className={css.test}>
			<h4>ClonePure</h4>
			<p>
				didMount:
				{this.state.didMountTime &&
					new Date(this.state.didMountTime - this.state.initTime).getMilliseconds()}
				ms
			</p>
			<p>
				didUpdate:
				{this.state.didUpdateTime &&
					new Date(this.state.didUpdateTime - this.state.initTime).getMilliseconds()}
				ms
			</p>
			<Button bsStyle="primary" onClick={this.props.onClick}>
				{this.props.value}
			</Button>
		</div>
	)
}

export default class CloneLayout extends React.PureComponent {
	state = {
		iterator: 0,
	}

	onClick = () => {
		this.setState(prevState => ({ iterator: prevState.iterator + 1 }))
	}

	render = () => {
		const generate = (x, y) => {
			const table = []
			const row = []
			for (let i = 0; i < x; i += 1) {
				const element = React.cloneElement(<ClonePure value={this.state.iterator} />, {
					onClick: this.onClick,
				})
				// const element = <ClonePure value={this.state.iterator} onClick={this.onClick} />
				row.push(element)
			}
			for (let i = 0; i < y; i += 1) {
				table.push(<div style={{ display: 'flex' }}>{row}</div>)
			}
			return table
		}
		return <div>{generate(10, 5)}</div>
	}
}
