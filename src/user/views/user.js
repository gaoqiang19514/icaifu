import React from 'react'

import Logout from './logout.js'
import Navigator from './navigator.js'
import Profile from './profile.js'
import Operation from './operation.js'

export default () => (
	<div>
		<Profile />
		<Operation />
		<Navigator />
		<Logout />
	</div>
)