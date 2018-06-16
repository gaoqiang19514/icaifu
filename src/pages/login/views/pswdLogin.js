import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom'

import styles from './style.scss';

export default class extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pswdViewState: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onLoginHandle('15014095291', '332881532');
    }

    clearInput = () => {
        console.log('clearInput');
    }

    togglePswd = () => {
        this.setState({
            pswdViewState: !this.state.pswdViewState
        });
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
                                <input className={styles.input} type="text" placeholder="请输入手机号/用户名" />
                                <span className={styles.m_clear_btn} onClick={this.clearInput}></span>
                            </div>
                        </div>
                        <div className={styles.l_box3}>
                            <div className={styles.m_box}>
                                <i className={`${styles.m_icon} ${styles.m_icon__pswd}`}></i>
                                <input className={styles.input} type="password" placeholder="请输入您的密码" />
                                <span className={styles.m_clear_btn_pswd} onClick={this.clearInput}></span>
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