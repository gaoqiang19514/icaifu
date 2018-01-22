import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import {view as User} from '../../user'

import List from './list.js'
import Menu from '../../common/menu/'

export default ({match}) => {
	return (
		<div>
			<List match={match} />
            <Menu />
		</div>
	)
}