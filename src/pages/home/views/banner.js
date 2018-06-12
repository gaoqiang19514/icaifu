import React, { Component } from 'react'
import axios from 'axios';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

import './banner.scss'
import { createSignature } from '@/api/api.js'

const Item = ({ activityUrl, intro, appPicUrl }) => (
    <div className="swiper-slide">
        <a href={ activityUrl }>
            <img alt={ intro } src={ appPicUrl } />
        </a>
    </div>        
)

class Banner extends Component {

    constructor(props) {
        super(props)
        this.state = {
            banners: []
        }
    }

    componentWillMount(){
        this.loadFlag = true
        this.loadBanners()
    }

    componentWillUnmount() {
        this.loadFlag = false
    }

    loadBanners() {
        const keyStr = createSignature()

        axios.get('/product/activity_list?' + keyStr)
        .then((response) => {
            if(response.status !== 200 || !response.data.item || !response.data.item.length){
                return;
            }

            if(!this.loadFlag){return}
            this.setState({
                banners: response.data.item
            }, () => {
                new Swiper('.swiper-container', {
                    effect : 'fade',
                    pagination: '.swiper-pagination',
                    paginationClickable :true
                })
            })
        })
        .catch((error) => {
        })
    }

	render() {
        const { banners } = this.state

		return (
			<div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            banners.map((item, index) => {
                                return (
                                    <Item 
                                        key={ item.id }
                                        activityUrl={ item.appPicUrl }
                                        intro={ item.intro }
                                        appPicUrl={ item.appPicUrl }
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination swiper-pagination"></div>
                </div>
			</div>
		)
	}
}

export default Banner