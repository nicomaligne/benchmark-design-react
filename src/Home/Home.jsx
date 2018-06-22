import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import classNames from 'classnames'
import sass from './Home.scss'

class Home extends React.PureComponent {
	render() {
		return (
			<div className={classNames(sass.home)}>
				<Link to="/clone" href="/clone">
					<Button bsStyle="link">Clone element</Button>
				</Link>
				<Link to="/hoc" href="/hoc">
					<Button bsStyle="link">HOC</Button>
				</Link>
				<Link to="/renderprops" href="/renderprops">
					<Button bsStyle="link">Render Props</Button>
				</Link>
				<Link to="/childsasfunction" href="/childsasfunction">
					<Button bsStyle="link">CHildren as function</Button>
				</Link>
			</div>
		)
	}
}

export default Home
