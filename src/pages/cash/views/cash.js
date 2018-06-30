import React, { Component } from 'react';
import styled from 'styled-components';


const LayoutWrap = styled.div`
    padding-top: 1.3333rem;
`;

const LayoutFixed = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
`;

const LayoutFlexBox = styled.div`
    display: flex;
`;

const LayoutItem = styled.div`
    height: 2.2667rem;
    background: #fff;
    margin: 0.4rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    border-radius: 4px;
`;

const StyleNavItem = styled.div`
    flex-grow: 1;
    text-align: center;
    height: 1.3333rem;
    line-height: 1.3333rem;
    color: #9299a4;
    font-size: 0.3733rem;
    background: #fff;
`;


export default class extends Component {

    render() {
        return(
            <div>

                <LayoutFixed>
                    <LayoutFlexBox>
                        <StyleNavItem>待激活</StyleNavItem>
                        <StyleNavItem>已领取</StyleNavItem>
                        <StyleNavItem>已过期</StyleNavItem>
                    </LayoutFlexBox>
                </LayoutFixed>

                <LayoutWrap>
                    <LayoutItem />
                    <LayoutItem />
                    <LayoutItem />
                    <LayoutItem />
                    <LayoutItem />
                    <LayoutItem />
                    <LayoutItem />
                    <LayoutItem />
                    <LayoutItem />
                </LayoutWrap>
            </div>
        )
    }
}