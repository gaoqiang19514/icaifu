import React, { Component } from 'react'

import style from './style.scss'

class Coupon extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={style.modal}>
                <div className="list">
                    {
                        this.props.cashList.map(function(item,index) {
                            return (
                                <div key={index} className={style._item}>
                                    <div className={style._title}>{this.props.title}<span>编号:78451241254</span></div>
                                    <div>
                                        <div>
                                            <ul>
                                                <li>单笔投资>0.00元</li>
                                                <li>期限大于等于2个月</li>
                                                <li>除极计划外其余产品可用</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div>{item[this.props.type]}</div>
                                            <div>
                                                <button  onClick={() => { this.props.chooseCoupon(this.props.type, item, index)} }>{ item.checked ? '取消' : '选择'}</button>
                                            </div>
                                        </div>    
                                    </div>
                                    <div>
                                        <p>有效期至：2017-09-16 00:00:00</p>
                                    </div>
                                </div>
                            )
                        }, this)
                    }
                </div>

                <div className={style.box}>
                    <button onClick={() => {
                        this.props.showModal(this.props.type)
                    }}>确定</button>
                </div>
            </div>
		)
	}
}

export default Coupon