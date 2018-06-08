import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import axios from 'axios';
import md5 from 'md5'


import style from './style.scss'
import {actions as authActions} from './../../../common/auth/'
import {actions as loadingActions} from './../../../common/loading'
import Menu from './../../../common/menu/'

var forge = require('node-forge');


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

        const APP_KAY = '9wsez1o5cc2oetj6f6n8oh'
        
        const signature = () => {
            let signParams = [
                'ver=5.1.0',
                'uuid=915EFFC9-BCA6-4431-A36A-D4B5069D36D3',
                'systemVersion=11.2',
                'page_size=10',
                'page_no=1',
                'openid=p2p_ios',
                '_type=json'
            ];
    
            signParams = signParams.sort()
    
            let signParamsString = signParams.join('&');
            let signParamsAndAppkey = signParamsString + APP_KAY;
    
            const md = forge.md.md5.create();
            md.update(signParamsAndAppkey);
            const sign = md.digest().toHex();
    
            return 'sign='+ sign + '&' + 'sign_type=' + 'MD5&' + signParamsString;
        }

        const keyStr = signature()


        axios.get('/product/activity_list?' + keyStr)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {

        });
        
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

        this.props.onShowLoading()

        axios.post('/login', {
            username: 'Fred',
            password: 'Flintstone'
        })
        .then((response) => {
            if(response.status === 200){
                if(response.data.code === 1){
                    this.login(response.data.token)
                    this.props.onHideLoading()
                }
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render(){
        const {from} = this.props.location.from || {from: {pathname: '/'}}

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
                        <button className="btn">登录</button>
                    </div>

                    <div className={`${style.wrap} ${style.box}`}>
                        <Link to="/forgetPassword">忘记密码？</Link>
                        <Link to="/register">注册新账号</Link>
                    </div>
                </form>
                
                <Menu />
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
