import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { 
    LayoutFixedBottom, 
    LayoutFixedSibling, 
    LayoutFlexBox, 
    StyleBg, 
    StylePlaceHolder, 
    LayoutTittleBox, 
    LayoutPrimaryBox, 
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

class Setting extends Component {
    
    logoutHandle = () => {
        this.props.onLogout();
    }

    render() {
        return(
            <div>
                
                <StyleBg>
                    <LayoutTittleBox>
                        <StyleTitle>设置</StyleTitle>
                    </LayoutTittleBox>
                </StyleBg>


                <StyleBg>
                    <LayoutBoxWrap>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">在线客服</StyleLink>
                        </LayoutPrimaryBox>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">常见问题</StyleLink>
                        </LayoutPrimaryBox>
                    </LayoutBoxWrap>
                </StyleBg>

                <StyleBg>
                    <LayoutBoxWrap>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">登录密码</StyleLink>
                        </LayoutPrimaryBox>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">支付密码</StyleLink>
                        </LayoutPrimaryBox>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">手势密码</StyleLink>
                        </LayoutPrimaryBox>
                    </LayoutBoxWrap>
                </StyleBg>

                <StyleBg>
                    <LayoutBoxWrap>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">安全保障</StyleLink>
                        </LayoutPrimaryBox>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">信息披露</StyleLink>
                        </LayoutPrimaryBox>
                        <LayoutPrimaryBox>
                            <StyleLink to="/">系统检测</StyleLink>
                        </LayoutPrimaryBox>
                    </LayoutBoxWrap>
                </StyleBg>

                <LayoutFixedBottom>
                    <LayoutPrimaryBox>
                        <StylePrimaryButton onClick={ this.logoutHandle }>退出登录</StylePrimaryButton>
                    </LayoutPrimaryBox>
                </LayoutFixedBottom>

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