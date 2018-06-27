import React from 'react';
import styled from 'styled-components';

// Layout

const LayoutWrap = styled.div`
    margin-bottom: 0.2667rem;
    background: #fff;
`;

const LayoutBox = styled.div`
    padding: 0.4rem;
`;

const LayoutBoxBet = styled.div`
    display: flex;
    justify-content: space-between;
`;

// Style

const StyleLink = styled.a`
    flex: 1;
    text-align: center;
`;

const StyleIcon = styled.img`
    margin: 0 auto 0.4rem auto;
    width: 1.8133rem;
    height: 1.8133rem;
`;

const StyleTitle = styled.h2`
    font-size: 0.4rem;
`;

const StyleSubTitle = styled.div`
    font-weight: bold;
    font-size: 0.3467rem;
    margin-bottom: 0.16rem;
`;

const StyleText = styled.div`
    color: #a8acb3;
    line-height: 1.5;
    font-size: 0.2933rem;
`;

const StyleLine = styled.div`
    height: 1px;
    background: #eaeaea;
    transform: scaleY(.5);
`;

export default () => (
    <LayoutWrap>

        <LayoutBox>
            <StyleTitle>为什么选择i财富</StyleTitle>
        </LayoutBox>

        <StyleLine />

        <LayoutBox>
            <LayoutBoxBet>
                <StyleLink href="">
                    <StyleIcon src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt="" />
                    <StyleSubTitle>安全保障</StyleSubTitle>
                    <StyleText>安全等保3级</StyleText>
                    <StyleText>历史出借安全回款</StyleText>
                </StyleLink>
                <StyleLink href="">
                    <StyleIcon src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt="" />
                    <StyleSubTitle>央企入股</StyleSubTitle>
                    <StyleText>央企战略入股</StyleText>
                    <StyleText>恒信集团控股平台</StyleText>
                </StyleLink>
                <StyleLink href="">
                    <StyleIcon src="http://iph.href.lu/136x136?fg=ccc&bg=eaeaea" alt="" />
                    <StyleSubTitle>银行存管</StyleSubTitle>
                    <StyleText>与上饶银行联手</StyleText>
                    <StyleText>实现资金存管</StyleText>
                </StyleLink>
            </LayoutBoxBet>
        </LayoutBox>

    </LayoutWrap>
)