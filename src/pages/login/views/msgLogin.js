import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

import styles from './style.scss';

export default class extends Component {

    constructor(props) {
        super(props)

        this.onUsernameChangeHandle = this.onChangeHandle.bind(this, 'username')
        this.onPasswordChangeHandle = this.onChangeHandle.bind(this, 'password')

        this.onUsernameClearHandle = this.onclearHandle.bind(this, 'username')
        this.onPasswordClearHandle = this.onclearHandle.bind(this, 'password')
    }

    onclearHandle = (type, e) => {
        if(type === 'username'){
            this.usernameInput.value = ''
            this.usernameBtn.style.display = 'none'
        }else if(type === 'password'){
            this.passwordInput.value = ''
            this.passwordBtn.style.display = 'none'
        }
    }

    onChangeHandle = (type, e) => {
        const val = e.target.value.trim()
        console.log(type)

        if(type === 'username'){
            if(val.length > 0){
                this.usernameBtn.style.display = 'block'
            }else{
                this.usernameBtn.style.display = 'none'
            }
        }else if(type === 'password'){
            if(val.length > 0){
                this.passwordBtn.style.display = 'block'
            }else{
                this.passwordBtn.style.display = 'none'
            }
        }

    }

    getCode = () => {
        console.log('getCode');
    }

    render() {
        return(
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <div className={styles.l_box}>
                    <div>
                        <div className={styles.l_box3}>
                            <div className={styles.m_box}>
                                <i className={`${styles.m_icon} ${styles.m_icon__user}`}></i>
                                <input className={styles.input} onChange={ this.onUsernameChangeHandle } type="text" ref={ input => this.usernameInput = input } placeholder="请输入手机号/用户名" />
                                <span className={styles.m_clear_btn} ref={ btn => this.usernameBtn = btn } onClick={this.onUsernameClearHandle}></span>
                            </div>
                        </div>
                        <div className={styles.l_box3}>
                            <div className={styles.m_box}>
                                <i className={`${styles.m_icon} ${styles.m_icon__pswd}`}></i>
                                <input className={styles.input} onChange={ this.onPasswordChangeHandle } type="text" ref={ input => this.passwordInput = input } placeholder="请输入验证码" />
                                <span className={styles.m_clear_btn_pswd_msg} ref={ input => this.passwordBtn = input } onClick={this.onPasswordClearHandle}></span>
                                <span className={styles.m_get_code} onClick={this.getCode}>获取验证码</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.l_box4}>
                        <Link className={styles.m_link} to="/forgetPassword">忘记密码？</Link>
                        <Link className={styles.m_link} to="/register">新用户注册</Link>
                    </div>
                </div>

                <div className={styles.l_box2}>
                    <button className={styles.button} type="submit">登录</button>
                </div>
            </form>
        )
    }
}