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

const styleFixed = {
    position: 'fixed',
    top: '52px',
    bottom: '0',
    left: '0',
    right: '0',
    overflow: 'auto'
}

export default class Voucher extends Component {

    constructor(props) {
        super(props) 

        //  1 未使用 2 已使用 3 已过期
        this.state = {
            current: '1',
            tabNavs: [
                {id: 2, tabName: '未使用', value: '1'},
                {id: 1, tabName: '已使用', value: '2'},
                {id: 3, tabName: '已过期', value: '3'}
            ],
            couponList: [
                {id: 1, title: '代金券', cash: 100, state: '3'},
                {id: 2, title: '代金券', cash: 300, state: '3'},
                {id: 3, title: '代金券', cash: 70, state: '2'},
                {id: 4, title: '代金券', cash: 90, state: '1'},
                {id: 5, title: '代金券', cash: 120, state: '2'},
                {id: 6, title: '代金券', cash: 500, state: '3'},
                {id: 7, title: '代金券', cash: 1000, state: '3'},
                {id: 8, title: '代金券', cash: 190, state: '3'}
            ]
        }

        this.switchView = this.switchView.bind(this)
        this.filterCouponList = this.filterCouponList.bind(this)
    }

    switchView(state) {
        this.setState({
            current: state
        })
    }

    filterCouponList(state, list) {
        return list.filter(function(item) {
            return item.state === state
        });
    }

    render() {

        const { tabNavs, couponList, current } = this.state

        const list = this.filterCouponList(current, couponList)

        return (
            <div>
                <div className={style.nav}>
                    <ul>
                        {
                            tabNavs.map(function(item, index) {
                                let activeClass = current === item.value ? style.active : ''
                                return (
                                    <li key={item.id} className={activeClass} onClick={() => this.switchView(item.value)}>{item.tabName}</li>
                                )
                            }, this)
                        }
                    </ul>                        
                </div>
                <div style={styleFixed}>
                    <div>
                        {
                            list.map(function(item, index) {
                                return (
                                    <Item key={item.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}