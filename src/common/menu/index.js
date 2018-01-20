import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import style from './style.scss'

const Menu = () => {
	return (
		<div className={style.menu}>
			<nav>
				<Link to="/home">推荐</Link>
				<Link to="/invest">理财</Link>
				<Link to="/user">我的</Link>
				<Link to="/other">其他</Link>
			</nav>
		</div>
	)
}

export default Menu