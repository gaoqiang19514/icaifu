import React from 'react';

import Navigator from './navigator.js';
import Profile from './profile.js';
import Menu from '@/common/menu/';

export default (props) => {
	return (
		<div>
			<Profile />
			<Navigator />
	        <Menu />
		</div>
	)
}

