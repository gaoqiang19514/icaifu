import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components'

import { buildLoginSign } from '@/api/api.js';
import { actions as authActions } from '@/common/auth/';
import { actions as loadingActions } from '@/common/loading';

import logoSrc from './images/logo.png';

import PswdLogin from './pswdLogin.js';
import MsgLogin from './msgLogin.js';

const LayoutLogo = styled.div`
    display: flex;
    justify-content: center;

    padding: 2.1333rem 0 1.0667rem;
`;

const StyleLogo = styled.img`
    display: block;
    width: 1.08rem;
    height: 1.0533rem;
`;

const StyleTabList = styled(TabList)`
    display: flex;
    justify-content: space-between;

    width: 240px;
    position: relative;
    margin: 0 auto 1.0667rem auto;
    padding: 0;
`;

const StyleTab = styled(Tab)`
    color: #fff;
    padding: 0 0 0.2667rem 0;
    font-size: 0.48rem;
    list-style: none;

    &:focus{
        outline: none;
    }
`;

class Login extends Component {
    state = {
        tabIndex: 0
    }

    componentDidMount() {
        document.body.className = 'login';
    }

    componentWillUnmount() {
        document.body.className = '';
    }

    pswdLoginHandle = (username, password) => {
        this.props.onShowLoading();
        console.log('https://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=login')
        axios.post('https://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=login', {
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
        this.setState({ tabIndex: index });
    }

    render(){
        const { from } = this.props.location.from || {from: {pathname: '/'}}
   
        // 目前的处理是，只要用户登录则统一跳走
        if(this.props.auth.isAuthenticated){
            return <Redirect to={from} />
        }

        return (
            <div>
                <LayoutLogo>
                    <StyleLogo src={ logoSrc } alt="logo"/>
                </LayoutLogo>
                
                <Tabs onSelect={ this.selectHandle }>
                    <StyleTabList>
                        <StyleTab>账号登录</StyleTab>
                        <StyleTab>短信登录</StyleTab>
                    </StyleTabList>
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