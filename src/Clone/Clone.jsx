import React from 'react'
import PropTypes from 'prop-types'
import { BenchMarkCmp } from '../BenchMarkCmp'

export class CloneElement extends React.Component {
	static propTypes = {
		children: PropTypes.element.isRequired,
	}

	state = {
		iterator: 0,
	}
	onClick = () => {
		this.setState(prevState => ({ clickTime: new Date(), iterator: prevState.iterator + 1 }))
	}
	render = () =>
		React.cloneElement(this.props.children, {
			clickTime: this.state.clickTime,
			onClick: this.onClick,
			value: this.state.iterator,
		})
}

export default function CloneLayout() {
	const generate = (x, y) => {
		const table = []
		const row = []
		for (let i = 0; i < x; i += 1) {
			const element = (
				<CloneElement key={i}>
					<BenchMarkCmp title={`Clone Element ${i}`} />
				</CloneElement>
			)
			row.push(element)
		}
		for (let i = 0; i < y; i += 1) {
			table.push(
				<div style={{ display: 'flex' }} key={i}>
					{row}
				</div>,
			)
		}
		return table
	}
	return <div>{generate(10, 1000)}</div>
}
