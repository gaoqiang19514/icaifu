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
                    <input type="password" placeholder="请输入您的密码" minLength="6" maxLength="12" />
                </div>

                <div className={style.line}>
                    <input type="password" placeholder="请确认您的密码" minLength="6" maxLength="12" />
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
                    <input type="text" placeholder="请输入邀请码" />
                </div>
                
            </div>

            <div className={`${style.center} ${style.wrap}`}>
				我已阅读并同意<a href="/h5/user/help/users.shtml">《服务协议》</a>和<a href="/h5/user/help/creditor.shtml">《隐私条款》</a>
            </div>

            <div className={style.wrap}>
                <button className={style.button}>注册</button>
            </div>

            <div className={`${style.center} ${style.wrap}`}>
                注册成功后将会收到i财富发送的相关通知短信
            </div>

            <div className={`${style.center} ${style.wrap}`}>
                已有账号？<Link to="/login">去登录</Link>
            </div>

        </div>
    )
}