import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

const Item = ({ name, match, id }) => (
	<Link className={style.link} to={`${match.url}/${id}`}>
		<div className={style.item}>
			<h2><span>{ name }</span><span className={style.status}>招标中</span></h2>
			<div className={style.main}>
				<div className={style.cell}>
					<p className={style.percentage}>7%</p>
					<p className={style.label}>预期年化</p>
				</div>
				<div className={style.cell}>
					<p className={style.percentage}>7%</p>
					<p className={style.label}>项目期限</p>
				</div>
				<div className={style.cell}>
					<p className={style.percentage}>7%</p>
					<p className={style.label}>可购金额（元）</p>
				</div>
			</div>
		</div>
	</Link>
)

export default ({data, match}) => {
	return (
		<div>
			{
				data.map((item, index) => {
					return (
						<Item 
							id={ item.pro_id } 
							name={ item.pro_name }
							match={match} 
							key={ item.pro_id }
						/>
					)
				})
			}
		</div>
	)
}