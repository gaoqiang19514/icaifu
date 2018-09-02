import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { button, input } from "@/common/commonStyled"

const LayoutContainer = styled.div`
`;

const LayoutBox = styled.div`
    display: flex;
    padding: 0.4rem;
`;

const LayoutButtonBox = styled.div`
    padding: 0.4rem;
`;

const LayoutBoxWrap = styled.div`
    background: #fff;
`;

const StyleButton = button.extend`
    width: 100%;
    color: #fff;
    padding: 0.4rem;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: .2em;
    background-image: linear-gradient(90deg,#f94c50 0%,#f77366 100%),linear-gradient( #f7645b,#f7645b);
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75);
`;

const StyleMinButton = button.extend`
    color: #fff;
    padding: 0.4rem;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: .2em;
    background-image: linear-gradient(90deg,#f94c50 0%,#f77366 100%),linear-gradient( #f7645b,#f7645b);
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75);
`;

const StyleImg = styled.img`
`;

const StyleInput = input.extend`
    flex: 1;
    font-size: 0.4rem;
    padding: 0.1333rem;
`;

export default () => {
    return (
        <LayoutContainer>
            
            <LayoutBoxWrap>
                <LayoutBox>
                    <StyleInput type="text" placeholder="请输入手机号" />
                </LayoutBox>
                <LayoutBox>
                    <StyleInput type="text" placeholder="请输入右侧的验证码" />
                    <StyleImg src="http://192.168.1.25/ver_code.jpg?id=0.6439735326867758" alt=""/>
                </LayoutBox>
                <LayoutBox>
                    <StyleInput type="text" placeholder="请输入短信验证码" />
                    <StyleMinButton>获取验证码</StyleMinButton>
                </LayoutBox>
                <LayoutBox>
                    <StyleInput type="text" placeholder="请输入新密码" />
                </LayoutBox>
                <LayoutBox>
                    <StyleInput type="text" placeholder="请再次输入新密码" />
                </LayoutBox>
            </LayoutBoxWrap>

            <LayoutButtonBox>
                <StyleButton>下一步</StyleButton>
            </LayoutButtonBox>

        </LayoutContainer>
    )
}