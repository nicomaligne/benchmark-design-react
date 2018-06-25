import React, { unstable_Profiler as Profiler } from 'react'
import { BenchMarkCmp } from '../BenchMarkCmp'

export function withHOC(WrappedComponent) {
	return class HOC extends React.Component {
		state = {
			iterator: 0,
		}

		onClick = () => {
			this.setState(prevState => ({
				clickTime: new Date(),
				iterator: prevState.iterator + 1,
			}))
		}

		render = () => (
			<WrappedComponent
				clickTime={this.state.clickTime}
				value={this.state.iterator}
				onClick={this.onClick}
			/>
		)
	}
}

export default class HOCLayout extends React.Component {
	logProfile = (id, phase, actualTime, baseTime, startTime, commitTime) => {
		if (phase === 'mount') {
			console.log(`${id} : {phase} phase:`)
			console.log(`actual time: ${actualTime}`)
			console.log(`base time: ${baseTime}`)
			// console.log(`start time: ${startTime}`)
			// console.log(`commit time: ${commitTime}`)
		}
	}
	render() {
		const generate = (x, y) => {
			const table = []
			const row = []
			for (let i = 0; i < x; i += 1) {
				const Element = withHOC(BenchMarkCmp)
				row.push(<Element key={i} title={`HOC ${i}`} />)
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
			<Profiler id="HOCLayout" onRender={this.logProfile}>
				<div>{generate(10, 1000)}</div>
			</Profiler>
		)
	}
}
