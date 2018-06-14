import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

import style from './style.scss'
import Menu from './../../../common/menu/'
import {actions as authActions} from './../../../common/auth/'
import {actions as loadingActions} from './../../../common/loading'


const forge = require('node-forge');
const APP_KAY = 'x8lg0qcdux8sh4b6c8so0bgyvorwml'

const sha1 = (value) => {
    const md = forge.md.sha1.create().update(value);
    return md.digest().toHex();
}

export const createLoginSign = (username, pwd, salt) => {

    const pwd_hash_double = sha1(salt + sha1(username + pwd));
    const pwd_hash = sha1(pwd);
    let date = new Date().getTime();
    let uuid = date + username;

    let signParams = [
        'page_size=10',
        'page_no=1',
        `uuid=${uuid}`,
        `user_name=${username}`,
        `pwd=${pwd_hash_double}`,
        `pwd_hash=${pwd_hash}`,
        'salt=679443',
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

const createRandomNumStr = (num) => {
    let str = num.toString().replace('0.', '');
    return str.substr(0, 6)
}

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
        e.preventDefault();


        this.props.onShowLoading();

        // const {form: {username, password}} = this.state

        const username = '13112340090';
        const pwd      = '123456';
        const salt     = createRandomNumStr(Math.random());

        let keyStr = createLoginSign(username, pwd, salt);

        axios.get('/my/login?' + keyStr)
        .then((response) => {
            if(response.status === 200){
                this.login(response.data.access_token)
                this.props.onHideLoading()
			}
        })
        .catch((error) => {

        })	
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
                        <button>登录</button>
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
