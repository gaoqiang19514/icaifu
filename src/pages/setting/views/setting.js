import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { actions as authActions } from '@/common/auth/';

const LayoutBox = styled.div`
    padding: 0.7333rem 0.5333rem 0.7333rem 0.5333rem;
`;

const LayoutBoxPrimary = styled.div`
    padding: 0.4rem;
`;

const StyleTitle = styled.h1`
    font-size: 0.64rem;
`;

const StyleLink = styled(Link)`
    font-size: 0.3733rem;
`;

const StyleButton = styled.button`
    outline: none;
    width: 100%;
    border: 0;
    color: #fff;
    padding: 0;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #f7645b, #f7645b);
    border-radius: 0.6667rem;
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75);
`;

class Setting extends Component {
    
    logoutHandle = () => {
        this.props.onLogout();
    }

    render() {
        return(
            <div>
                <LayoutBox>
                    <StyleTitle>设置</StyleTitle>
                </LayoutBox>
                
                <LayoutBoxPrimary>
                    <StyleLink to="/">在线客服</StyleLink>
                </LayoutBoxPrimary>
                <LayoutBoxPrimary>
                    <StyleLink to="/">常见问题</StyleLink>
                </LayoutBoxPrimary>
                <LayoutBoxPrimary>
                    <StyleLink to="/">登录密码</StyleLink>
                </LayoutBoxPrimary>
                <LayoutBoxPrimary>
                    <StyleLink to="/">支付密码</StyleLink>
                </LayoutBoxPrimary>
                <LayoutBoxPrimary>
                    <StyleLink to="/">手势密码</StyleLink>
                </LayoutBoxPrimary>
                <LayoutBoxPrimary>
                    <StyleLink to="/">安全保障</StyleLink>
                </LayoutBoxPrimary>
                <LayoutBoxPrimary>
                    <StyleLink to="/">信息披露</StyleLink>
                </LayoutBoxPrimary>
                <LayoutBoxPrimary>
                    <StyleLink to="/">系统检测</StyleLink>
                </LayoutBoxPrimary>

                <LayoutBoxPrimary>
                    <StyleButton onClick={ this.logoutHandle }>退出登录</StyleButton>
                </LayoutBoxPrimary>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(authActions.logout());
        }
    }
}

export default connect(null, mapDispatchToProps)(Setting);