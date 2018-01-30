import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

import Head from './head.js'

class Buy extends Component {

    constructor(props) {
        super(props)

        this.handlerChange = this.handlerChange.bind(this)
        this.handlerCheckedAll = this.handlerCheckedAll.bind(this)

        this.state = {
            list: [
                {id: 1, title: '香蕉', checked: false},
                {id: 2, title: '橘子', checked: false},
                {id: 3, title: '苹果', checked: false},
            ]
        }
    }

    handlerChange(id) {
        const list = this.state.list.map(function(item, index) {
            if(item.id === id){
                return {
                    ...item,
                    checked: !item.checked
                }
            }
            return item
        });

        this.setState({
            list: list
        }, () => {
            console.log(this.state.list)
        })
    }

    handlerCheckedAll() {
        const list = this.state.list.map(function(item, index) {
            return {
                ...item,
                checked: !item.checked
            }
        });

        this.setState({
            list: list
        }, () => {
            console.log(this.state.list)
        })    
    }

    render() {
        const that = this
        return (
            <div>
                <Head />
                <div className={style.balance}>
                    <span>账户余额：<strong>0.00</strong>元</span>
                    <Link to="/recharge">充值</Link>
                </div>

                <div className={style.box}>
                    <dl>
                        <dt>CF码</dt>
                        <dd><input type="text" placeholder="请输入CF码（没有可不填）" /></dd>
                    </dl>
                </div>

                <div>
                    <div>
                        <label><input onChange={this.handlerCheckedAll} type="checkbox" />全选</label>
                    </div>

                    {
                        this.state.list.map(function(item, index) {
                            return (
                                <div key={item.id}>
                                    <label><input onChange={() => {
                                        that.handlerChange(item.id)
                                    }} type="checkbox" checked={item.checked} />{item.title}</label>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }

}

export default Buy