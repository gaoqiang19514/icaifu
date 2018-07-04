import React, {Component} from 'react'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';

import { LayoutFixedTop, LayoutFixedSiblingDouble, LayoutFlexBox, StyleBg, StylePlaceHolder } from '@/common/commonStyled';

const StyleList = styled.div`
    position: relative;
    display: flex;
    background: #fff;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);
    }
`;

const StyleItem = styled.div`
    flex: 1;
    text-align: center;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    &.selected{
        color: #ff4949;
    }
`;

const Types = {
    CASH: 'cash',
    INTEREST_RATES: 'interest_rates'
};

const Status = {
    UNUSED: 'unused',
    USED: 'used',
    EXPIRED: 'expired'
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: Types.CASH,
            status: Status.UNUSED
         };
    }

    render() {
        const { type, status } = this.state;

        return (
            <div>
                
                <div>
                    <LayoutFixedSiblingDouble/>
                    <LayoutFixedTop>
                        <StyleList>
                            <StyleItem className={ type === Types.CASH ? "selected" : "" } data-type={ Types.CASH }>代金券</StyleItem>
                            <StyleItem className={ type === Types.INTEREST_RATES ? "selected" : "" } data-type={ Types.INTEREST_RATES }>加息券</StyleItem>
                        </StyleList>
                        <StyleList>
                            <StyleItem className={ status === Status.UNUSED ? "selected" : "" } data-status={ Status.UNUSED }>未使用</StyleItem>
                            <StyleItem className={ status === Status.USED ? "selected" : "" } data-status={ Status.USED }>已使用</StyleItem>
                            <StyleItem className={ status === Status.EXPIRED ? "selected" : "" } data-status={ Status.EXPIRED }>已过期</StyleItem>
                        </StyleList>
                    </LayoutFixedTop>
                </div>

                <div>
                    <StylePlaceHolder></StylePlaceHolder>
                    <StylePlaceHolder></StylePlaceHolder>
                    <StylePlaceHolder></StylePlaceHolder>
                    <StylePlaceHolder></StylePlaceHolder>
                    <StylePlaceHolder></StylePlaceHolder>
                    <StylePlaceHolder></StylePlaceHolder>
                </div>

            </div>
        )
    }
}