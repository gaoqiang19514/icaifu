import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default () => {
    return (
        <div>
            <nav className={style.nav}>
                <div className={style.box}>
                    <Link to="/voucher">我的代金券</Link>
                    <Link to="/voucher">我的加息券</Link>
                    <Link to="/voucher">我的现金奖励</Link>
                    <Link to="/voucher">交易记录</Link>
                </div>

                <div className={style.box}>
                    <Link to="/voucher">投资记录</Link>
                    <Link to="/voucher">回款计划</Link>
                </div>

                <div className={style.box}>
                    <Link to="/voucher">我的推荐</Link>
                    <Link to="/voucher">回款日历</Link>
                    <Link to="/voucher">月账单</Link>
                </div>

                <div className={style.box}>
                    <Link to="/voucher">安全中心</Link>
                </div>
            </nav>
        </div>
    )
}