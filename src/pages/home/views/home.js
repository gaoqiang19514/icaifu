import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from '@/common/menu/';
import Banner from './banner.js';
import List from './list.js';
import Safety from './safety.js';

// Layout

const LayoutWrap = styled.div`
    padding: 0.5333rem 0 0.5333rem 0;
`;

const LayoutBox = styled.div`
    margin-bottom: 0.4rem;
    text-align: center;
`;


// Style

const StyleLink = styled.a`
    padding: 0 0.5333rem;
    font-size: 0.32rem;
    font-weight: bold;
    color: #898996;
`;

const StyleTips = styled.p`
    margin: 0;
    text-align: center;
    font-size: 0.32rem;
    color: #a8acb3;
`;

export default ({match}) => (
    <div>
        <Banner />
        <List />
        <Safety />
        <LayoutWrap>
            <LayoutBox>
                <StyleLink href="">信息披露</StyleLink>
                <StyleLink href="">在线客服</StyleLink>
            </LayoutBox>
            <StyleTips>参考利率不代表实际利率 投资需谨慎</StyleTips>
        </LayoutWrap>
        <Menu />
    </div>
)