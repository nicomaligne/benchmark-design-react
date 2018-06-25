import React from 'react'
import PropTypes from 'prop-types'
import { BenchMarkCmp } from '../BenchMarkCmp'

export class ChildsAsFunction extends React.Component {
	static propTypes = {
		children: PropTypes.func.isRequired,
	}

	state = {
		iterator: 0,
	}

	onClick = () => {
		this.setState(prevState => ({
			clickTime: new Date(),
			iterator: prevState.iterator + 1,
		}))
	}

	render = () =>
		this.props.children({
			clickTime: this.state.clickTime,
			value: this.state.iterator,
			onClick: this.onClick,
		})
}

function childFunc(args) {
	return <BenchMarkCmp {...args} />
}

export default function ChildsAsFunctionLayout() {
	const generate = (x, y) => {
		const table = []
		const row = []
		for (let i = 0; i < x; i += 1) {
			const element = (
				<ChildsAsFunction key={i} title={`Child as function ${i}`}>
					{childFunc}
				</ChildsAsFunction>
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
