import React from 'react'

import style from './style.scss'

export default () => (
	<div className={style.item}>
		<h2><span>i享乐JKXY20180116003</span><span className={style.status}>招标中</span></h2>
		
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
)