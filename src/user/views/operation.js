import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default () => {
    return (
        <div className={style.operation}>
            <div className={style.cell}>冻结资金：<strong>0.00</strong></div>
            <div className={style.aside}>
                <Link to="/recharge">充值</Link>
                <a href="">提现</a>
            </div>
        </div>
    )
}