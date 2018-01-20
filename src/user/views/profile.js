import React from 'react'

import style from './style.scss'

export default () => {
    return (
        <div className={style.profile}>

            <div className={style.total}>
                <p className={style.num}>0.00</p>
                <p className={style.title}>资产总额（元）</p>
            </div>

            <div className={style.money}>
                <div className={style.cell}>
                    <p className={style.num}>1.00</p>
                    <p>累计收益</p>
                </div>
                <div className={style.cell}>
                    <p className={style.num}>1.00</p>
                    <p>可用余额</p>
                </div>
            </div>
            
        </div>
    )
}