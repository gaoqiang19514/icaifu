import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';

import {actions as authActions} from '../../auth/'
import {actions as loadingActions} from '../../common/loading'


import style from './style.scss'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                username: {
                    valid: false,
                    value: '',
                    error: ''
                },
                password: {
                    valid: false,
                    value: '',
                    error: ''
                }
            }
        }
        
        this.login             = this.login.bind(this)
        this.handleSubmit      = this.handleSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
    }

    login(token) {
        this.props.onLogin(token)
    }

    handleValueChange(field, value, type = 'string') {
        if(type === 'number'){value = value + 0}

        const {form} = this.state
        const newFileObj = {value: value, valid: true, error: ''}

        switch(field){
            case 'username':
                if(value.length >= 12){
                    newFileObj.error = '用户名最多4个字符'
                    newFileObj.valid = false
                }else if(value.length === 0){
                    newFileObj.error = '请输入用户名'
                    newFileObj.valid = false
                }
                break
            case 'password':
                if(value.length >= 12){
                    newFileObj.error = '密码最多4个字符'
                    newFileObj.valid = false
                }else if(value.length === 0){
                    newFileObj.error = '请输入密码'
                    newFileObj.valid = false
                }
                break
            default:
        }

        this.setState({
            form: {
                ...form,
                [field]: newFileObj
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const {form: {username, password}} = this.state
        // if(!username.valid || !password.valid){
        //     alert('请填写完整的登录信息')
        //     return
        // }

        const that = this

        this.props.onShowLoading()

        axios.post('/login', {
            username: 'Fred',
            password: 'Flintstone'
        })
        .then(function (response) {
            if(response.status === 200){
                if(response.data.code === 1){
                    that.login(response.data.token)
                    that.props.onHideLoading()
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    render(){
        const {from} = this.props.location.from || {from: {pathname: '/'}}
        
        // 如果登录成功 这里需要跳转走 还有一种情况是 用户已经登录，但是想到login页面来看看？
            // 1. 进入login页面时，将用户登出处理
            // 2. 允许用户进入 但是怎么处理呢？
            // 3. 直接跳走，不允许登录的用户进入登录页面
            // 什么情况需要将用户跳走？

        // 目前的处理是，只要用户登录则统一跳走
        if(this.props.auth.isAuthenticated){
            return (<Redirect to={from} />)
        }

        const {form: {username, password}} = this.state;

        return (
            <div className={style.login}>
                
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={style.wrap}>
                        <div className={style.line}>
                            <input type="text" onChange={(e) => this.handleValueChange('username', e.target.value)} placeholder="请输入手机号/用户名" />
                        </div>
                        <div>{!username.valid && <span>{username.error}</span>}</div>
                        <div className={style.line}>
                            <input type="password" onChange={(e) => this.handleValueChange('password', e.target.value)} placeholder="请输入您的密码" minLength="6" maxLength="12" />
                        </div>
                        <div>{!password.valid && <span>{password.error}</span>}</div>
                    </div>

                    <div className={style.wrap}>
                        <button className={style.button}>登录</button>
                    </div>

                    <div className={`${style.wrap} ${style.box}`}>
                        <Link to="/forgetPassword">忘记密码？</Link>
                        <Link to="/register">注册新账号</Link>
                    </div>
                </form>

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
        onLogin: (token) => {
            dispatch(authActions.login(token))
        },
        onShowLoading: () => {
			dispatch(loadingActions.showLoading())
		},
		onHideLoading: () => {
			dispatch(loadingActions.hideLoading())
		}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)
