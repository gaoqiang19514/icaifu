import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { LayoutFixedBottom, LayoutFixedSibling } from '@/common/commonStyled';

const StyleNav = styled.nav`
    display: flex;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
`;

const StyleLink = styled(Link)`
    flex: 1;
    text-align: center;
    font-size: 0.2667rem;
    line-height: 1.3333rem;
`;

export default () => (
    <div>
        <LayoutFixedSibling/>
        <LayoutFixedBottom>
            <StyleNav>
                <StyleLink to="/home">首页</StyleLink>
                <StyleLink to="/invest">投资</StyleLink>
                <StyleLink to="/activity">发现</StyleLink>
                <StyleLink to="/user">我的</StyleLink>
            </StyleNav>
        </LayoutFixedBottom>
    </div>
)