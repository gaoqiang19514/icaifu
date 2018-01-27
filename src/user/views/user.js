import React from 'react'

import Logout from './logout.js'
import Navigator from './navigator.js'
import Profile from './profile.js'
import Operation from './operation.js'
import Menu from '../../common/menu/'

export default (props) => {
	return (
		<div>
			<Profile />
			<Operation />
			<Navigator />
			<Logout />
	        <Menu />
		</div>
	)
}

