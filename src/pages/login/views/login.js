import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { buildLoginSign } from '@/api/api.js';
import { actions as authActions } from '@/common/auth/';
import { actions as loadingActions } from '@/common/loading';

import styles from './style.scss';
import logo from './images/logo.png';

import PswdLogin from './pswdLogin.js';
import MsgLogin from './msgLogin.js';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        };
    }

    componentDidMount() {
        document.body.className = 'login';
    }

    componentWillUnmount() {
        document.body.className = '';
    }

    pswdLoginHandle = (username, password) => {
        this.props.onShowLoading();

        axios.post('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=login', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then((response) => {
            const { token } = response.data;
            if(response.data.status === 'success' &&  token){
                this.props.onLogin(token);
            }
        })
        .catch(function (error) {
        })
        .finally(() => {
            this.props.onHideLoading();
        });	
    }

    msgLoginHandle = (username, msgcode) => {
    }

    selectHandle = (index, lastIndex, e) => {
        this.setState({
            tabIndex: index
        });
    }

    render(){
        const {from} = this.props.location.from || {from: {pathname: '/'}}
        const {tabIndex} = this.state;

        // 目前的处理是，只要用户登录则统一跳走
        if(this.props.auth.isAuthenticated){
            return <Redirect to={from} />
        }

        let slideClass = styles.slider;
        if(tabIndex === 1){
            slideClass = `${styles.slider} ${styles.slider_aside}`;
        }

        return (
            <div>
                <div>
                    <img className={styles.logo} src={logo} alt="logo"/>
                </div>
                <Tabs className={styles.tabs} onSelect={this.selectHandle}>
                    <TabList className={styles.tab__navs}>
                        <Tab className={styles.tab__nav}>账号登录</Tab>
                        <Tab className={styles.tab__nav}>短信登录</Tab>
                        <div className={slideClass}></div>
                    </TabList>
                    <TabPanel>
                        <PswdLogin onLoginHandle={this.pswdLoginHandle} />
                    </TabPanel>
                    <TabPanel>
                        <MsgLogin onLoginHandle={this.msgLoginHandle} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);