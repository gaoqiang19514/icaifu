import React from "react"

import style from './style.scss'

export default () => {
	return (
		<div className={style.safety}>
			<div className={style.section}>
				<ul>
					<li><span>托管账号</span><span>6000060169201957汇付账户<a href="">查询</a></span></li>
					<li><span>绑定手机</span><span>150*****291</span></li>
					<li><span>登录密码</span><span><a href="">修改</a></span></li>
				</ul>
			</div>
		</div>
	)
}