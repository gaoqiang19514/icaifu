import React, { Component } from 'react';
import styled from 'styled-components';

import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder } from '@/common/commonStyled';

const StyleNavItem = styled.div`
    flex-grow: 1;
    text-align: center;
    height: 1.3333rem;
    line-height: 1.3333rem;
    color: #9299a4;
    font-size: 0.3467rem;
    background: #fff;

    &.selected{
        color: #ff4949;
    }
`;

const Types = {
    ACTIVATE: 'activate',
    GETED: 'geted',
    EXPIRED: 'expired'
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: Types.ACTIVATE
        };
    }

    render() {
        const { type } = this.state;
        const { ACTIVATE, GETED, EXPIRED } = Types;

        return(
            <div>

                <div>
                    <LayoutFixedSibling/>
                    <LayoutFixedTop>
                        <StyleBg>
                            <LayoutFlexBox>
                                <StyleNavItem className={ type === ACTIVATE ? "selected" : ""}>待激活</StyleNavItem>
                                <StyleNavItem className={ type === GETED ? "selected" : ""}>已领取</StyleNavItem>
                                <StyleNavItem className={ type === EXPIRED ? "selected" : ""}>已过期</StyleNavItem>
                            </LayoutFlexBox>
                        </StyleBg>
                    </LayoutFixedTop>
                </div>

                <div>
                    <StylePlaceHolder/>
                    <StylePlaceHolder/>
                    <StylePlaceHolder/>
                    <StylePlaceHolder/>
                    <StylePlaceHolder/>
                    <StylePlaceHolder/>
                </div>

            </div>
        )
    }
}