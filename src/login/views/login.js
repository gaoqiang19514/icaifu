import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import {actions as authActions} from '../../auth/'

import style from './style.scss'

class Login extends Component {

    constructor(props) {
        super(props)

        this.login = this.login.bind(this)
    }

    login() {
        this.props.onLogin()
    }

    render(){
        
        const {from} = this.props.location.state || {from: {path: '/'}}

        if(this.props.auth){
            return (
                <Redirect to={from} />
            )
        }

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
                    <button onClick={this.login} className={style.button}>登录</button>
                </div>

                <div className={`${style.wrap} ${style.box}`}>
                    <Link to="/forgetPassword">忘记密码？</Link>
                    <Link to="/register">注册新账号</Link>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: () => {
            dispatch(authActions.login())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
