import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import axios from 'axios';

import { 
    LayoutFixedBottom, 
    LayoutFixedSibling, 
    LayoutFlexBox, 
    LayoutBoxBet,
    StyleBg, 
    StylePlaceHolder, 
    LayoutTittleBox, 
    LayoutPrimaryBox, 
    StylePrimaryButton,
    LayoutBoxWrap
} from '@/common/commonStyled';

import AnimateLayer from '@/common/animateLayer'

import arrow_icon from './images/arrow_icon.png';
import ibaby_icon from './images/ibaby_icon.png';
import camera_icon from './images/camera_icon.png';
import photo_icon from './images/photo_icon.png'
import wechat_icon from './images/wechat_icon.png'

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    font-size: 0.3733rem;
    padding: 0.5333rem;
    background: #fff;
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

const Arrow = styled.img`
    width: 0.24rem;
    height: 0.4rem;
    margin-left: 0.4rem;
`;

const Profile = styled.img`
    width: 1.2267rem;
    height: 1.2267rem;
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    color: #898996;
`;

const Alink = styled.a`
    display: flex;
    align-items: center;
    color: #898996;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    color: #898996;
`;

const StyleButton = styled.div`
    outline: none;
    border: 0;
    padding: 0;
    font-size: 0.4rem;
`;

const StyleFullButton = styled.button`
    outline: none;
    width: 100%;
    border: 0;
    color: #fff;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    background-image: linear-gradient(90deg, 
		#f94c50 0%, 
		#f77366 100%), 
	linear-gradient(
		#f7645b, 
        #f7645b);
    border-radius: 0.6667rem;
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem 
		rgba(249, 82, 83, 0.75);
`;

const Title = styled.h1`
    font-size: 0.64rem;
`;

const StyleTitle = styled.h3`
    text-align: center;
    font-size: 0.4267rem;
`;
const StyleText = styled.div`
    text-align: center;
    color: #898996;
    font-size: 0.32rem;
    line-height: 0.4667rem;
`;

const LayoutBox = styled.div`
    margin-bottom: 0.9333rem;
`;
const LayoutBox2 = styled.div`
    margin-bottom: 0.5333rem;
`;
const LayoutBox3 = styled.div`
    margin-bottom: 0.4rem;
`;
const StyleWechat = styled.img`
    width: 0.96rem;
    height: 0.8rem;
    margin: auto;
`;

const LayoutBoxHead = styled.div`
    position: relative;
    padding: 0.4rem;
    background: #fff;
    display: flex;
    justify-content: flex-end;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        background: #eaeaea;
        left: 0;
        right: 0;
        transform: translateY(.5);
    }
`;
const LayoutBoxBody = styled.div`
    padding: 0.4rem;
    background: #fff;
`;

const StyleChoosePhoto = styled.div`
    padding: 0.4rem;

    .box{
        margin-bottom: 0.2667rem;
        border-radius: 0.1067rem;
        background: #fff;
    }

    .item{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.4rem;
        padding: 0.4rem;
        position: relative;
        &::after{
            content: '';
            position: absolute;
            bottom: 0;
            height: 1px;
            background: #eaeaea;
            left: 0;
            right: 0;
            transform: translateY(.5);
        }
        &:last-child::after{
            content: none;
        }
    }

    .text{
        margin-left: .2rem;
    }
`;

export default class extends Component {
    state = {
        profileFlag: false,
        wechatFlag: false
    }

    changeProfileHandle = () => {
        this.setState({
            profileFlag: !this.state.profileFlag
        });        
    }

    bindWechatHandle = () => {
        this.setState({
            wechatFlag: !this.state.wechatFlag
        });
    }
    
    render() {
        const { profileFlag, wechatFlag } = this.state;

        return(
            <div>
                <LayoutTittleBox>
                    <Title>个人信息</Title>
                </LayoutTittleBox>


                <LayoutBoxWrap>
                    <Item>
                        <span>头像</span>
                        <Button onClick={ this.changeProfileHandle } >
                            <Profile src={ ibaby_icon } alt="头像" />
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </Button>
                    </Item>
                    <Item>
                        <span>昵称</span>
                        <StyledLink to=''>
                            <span>icaifu_13077890023</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </StyledLink>
                    </Item>
                    <Item>
                        <span>手机号</span>
                        <StyledLink to=''>
                            <span>186****0000</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </StyledLink>
                    </Item>
                    <Item>
                        <span>绑定微信</span>
                        <Button onClick={ this.bindWechatHandle }>
                            <span>未绑定</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </Button>
                    </Item>
                </LayoutBoxWrap>

                <LayoutBoxWrap>
                    <Item>
                        <span>汇付存管</span>
                        <Alink href=''>
                            <span>未开通</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </Alink>
                    </Item>
                    <Item>
                        <span>实名认证</span>
                        <StyledLink to=''>
                            <span>未实名</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </StyledLink>
                    </Item>
                    <Item>
                        <span>我的银行卡</span>
                        <StyledLink to=''>
                            <span>未绑卡</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </StyledLink>
                    </Item>
                </LayoutBoxWrap>

                <LayoutBoxWrap>
                    <Item>
                        <span>风险等级评测</span>
                        <StyledLink to=''>
                            <span>未评测</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </StyledLink>
                    </Item>
                    <Item>
                        <span>收货地址</span>
                        <StyledLink to='/address'>
                            <span>未设置</span>
                            <box-icon name='chevron-right' color='#898996'></box-icon>
                        </StyledLink>
                    </Item>
                </LayoutBoxWrap>
                
                {/* 修改头像 */}
                <AnimateLayer flag={ profileFlag }>

                    <StyleChoosePhoto>
                        <div className="box">
                            <div className="item">
                                <box-icon name='camera-alt' ></box-icon>
                                <span className="text">拍摄照片</span>
                            </div>
                            <div className="item">
                                <box-icon name='image' ></box-icon>
                                <span className="text">相册选择</span>
                            </div>
                        </div>
                        <div className="box">
                            <div data-js-cancel onClick={ this.changeProfileHandle } className="item">取消</div>
                        </div>
                    </StyleChoosePhoto>

                </AnimateLayer>

                {/* 绑定微信 */}
                <AnimateLayer flag={ wechatFlag }>
            
                    <LayoutBoxHead>
                        <StyleButton onClick={ this.bindWechatHandle }>取消</StyleButton>
                    </LayoutBoxHead>
                    <LayoutBoxBody>
                        <LayoutBox2>
                            <StyleTitle>绑定微信</StyleTitle>
                        </LayoutBox2>
                        <LayoutBox3>
                            <StyleWechat src={ wechat_icon } alt="微信"/>
                        </LayoutBox3>
                        <LayoutBox>
                            <StyleText>绑定微信后，您可以获取微信的头像和微信昵称，可以随时解绑，可以使用微信登录。</StyleText>
                        </LayoutBox>
                        <StyleFullButton>立即绑定</StyleFullButton>
                    </LayoutBoxBody>
                    
                </AnimateLayer>

            </div>
        )
    }
}