/*
* @Author: gao
* @Date:   2018-01-22 18:17:59
* @Last Modified by:   gao
* @Last Modified time: 2018-01-22 18:31:00
*/
import React from 'react'

import style from './style.scss'

export default () => (
    <div className={style.item}>
        <div>
            <span className={style.title}>代金券</span>
            <span className={style.num}>编号：3399246866</span>
        </div>
        <div className={style.main}>
            <ul>
                <li>单笔投资≥5000元</li>
                <li>单笔投资≥5000元</li>
                <li>单笔投资≥5000元</li>
            </ul>
            <div>
                <div>12元</div>
                <lable>已过期</lable>   
            </div>
        </div>
        <div className={style.expires}>
            <p>有效期至：2017-09-16 00:00:00</p>
        </div>
    </div>
)