import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default () => {
    return (
        <div>
            <div className={style.head}>
                <h2>剩余可购金额</h2>
                <p>444400.00</p>
            </div>

            <div className={`${style.box} ${style.mg}`}>
                <span>账户余额：<strong>0.0</strong>元</span>
                <Link to="/recharge">充值</Link>
            </div>

            <div className={`${style.box} ${style.mg}`}>
                <Link to="/invest/12">
                    <span>查看项目详情</span>
                </Link>
            </div>

            <div>

                <div className={style.box}>
                    <span>投资金额：</span>
                    <span>15000.00元</span>
                </div>

                <div className={style.box}>
                    <span>预期收益：</span>
                    <span>129.45元 + 499.00元</span>
                </div>

                <div className={style.box}>
                    <span>实际支付：</span>
                    <span>15000.00元</span>
                </div>

                <div className={style.box}>
                    <span className={style.shrink}>CF码</span>
                    <input className={style.input} type="text" placeholder="请输入CF码" />
                </div>

                <div className={`${style.box} ${style.center}`}>
                    <label><input type="checkbox"/>同意<a href="">《i财富四方借款协议》</a></label>
                </div>

                <div className={style.container}>
                    <button className={style.button}>余额不足，充值15000元</button>
                </div>
            </div>

        </div>
    )
}