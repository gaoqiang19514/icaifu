import React from 'react'

import Logout from './logout.js'
import Navigator from './navigator.js'
import Profile from './profile.js'
import Menu from '@/common/menu/'

export default (props) => {
	return (
		<div>
			<Profile />
			<Navigator />
			<Logout />
	        <Menu />
		</div>
	)
}

