import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default () => {
	return (
		<div className={style.item}>
			<h2>极计划-45天</h2>
			<div className={style.desc}>
				<div>
					<p>7.00% + 499元</p>
					<p className={style.title}>预期年化</p>
				</div>
				<div>
					<p>15000元</p>
					<p className={style.title}>投资金额</p>
				</div>
                <Link to="/jjh/1">投资</Link>
			</div>
			<div className="progress"></div>
		</div>
	)
}