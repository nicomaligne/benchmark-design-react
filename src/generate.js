import React from 'react'
import { BenchMarkCmp } from './BenchMarkCmp'

export default function generate(x, y) {
	const table = []
	const row = []
	for (let i = 0; i < x; i += 1) {
		row.push(<BenchMarkCmp title={`Simple Render ${i}`} key={i} />)
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
