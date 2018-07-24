import React, { Component } from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { changeCate } from '../actions';
import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder, StyleReactLoading } from '@/common/commonStyled';

const LayoutScroller = styled.div`
    flex-shrink: 0;
    display: flex;
`;

const StyleNavItem = styled.div`
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

const Cates = {
    ALL: 'all',
    RECHARGE: 'recharge',
    WITHDRAW: 'withdraw',
    BUY: 'buy',
    PAYMENT: 'payment' 
};

class SelectedCate extends Component {
    componentDidMount() {
        new BScroll('.wrapper', {
            scrollX: true,
            click: true
        });
    }

    changeCateHandle = (e) => {
        const cate = e.target.getAttribute('data-cate');
        this.props.onChangeCate(cate);
    }

    render() {
        const { ALL, RECHARGE, WITHDRAW, BUY, PAYMENT } = Cates;
        const { cate } = this.props;
        const { changeCateHandle } = this;

        return (<div>
            <LayoutFixedSibling/>
            <LayoutFixedTop>
                <StyleBg>
                    <LayoutFlexBox className="wrapper">
                        <LayoutScroller>
                            <StyleNavItem className={ cate === ALL ? 'selected' : '' }  onClick={ changeCateHandle } data-cate={ ALL }>全部</StyleNavItem>
                            <StyleNavItem className={ cate === RECHARGE ? 'selected' : '' } onClick={ changeCateHandle } data-cate={ RECHARGE }>充值</StyleNavItem>
                            <StyleNavItem className={ cate === WITHDRAW ? 'selected' : '' } onClick={ changeCateHandle } data-cate={ WITHDRAW }>提现</StyleNavItem>
                            <StyleNavItem className={ cate === BUY ? 'selected' : '' } onClick={ changeCateHandle } data-cate={ BUY }>购买</StyleNavItem>
                            <StyleNavItem className={ cate === PAYMENT ? 'selected' : '' } onClick={ changeCateHandle } data-cate={ PAYMENT }>回款</StyleNavItem>
                        </LayoutScroller>
                    </LayoutFlexBox>
                </StyleBg>
            </LayoutFixedTop>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        cate: state.record.cate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeCate: (cate) => {
            dispatch(changeCate(cate));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCate);