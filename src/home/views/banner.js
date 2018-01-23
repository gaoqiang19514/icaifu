import React, { Component } from 'react'

import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

import style from './banner.scss'

class Banner extends Component {

    componentDidMount() {
        new Swiper('.swiper-container', {
            effect : 'fade',
            pagination: '.swiper-pagination',
            paginationClickable :true
        })
    }

	render() {
		return (
			<div className={style.banner}>
				
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img alt="" src="https://www.icaifu.com/images/h5/activity/index_banner/banner13.png" />
                        </div>
                        <div className="swiper-slide">
                            <img alt="" src="https://www.icaifu.com/images/h5/activity/index_banner/14.jpg" />
                        </div>
                        <div className="swiper-slide">
                            <img alt="" src="https://www.icaifu.com/images/h5/activity/index_banner/15.jpg" />
                        </div>
                    </div>
                <div className={`swiper-pagination ${style['swiper-pagination']}`}></div>

                </div>
			</div>
		)
	}
}

export default Banner