import React, { Component } from 'react'

import List from './list.js'
import Menu from '../../common/menu/'

export default class Invest extends Component {
	render() {
		return (
			<div>
				<List match={this.props.match} />
				<Menu />
			</div>		
		)
	}
}