import React from 'react'

import style from './style.scss'

export default () => {
    return (
        <div>
            <nav className={style.nav}>
                <div className={style.box}>
                    <a href="">我的代金券</a>
                    <a href="">我的加息券</a>
                    <a href="">我的现金奖励</a>
                    <a href="">交易记录</a>
                </div>

                <div className={style.box}>
                    <a href="">投资记录</a>
                    <a href="">回款计划</a>
                </div>

                <div className={style.box}>
                    <a href="">我的推荐</a>
                    <a href="">回款日历</a>
                    <a href="">月账单</a>
                </div>

                <div className={style.box}>
                    <a href="">安全中心</a>
                </div>
            </nav>
        </div>
    )
}