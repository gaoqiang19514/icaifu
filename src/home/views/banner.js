import React, { Component } from 'react'

import style from './banner.scss'

class Banner extends Component {

	render() {
		return (
			<div className={style.banner}>
				<img src="https://www.icaifu.com/images/h5/activity/index_banner/banner13.png" />
			</div>
		)
	}
}


export default Banner