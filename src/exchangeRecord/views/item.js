/*
* @Author: gao
* @Date:   2018-01-23 16:21:58
* @Last Modified by:   gao
* @Last Modified time: 2018-01-23 16:30:32
*/
import React from 'react'

import style from './style.scss'

export default ({name}) => {

    return (
        <div className={style.item}>

            <div className={style.line}>
                <span>事件</span>
                <span className={style.text}>充值</span>
            </div>

            <div className={style.line}>
                <span>金额</span>
                <span className={style.text}>{name}--100元</span>
            </div>

            <div className={style.line}>
                <span>时间</span>
                <span className={style.text}>2018.01.22 16:27:38</span>
            </div>

            <div className={style.line}>
                <span>交易单号</span>
                <span className={style.text}>15165807620791227</span>
            </div>

            <div className={style.line}>
                <span>状态</span>
                <span className={style.text}>继续处理</span>
            </div>

        </div>
    )
}