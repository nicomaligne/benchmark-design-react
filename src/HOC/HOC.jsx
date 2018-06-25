import React from 'react'
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

export default function HOCLayout() {
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
	return <div>{generate(10, 1000)}</div>
}
