import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

const Menu = () => {
	return (
		<div>
			<div className={style.sibling}>&nbsp;</div>
			<div className={style.menu}>
				<nav>
					<Link to="/home">首页</Link>
					<Link to="/invest">投资</Link>
					<Link to="/activity">发现</Link>
					<Link to="/other">我的</Link>
				</nav>
			</div>
		</div>

	)
}

export default Menu