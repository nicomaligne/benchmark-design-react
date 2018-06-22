import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ChildsAsFunction } from '../ChildsAsFunction'
import { HOC } from '../HOC'
import { RenderProps } from '../RenderProps'
import { Clone } from '../Clone'
import { Home } from '../Home'

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/hoc" component={HOC} />
			<Route path="/renderProps" component={RenderProps} />
			<Route path="/clone" component={Clone} />
			<Route path="/childsasfunction" component={ChildsAsFunction} />
			<Route component={Home} />
		</Switch>
	)
}
