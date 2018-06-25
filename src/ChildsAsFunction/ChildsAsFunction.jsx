import React, { unstable_Profiler as Profiler } from 'react'
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

export default class ChildsAsFunctionLayout extends React.Component {
	logProfile = (id, phase, actualTime, baseTime, startTime, commitTime) => {
		if (phase === 'mount') {
			console.log(`${id} : {phase} phase:`)
			console.log(`actual time: ${actualTime}`)
			console.log(`base time: ${baseTime}`)
			// console.log(`start time: ${startTime}`)
			// console.log(`commit time: ${commitTime}`)
		}
	}

	render = () => {
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
		return (
			<Profiler id="ChildsAsFunctionLayout" onRender={this.logProfile}>
				<div>{generate(10, 1000)}</div>
			</Profiler>
		)
	}
}
