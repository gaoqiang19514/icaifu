import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './style.scss'
import logo from './images/logo.png'

import {actions as authActions} from '@/common/auth/'
import {actions as loadingActions} from '@/common/loading'

const forge = require('node-forge');
const APP_KAY = ''

const sha1 = (str) => {
    const md = forge.md.sha1.create().update(str);
    return md.digest().toHex();
}

export const createLoginSign = (username, pwd, salt) => {

    const pwd_hash_double = sha1(salt + sha1(username + pwd));
    const pwd_hash = sha1(pwd);
    let uuid = new Date().getTime() + username;

    localStorage.setItem('uuid', uuid);

    let signParams = [
        'page_size=10',
        'page_no=1',
        `uuid=${uuid}`,
        `user_name=${username}`,
        `pwd=${pwd_hash_double}`,
        `pwd_hash=${pwd_hash}`,
        `salt=${salt}`,
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

const buttonsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.0667rem",
    paddingTop: "0.4rem"
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

    componentDidMount() {
        // 为了进入登录页时 给body添加背景
        document.body.className = 'login'
    }

    componentWillUnmount() {
        document.body.className = ''
    }

    login(token, userid) {
        this.props.onLogin(token, userid)
    }

    handleValueChange(field, value, type = 'string') {
        if(type === 'number'){value = value + 0}

        const { form } = this.state
        const newFileObj = {value: value, valid: true, error: ''}

        switch(field){
            case 'username':
                if(value.length >= 12){
                    newFileObj.error = '用户名最多12个字符'
                    newFileObj.valid = false
                }else if(value.length === 0){
                    newFileObj.error = '请输入用户名'
                    newFileObj.valid = false
                }
                break
            case 'password':
                if(value.length >= 12){
                    newFileObj.error = '密码最多12个字符'
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

        const { username, password } = this.state.form

        if(!username.value || !password.value){return;}

        const salt = createRandomNumStr(Math.random());

        let keyStr = createLoginSign(username.value, password.value, salt);

        this.props.onShowLoading();
        axios.get('/my/login?' + keyStr)
        .then((response) => {
            if(response.status === 200){
                if(response.data.retcode === 0){
                    this.login(response.data.access_token, response.data.usr_id)
                }else{
                    if(response.data.msg){
                        swal(response.data.msg)
                    }
                }
			}
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            this.props.onHideLoading()
        });
    }

    render(){
        const {from} = this.props.location.from || {from: {pathname: '/'}}

        // 目前的处理是，只要用户登录则统一跳走
        if(this.props.auth.isAuthenticated){
            return <Redirect to={from} />
        }

        const {form: {username, password}} = this.state;

        return (
            <div className="login-wrap">

                <div className="logo">
                    <img src={logo} alt=""/>
                </div>

                <Tabs className="tab login-form" selectedTabClassName="tab__trigger--selected">
                    <TabList className="tab__hd">
                        <Tab className="tab__trigger">账号登录</Tab>
                        <Tab className="tab__trigger">短信登录</Tab>
                    </TabList>

                    <TabPanel>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <div>
                                <div>
                                    <input type="text" onChange={(e) => this.handleValueChange('username', e.target.value)} placeholder="请输入手机号/用户名" />
                                </div>
                                <div className="error">{!username.valid && <span>{username.error}</span>}</div>
                                <div>
                                    <input type="password" onChange={(e) => this.handleValueChange('password', e.target.value)} placeholder="请输入您的密码" />
                                </div>
                                <div className="error">{!password.valid && <span>{password.error}</span>}</div>
                            </div>

                            <div style={buttonsStyle}>
                                <Link to="/forgetPassword">忘记密码？</Link>
                                <Link to="/register">注册新账号</Link>
                            </div>

                            <div>
                                <button className="btn btn--primary">登录</button>
                            </div>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <div>
                                <div>
                                    <input type="text" onChange={(e) => this.handleValueChange('username', e.target.value)} placeholder="请输入手机号/用户名" />
                                </div>
                                <div className="error">{!username.valid && <span>{username.error}</span>}</div>
                                <div>
                                    <input type="password" onChange={(e) => this.handleValueChange('password', e.target.value)} placeholder="请输入验证码" />
                                    <button>获取验证码</button>
                                </div>
                                <div className="error">{!password.valid && <span>{password.error}</span>}</div>
                            </div>

                            <div style={buttonsStyle}>
                                <Link to="/forgetPassword">忘记密码？</Link>
                                <Link to="/register">注册新账号</Link>
                            </div>

                            <div>
                                <button className="btn btn--primary">登录</button>
                            </div>
                        </form>
                    </TabPanel>
                </Tabs>
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
        onLogin: (token, userid) => {
            dispatch(authActions.login(token, userid))
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
