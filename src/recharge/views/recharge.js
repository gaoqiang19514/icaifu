import React, { Component } from 'react'

import style from './style.scss'

class Recharge extends Component {
    
    render() {
        return (
            <div className={style.recharge}>
                <div className={style.box}>充值不收取手续费，充值金额必须为整数</div>

                <div><input className={style.input} type="text" placeholder="请输入充值金额" /></div>

                <div className={style.box}>
                    <button className={style.button}>确定</button>
                </div>

            </div>
        )
    }
}

export default Recharge