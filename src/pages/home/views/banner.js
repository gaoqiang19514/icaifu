import React, { Component } from 'react'
import axios from 'axios';
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

import { buildPublicSign } from '@/api/api.js'
import { view as Skeleton } from '@/common/skeleton';
import style from './style.scss';

const Item = ({ activityUrl, intro, appPicUrl }) => (
    <div className="swiper-slide">
        <a href={ activityUrl }>
            <img alt={ intro } src={ appPicUrl } />
        </a>
    </div>        
)

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ready: false,
            banners: []
        }
    }

    componentWillMount(){
        this.loadFlag = true;
        this.loadBanners();
    }

    componentWillUnmount() {
        this.loadFlag = false;
    }

    loadBanners() {
        const keyStr = buildPublicSign();

        axios.get('/product/activity_list?' + keyStr)
        .then((response) => {
            if(response.status !== 200 || !response.data.item || !response.data.item.length){
                return;
            }

            if(!this.loadFlag){return}
            this.setState({
                ready: true,
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
        });
    }

	render() {
        const {banners} = this.state;

		return (
            <Skeleton type="banner" ready={this.state.ready}>
                <div className={`swiper-container ${style.swiper__container}`}>
                    <div className="swiper-wrapper">
                        {
                            banners.map((item, index) => {
                                return (
                                    <Item 
                                        key={item.id}
                                        activityUrl={item.appPicUrl}
                                        intro={item.intro}
                                        appPicUrl={item.appPicUrl}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={`swiper-pagination swiper-pagination ${style.swiper__pagination}`}></div>
                </div>
            </Skeleton>
		)
	}
}