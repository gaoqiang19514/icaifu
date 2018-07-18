import React, { Component } from 'react';

import Navigator from './navigator.js';
import Profile from './profile.js';
import Menu from '@/common/menu/';

export default class extends Component {
	render() {
		return (
			<div>
				<Profile history={ this.props.history } />
				<Navigator />
				<Menu />
			</div>
		)
	}
}

