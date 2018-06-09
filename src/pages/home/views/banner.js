import React, { Component } from 'react'

import axios from 'axios';

import { createSignature } from './../../../api/api.js'

import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import style from './banner.scss'


class Banner extends Component {

    constructor(props) {
        super(props)
        this.state = {
            banners: []
        }
    }

    componentWillMount(){
        // 加载广告图
        this._isMounted = true
        this.loadBanners()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    loadBanners() {
        const keyStr = createSignature()

        axios.get('/product/activity_list?' + keyStr)
        .then((response) => {
            if(response.status === 200 && response.data.item && response.data.item.length){

                if(!this._isMounted){return}
                this.setState({
                    banners: response.data.item
                }, () => {
                    new Swiper('.swiper-container', {
                        effect : 'fade',
                        pagination: '.swiper-pagination',
                        paginationClickable :true
                    })
                })
            }
        })
        .catch((error) => {

        })
    }

	render() {
        const { banners } = this.state
		return (
			<div className={style.banner}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            banners.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={ item.id }>
                                        <a href={ item.activityUrl }>
                                            <img alt={ item.intro } src={ item.appPicUrl } />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={`swiper-pagination ${style['swiper-pagination']}`}></div>
                </div>
			</div>
		)
	}
}

export default Banner