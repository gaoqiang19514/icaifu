import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components';

import styles from './style.scss';

export default class extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pswdViewState: false
        }

        this.onUsernameChangeHandle = this.onChangeHandle.bind(this, 'username')
        this.onPasswordChangeHandle = this.onChangeHandle.bind(this, 'password')

        this.onUsernameClearHandle = this.onclearHandle.bind(this, 'username')
        this.onPasswordClearHandle = this.onclearHandle.bind(this, 'password')
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onLoginHandle('15014095291', '332881532');
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

    togglePswd = () => {
        this.setState({
            pswdViewState: !this.state.pswdViewState
        }, () => {
            this.state.pswdViewState  ? this.passwordInput.type = 'text' : this.passwordInput.type = 'password'
        });
    }

    onChangeHandle = (type, e) => {
        const val = e.target.value.trim()

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

    render() {
        const {pswdViewState} = this.state;

        let viewPswdStyle = styles.m_view_pswd_close;
        if(pswdViewState){
            viewPswdStyle = styles.m_view_pswd_open;
        }

        return(
            <form onSubmit={this.handleSubmit}>
                <div className={styles.l_box}>
                    <div>
                        <div className={styles.l_box3}>
                            <div className={styles.m_box}>
                                <i className={`${styles.m_icon} ${styles.m_icon__user}`}></i>
                                <input onChange={ this.onUsernameChangeHandle } ref={ input => this.usernameInput = input } className={styles.input} type="text" placeholder="请输入手机号/用户名" />
                                <span className={styles.m_clear_btn} ref={ btn => this.usernameBtn = btn } onClick={ this.onUsernameClearHandle }></span>
                            </div>
                        </div>
                        <div className={styles.l_box3}>
                            <div className={styles.m_box}>
                                <i className={`${styles.m_icon} ${styles.m_icon__pswd}`}></i>
                                <input onChange={ this.onPasswordChangeHandle } ref={ input => this.passwordInput = input } className={styles.input} type="password" placeholder="请输入您的密码" />
                                <span className={styles.m_clear_btn_pswd} ref={ input => this.passwordBtn = input } onClick={ this.onPasswordClearHandle }></span>
                                <span className={viewPswdStyle} onClick={this.togglePswd}></span>
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