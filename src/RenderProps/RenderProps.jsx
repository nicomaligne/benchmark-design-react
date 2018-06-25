import React, { unstable_Profiler as Profiler } from 'react'
import PropTypes from 'prop-types'
import { BenchMarkCmp } from '../BenchMarkCmp'

export class RenderProps extends React.PureComponent {
	static propTypes = {
		renderProps: PropTypes.func.isRequired,
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
		this.props.renderProps({
			clickTime: this.state.clickTime,
			value: this.state.iterator,
			onClick: this.onClick,
		})
}

function myRenderProps(args) {
	return <BenchMarkCmp {...args} />
}

export default class RenderPropsLayout extends React.Component {
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
				const element = (
					<RenderProps key={i} title={`Render Props ${i}`} renderProps={myRenderProps} />
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
			<Profiler id="RenderPropsLayout" onRender={this.logProfile}>
				<div>{generate(10, 1000)}</div>
			</Profiler>
		)
	}
}
