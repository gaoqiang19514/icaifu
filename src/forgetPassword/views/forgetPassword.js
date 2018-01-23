import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default () => {
    return (
        <div className={style.container}>
            
            <div className={style.box}>
                <div className={style.line}>
                    <input type="text" placeholder="请输入手机号" />
                </div>

                <div className={style.line}>
                    <input type="text" placeholder="请输入右侧的验证码" />
                    <img className={style.img} src="http://192.168.1.25/ver_code.jpg?id=0.6439735326867758" alt=""/>
                </div>

                <div className={style.line}>
                    <input type="text" placeholder="请输入短信验证码" />
                    <span className={style.link}>获取验证码</span>
                </div>

                <div className={style.line}>
                    <input type="text" placeholder="请输入新密码" />
                </div>

                <div className={style.line}>
                    <input type="text" placeholder="请再次输入新密码" />
                </div>
            </div>

            <div className={style.wrap}>
                <button className={style.button}>下一步</button>
            </div>

        </div>
    )
}