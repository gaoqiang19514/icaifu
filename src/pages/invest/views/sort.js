import React from 'react';
import styled from 'styled-components';

// Layout

const LayoutBox = styled.div`
    display: flex;
    justify-content: space-between;
`;


// Style

const StyleItem = styled.div`
    color: #9299a4;
    font-size: 0.3467rem;
    text-align: center;
    flex: 1;
    height: 1.1733rem;
    line-height: 1.1733rem;
`;

export default () => (
    <LayoutBox>
        <StyleItem>默认</StyleItem>
        <StyleItem>收益率</StyleItem>
        <StyleItem>期限</StyleItem>
    </LayoutBox>
)