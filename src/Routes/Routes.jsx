import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { registerObserver } from 'react-perf-devtool'
import { ChildsAsFunction } from '../ChildsAsFunction'
import { HOC } from '../HOC'
import { RenderProps } from '../RenderProps'
import { Clone } from '../Clone'
import { Home } from '../Home'

const options = {
	shouldLog: true,
	port: 8080,
	components: ['Clone', 'ChildsAsFunction', 'RenderProps', 'HOC'],
}

registerObserver(options)

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/hoc" component={HOC} />
			<Route path="/renderProps" component={RenderProps} />
			<Route path="/clone" component={Clone} />
			<Route path="/childsasfunction" component={ChildsAsFunction} />
		</Switch>
	)
}
