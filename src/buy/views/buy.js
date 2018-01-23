import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

import Head from './head.js'

export default () => {
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
        </div>
    )
}