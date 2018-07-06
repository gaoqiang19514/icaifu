import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import BScroll from 'better-scroll';

import { actions as loadingActions } from '@/common/loading';
import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder } from '@/common/commonStyled';

// Layout

const LayoutScroller = styled.div`
    flex-shrink: 0;
    display: flex;
`;

const LayoutNavItem = styled.div`
    flex: 1;
    color: #898996;
    font-size: 0.3467rem;
    height: 1.3333rem;
	line-height: 1.3333rem;
    padding: 0 0.6667rem;
    &.selected{
        color: #ff4949;
    }
`;

// Style

const StyleItem = styled.div`
    background: #fff;
    margin: 0.4rem;
    padding: 0.4rem;
`;

const Title = styled.h2`
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
`;

const SubTitle = styled.h3`
    color: #898996;
    font-weight: normal;
    font-size: 0.3733rem;
    line-height: 1.7;
    margin-bottom: 0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Date = styled.div`
    color: #898996;
    text-align: right;
    font-size: 0.3733rem;
`;

const Guid = styled.div`
    color: #898996;
    margin-bottom: 0.2rem;
    font-size: 0.3733rem;
`;

const Types = {
    ALL: 'all',
    RECHARGE: 'recharge',
    WITHDRAW: 'withdraw',
    BUY: 'buy',
    PAYMENT: 'payment' 
};

class ExchangeRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: Types.ALL,
            list: []
        };
    }

    componentDidMount() {
        const scroll = new BScroll('.wrapper', {
            scrollX: true
        });
    }

    render() {
        const { type, list } = this.state;
        const { ALL, RECHARGE, WITHDRAW, BUY, PAYMENT } = Types;

        return (
            <div>

                <div>
                    <LayoutFixedSibling/>
                    <LayoutFixedTop>
                        <StyleBg>
                            <LayoutFlexBox className="wrapper">
                                <LayoutScroller>
                                    <LayoutNavItem className={ type === ALL ? "selected" : "" }>全部</LayoutNavItem>
                                    <LayoutNavItem className={ type === RECHARGE ? "selected" : "" }>充值</LayoutNavItem>
                                    <LayoutNavItem className={ type === WITHDRAW ? "selected" : "" }>提现</LayoutNavItem>
                                    <LayoutNavItem className={ type === BUY ? "selected" : "" }>购买</LayoutNavItem>
                                    <LayoutNavItem className={ type === PAYMENT ? "selected" : "" }>回款</LayoutNavItem>
                                </LayoutScroller>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onShowLoading: () => {
            dispatch(loadingActions.showLoading())
        },
        onHideLoading: () => {
            dispatch(loadingActions.hideLoading())
        }
    }
}

export default connect(null, mapDispatchToProps)(ExchangeRecord)