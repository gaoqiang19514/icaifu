import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import ReactLoading from 'react-loading';
import BScroll from 'better-scroll';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components'
import 'boxicons'

import { buildBuyAuthSign } from '@/api/api.js';
import { AnimateFullLayer } from '@/common/animateLayer';

import { LayoutFixedBottom, LayoutFixedSibling, LayoutBoxBet, button, LayoutFlexBox, LayoutBoxBetCenter, LayoutBoxWrapSec, LayoutBoxWrap, LayoutPrimaryBox, LayoutBoxVerticalCenter } from '@/common/commonStyled';

import service_icon from './images/service_icon.png';
import circle_ok from './images/circle_check_icon_ok.png';
import circle_no from './images/circle_check_icon_no.png';

const LayoutAside = styled.div`
    flex: 1;
    background: #fff;
`;

const LayoutMain = styled.div`
    flex-basis: 7.8667rem;
    display: flex;
`;

const LayoutAsideBox = styled.div`
    color: #898996;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyleGreyText = styled.div`
    color: #898996;
`;

const StyleRow = styled.div`
    font-size: 0.4rem;

    padding: 0.4667rem 0.4rem;
    margin-bottom: 0.2667rem;
    background: #fff;
`;

const StyleInputPart = LayoutBoxBetCenter.extend`
    padding: .4rem;
    margin-bottom: .4rem;
    background-color: #fff3f0;

    label {
        font-size: 0.6667rem;
        margin-right: 0.2667rem;
    }

    input {
        color: #1a1b1c;
        padding: 0;
        outline: none;
        border: 0;
        border-radius: 0;
        width: 100%;
        font-size: 0.6667rem;
        background: transparent;
        line-height: normal;
    }

    button {
        align-self: stretch;
        margin-left: 0.2667rem;
        flex-shrink: 0;
        padding: 0;
        color: #f8695e;
        width: auto;
        border: 0;
        outline: none;
        background: transparent;
    }
`;

const StyleHeadBox = LayoutBoxWrap.extend`
    font-size: 0.4rem;
    background: #fff;
