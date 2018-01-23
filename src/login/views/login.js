import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

export default () => {
    return (
        <div className={style.login}>
            
            <div className={style.wrap}>
                <div className={style.line}>
                    <input type="text" placeholder="请输入手机号/用户名" />
                </div>
                <div className={style.line}>
                    <input type="password" placeholder="请输入您的密码" minLength="6" maxLength="12" />
                </div>
            </div>

            <div className={style.wrap}>
                <button className={style.button}>登录</button>
            </div>

            <div className={`${style.wrap} ${style.box}`}>
                <Link to="/forgetPassword">忘记密码？</Link>
                <Link to="/register">注册新账号</Link>
            </div>

        </div>
    )
}