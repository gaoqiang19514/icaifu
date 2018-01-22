import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import {view as User} from '../../user'

import List from './list.js'
import Menu from '../../common/menu/'

import Loading from '../../common/loading'

export default class Invest extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		if(!this.props.match.isExact) {
			this.setState({loading: false});
		}

		setTimeout(() => {
			this.setState({loading: false})
		}, 1000)
	}

	render() {
		return (
			<div>
				<List match={this.props.match} />
				<Menu />

				<Loading show={this.state.loading} />
			</div>		
		)
	}
}