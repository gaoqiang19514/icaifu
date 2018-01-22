import React from 'react'

import style from './style.scss'

import Banner from './banner.js'
import List from './list.js'
import Menu from '../../common/menu/'

const Home = () => {
	return (
		<div>
			<Banner />
			
			<div>
				<nav className={style.nav}>
					<a href="">0元购</a>
					<a href="">安全保障</a>
				</nav>
			</div>

			<List />

			<Menu />
		</div>
	)
}

export default Home