`;

const StyleFullButton = button.extend`
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    flex: 1;
    color: #fff;
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient(#d7d7d7, #d7d7d7);
`;

const StyleServiceIcon = styled.img`
    margin: 0.2rem auto 0.1333rem auto;
    width: 0.5333rem;
    height: 0.52rem;
`;

const StyleCouponWrap = {
    "padding": "0.4rem 0.4rem 1px 0.4rem"
}

const StyleCoupon = styled.div`
    display: flex;
    margin-bottom: 0.4rem;
    box-shadow: 0rem 0.0267rem 0.08rem 0rem rgba(0, 0, 0, 0.08);
`;

const StyleCouponAside = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    width: 3.5rem;
    padding: 0.4rem;
    border-radius: 0.1067rem 0rem 0rem 0.1067rem;
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #f8695e, #f8695e);
`;

const StyleCouponMain = styled.div`
    flex-grow: 1;
    background: #fff;
    border-radius: 0rem 0.1067rem 0.1067rem 0rem ;
`;

const StyleCouponAmount = styled.div`
    margin-bottom: 0.2667rem;
    font-size: 0.6667rem;
`;

const StyleCouponCondition = styled.div`
    font-size: 0.3467rem;
`;

const StyleCouponHd = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 0.4rem 0.4rem 0 0.4rem;
    margin-bottom: 0.2667rem;
`;

const StyleCouponBd = styled.div`
    font-size: 10px;
    line-height: 0.48rem;
    padding: 0 0.4rem 0.2rem 0.4rem;
`;

const StyleCouponFt = styled.div`
    position: relative;
    text-align: right;
    padding: 0.2rem 0.4rem;
`;

const StyleCouponTitle = styled.span`
    font-weight: bold;
    font-size: 0.48rem;
`;

const StyleCouponBadge = styled.span`
    margin-left: 0.2667rem;
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.0667rem 0.1333rem;
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #f8695e, #f8695e);
`;

const StyleCouponExpire = styled.span`
    color: #898996;
    font-size: 0.2933rem;
`;

const StyleCouponCheckbox = styled.span`
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    width: 0.4rem;
    height: 0.4rem;
`;

const StyleButton = button.extend`
    width: 100%;
    color: #fff;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #f7645b, #f7645b);
    border-radius: 0.6667rem;
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75);
`;

class Coupon extends Component {
    state = {
        loadFlag: false,
        coupons: []
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loadFlag: true,
                coupons: [
                    { id: uuid(), checked: true },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false }
                ]
            });
        }, 1000);
    }

    // DOM装载完成
    componentDidMount() {
        const scroll = new BScroll('.full-layer__content');
    }

    render() {
        const { id, checkState, onSelectCouponHandle } = this.props;
        const { loadFlag, coupons } = this.state;
        let checkIcon = checkState ? circle_ok : circle_no;

        if(!loadFlag) {
            return (
                <div className="full-layer__loading">
                    <ReactLoading type="spin" style={ { width: '0.6667rem', height: '0.6667rem' } } />
                </div>
            )
        }

        return(
            <div style={ StyleCouponWrap }>
                <TransitionGroup>
                    {
                        coupons.map((item) => {
                            return(
                                <CSSTransition
                                    key={ item.id }
                                    classNames="fadeUp"
                                    appear={ true }
                                    timeout={ 500 }
                                >
                                    <StyleCoupon>
                                        <StyleCouponAside>
                                            <StyleCouponAmount>￥15000</StyleCouponAmount>
                                            <StyleCouponCondition>满20000元可用</StyleCouponCondition>
                                        </StyleCouponAside>
                                        <StyleCouponMain>

                                            <StyleCouponHd>
                                                <StyleCouponCheckbox>
                                                    <img src={ checkIcon } alt="勾选"/>
                                                </StyleCouponCheckbox>
                                                <StyleCouponTitle>代金券</StyleCouponTitle>
                                                <StyleCouponBadge>今天过期</StyleCouponBadge>
                                            </StyleCouponHd>
                                            <StyleCouponBd>
                                                <div>投资期限=30天或60天</div>
                                                <div>除极计划外其余产品可用</div>
                                            </StyleCouponBd>
                                            <StyleCouponFt>
                                                <StyleCouponExpire>有效期至 2018-12-31</StyleCouponExpire>
                                            </StyleCouponFt>

                                        </StyleCouponMain>
                                    </StyleCoupon>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </div> 
        )
    }
}

const ButtonFixed = ({ children }) => {
    return (
        <div>
            <div className="full-layer__fixed-sibling"></div>
            <div className="full-layer__fixed-bottom">
                { children }
            </div> 
        </div>
    )
}

const Checkbox = ({ flag }) => (
    flag ? <box-icon name='checkbox'></box-icon> : <box-icon name='checkbox-checked'></box-icon>
)

export default class extends Component {
    state = {
        investAmount: '',
        agree: true,
        couponFlag: false
    }

    toggleAgree = () => {
        this.setState({ agree: !this.state.agree });
    }

    investBalance = () => {
        this.setState({ investAmount: 10000 });
    }

    changeHandle = (e) => {
        let amout = e.target.value;
        this.setState({ investAmount: amout });
    }

    submitHandle = () => {
    }

    toggleCouponHandle = () => {
        this.setState({ couponFlag: !this.state.couponFlag });
    }

    selectCouponHandle = (id) => {
    }

    render() {
        const { investAmount, coupons, agree, couponFlag } = this.state;

        return (
            <div>

                <AnimateFullLayer flag={ couponFlag }>
                    <Coupon />
                    <ButtonFixed>
                        <StyleButton onClick={ this.toggleCouponHandle }>确定</StyleButton>
                    </ButtonFixed>
                </AnimateFullLayer>

                <StyleHeadBox>
                    <LayoutPrimaryBox>

                        <LayoutBoxWrapSec>
                            <StyleGreyText>
                                <LayoutBoxBet>
                                    <span>剩余可购(元)</span>
                                    <span>预期收益(元)</span>
                                </LayoutBoxBet>
                            </StyleGreyText>
                        </LayoutBoxWrapSec>

                        <LayoutBoxWrapSec>
                            <LayoutBoxBet>
                                <strong>894,531</strong>
                                <strong>129.45+499</strong>
                            </LayoutBoxBet>
                        </LayoutBoxWrapSec>

                        <StyleInputPart>
                            <label>￥</label>
                            <input onChange={ this.changeHandle } value={ investAmount } type="text" placeholder="100元起投"/>
                            <button onClick={ this.investBalance }>余额全投</button>
                        </StyleInputPart>

                        <StyleGreyText>
                            <LayoutBoxBet>
                                <span>可用余额</span>
                                <span>0.00元</span>
                            </LayoutBoxBet>
                        </StyleGreyText>

                    </LayoutPrimaryBox>
                </StyleHeadBox>
            
                <StyleRow>
                    <LayoutBoxBetCenter>
                        <span>优惠券</span>
                        <LayoutBoxVerticalCenter onClick={ this.toggleCouponHandle }>
                            <span>有优惠券未使用</span>
                            <box-icon name='chevron-right'></box-icon>
                        </LayoutBoxVerticalCenter>
                    </LayoutBoxBetCenter>
                </StyleRow>

                <StyleRow>
                    <LayoutBoxBetCenter>
                        <span>实际支付</span>
                        <span>9850元</span>
                    </LayoutBoxBetCenter>
                </StyleRow>

                <StyleRow>
                    <LayoutBoxBetCenter>
                        <span>我有CF码，参加极路由0元购活动</span>
                        <box-icon name='chevron-right'></box-icon>
                    </LayoutBoxBetCenter>
                </StyleRow>

                <StyleRow>
                    <LayoutBoxBetCenter>
                        <span>c457555</span>
                        <span>如何获取CF码</span>
                    </LayoutBoxBetCenter>
                </StyleRow>

                <StyleRow>
                    <LayoutBoxVerticalCenter onClick={ this.toggleAgree }>
                        <Checkbox flag={ this.state.agree }/>我已阅读并同意《i财富四方借款协议》
                    </LayoutBoxVerticalCenter>
                </StyleRow>

                <div>
                    <LayoutFixedSibling/>
                    <LayoutFixedBottom>
                        <LayoutFlexBox>
                            <LayoutAside>
                                <LayoutAsideBox>
                                    <StyleServiceIcon src={ service_icon } alt="客服图标"/>
                                    <div>客服</div>
                                </LayoutAsideBox>
                            </LayoutAside>
                            <LayoutMain>
                                <StyleFullButton>余额不足，请充值14251元</StyleFullButton>
                            </LayoutMain>
                        </LayoutFlexBox>
                    </LayoutFixedBottom>
                </div>

            </div>
        )
    }
}