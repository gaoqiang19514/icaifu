import React from 'react'

import style from './style.scss'

export default () => (
    <div className={style.profile}>
        <div className={style.hd}>
            <p className={style.num}>7.0%</p>
            <p className={style.title}>预期年化利率</p>
        </div>

        <div className={style.bd}>
            <div className={style.cell}>
                <p className={style.num}>461156.00元</p>
                <p className={style.subtitle}>剩余金额</p>
            </div>
            <div className={style.cell}>
                <p className={style.num}>8000000.00</p>
                <p className={style.subtitle}>借款金额</p>
            </div>
        </div>
    </div>
)