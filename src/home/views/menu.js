import React from 'react'

import style from './menu.scss'

const Menu = () => {
	return (
		<div className={style.menu}>
			<nav>
				<a href="">推荐</a>
				<a href="">理财</a>
				<a href="">我的</a>
				<a href="">其他</a>
			</nav>
		</div>
	)
}

export default Menu