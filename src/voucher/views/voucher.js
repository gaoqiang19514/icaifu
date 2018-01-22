/*
* @Author: gao
* @Date:   2018-01-22 17:41:03
* @Last Modified by:   gao
* @Last Modified time: 2018-01-22 18:35:14
*/
import React, {Component} from 'react'
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

import style from './style.scss'
import Item from './item.js'

export default class Voucher extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            sliderList: []
        }
    }

    componentDidMount() {

        var mySwiper = new Swiper('.swiper-container', {
        })
        
    }

    render() {
        return (
            <div>
                <div className={style.nav}>
                    <ul>
                        <li className={style.active}>未使用</li>
                        <li>已使用</li>
                        <li>已过期</li>
                    </ul>                        
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Item />
                            <Item />
                        </div>
                        <div className="swiper-slide">
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                        <div className="swiper-slide">
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}