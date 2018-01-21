import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import {view as User} from '../../user'

import List from './list.js'

export default ({match}) => {
	return (
		<div>
			<List match={match} />
		</div>
	)
}