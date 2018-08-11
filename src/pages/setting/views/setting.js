import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import arrow_icon from '@/common/images/arrow_icon.png';

import { 
    LayoutFixedBottom, 
    LayoutFixedSibling, 
    LayoutFlexBox, 
    StyleBg, 
    StylePlaceHolder, 
    LayoutTittleBox, 
    StylePrimaryButton,
    LayoutBoxWrap
} from '@/common/commonStyled';
import { actions as authActions } from '@/common/auth/';


const StyleTitle = styled.h1`
    font-size: 0.64rem;
`;
const StyleLink = styled(Link)`
    font-size: 0.3733rem;
`;

const LayoutItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    position: relative;
    padding: 0.5333rem;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        background: #eaeaea;
        left: .5333rem;
        right: 0;
        transform: translateY(.5);
    }
    &:last-child::after{
        content: none;
    }
`;

const ButtonBox = styled.div`
    padding: 0.2667rem 0.5333rem 0.5333rem;
`;

const Arrow = styled.img`
    width: 0.24rem;
    height: 0.4rem;
    margin-left: 0.4rem;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #898996;
`;


class Setting extends Component {
    
    logoutHandle = () => {
        this.props.onLogout();
    }

    render() {
        return(
            <div>
            
                <LayoutTittleBox>
                    <StyleTitle>设置</StyleTitle>
                </LayoutTittleBox>


                <StyleBg>
                    <LayoutBoxWrap>
                        <LayoutItem>
                            <StyleLink to="/">在线客服</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                        <LayoutItem>
                            <StyleLink to="/">常见问题</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                    </LayoutBoxWrap>
                </StyleBg>

                <StyleBg>
                    <LayoutBoxWrap>
                        <LayoutItem>
                            <StyleLink to="/">登录密码</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                        <LayoutItem>
                            <StyleLink to="/">支付密码</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                        <LayoutItem>
                            <StyleLink to="/">手势密码</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                    </LayoutBoxWrap>
                </StyleBg>

                <StyleBg>
                    <LayoutBoxWrap>
                        <LayoutItem>
                            <StyleLink to="/">安全保障</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                        <LayoutItem>
                            <StyleLink to="/">信息披露</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                        <LayoutItem>
                            <StyleLink to="/">系统检测</StyleLink>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutItem>
                    </LayoutBoxWrap>
                </StyleBg>

                <ButtonBox>
                    <StylePrimaryButton primary onClick={ this.logoutHandle }>退出登录</StylePrimaryButton>
                </ButtonBox>

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