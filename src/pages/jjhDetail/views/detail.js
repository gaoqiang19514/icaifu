import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import service_icon from './images/service_icon.png';
import line from './images/line.png'

import { LayoutFixedBottom, LayoutFixedSibling, LayoutBoxBet, LayoutBoxAround, LayoutFlexBox } from '@/common/commonStyled';

const LayoutWrap = styled.div`
    margin-bottom: 0.2667rem;
`;

const LayoutIcon = styled.span`
    margin-right: 0.2667rem;
`;

const StyleRow = styled.div`
    padding: 0.4rem;
    margin-bottom: 0.2667rem;
    background: #fff;
`;

const StyleNav = styled.nav`
    a{
        display: flex;
        justify-content: space-between;
        position: relative;
        font-size: 0.3733rem;
        padding: 0.4rem;
    }
    a:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0.4rem;
        right: 0;
        transform: translateY(.5);
        background: #eaeaea;
        height: 1px;
    }
    a:last-child:after{
        content: none;
    }
`;

const StyleCalc = styled.div`
    border-radius: 3px;
    padding: 0.5333rem;
    color: #f8695e;
    font-size: 0.64rem;
    background: #fff3f0;
`;

const StyleCalcHead = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.2667rem;
    font-size: 0.32rem;
`;

const StyleItem = styled.span`
    text-align: center;
    flex: 1;
`;

const StyleItems = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 0.32rem;
    color: #898996;
`;

const StyleStep = styled.img`
    width: 6.8rem;
    height: 0.1333rem;
`;

const StyleStepLine = styled.div`
    display: flex;
    justify-content: center;
`;

const StyleBox = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.3733rem;
`;

const StyleHeadItemPrimary = styled.div`
    display: flex;
    justify-content: center;
    font-size: 0.4rem;
    margin-bottom: 0.2667rem;
`;

const StyleHeadItemSecond = styled.div`
    display: flex;
    justify-content: center;
    color: #898996;
    font-size: 0.32rem;
    margin-bottom: 0.2667rem;
`;

const StyleHeadWrap = styled.div`
    padding-top: 1.2rem;
    margin-bottom: 0.8rem;
`;

const StyleHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 0.2667rem;
    color: #f8695e;
    font-weight: bold;
    strong{
        font-size: 1.0667rem;
    }
    small{
        font-size: 0.64rem;
    }
`;

const StylePercentBar = styled.div`
    background: #eaeaea;
    margin-bottom: 0.2667rem;
    div{
        background: #f8695e;
        height: 4px;
    }
`;

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

const StyleServiceIcon = styled.img`
    margin: 0.2rem auto 0.1333rem auto;
    width: 0.5333rem;
    height: 0.52rem;
`;

const StyleLink = styled(Link)`
    text-align: center;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    flex: 1;
    color: #fff;
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient(#d7d7d7, #d7d7d7);
`;

export default class extends Component {

    render() {
        const { id } = this.props.match.params;

        return (
            <div>
                
                <StyleRow>

                    <StyleHeadWrap>
                        <StyleHead>
                            <strong>12.00</strong>
                            <small>% + 2.00%</small>
                        </StyleHead>
                        <StyleHeadItemSecond>参考年化利率</StyleHeadItemSecond>
                    </StyleHeadWrap>

                    <LayoutWrap>
                        <LayoutBoxAround>
                            <div>
                                <StyleHeadItemPrimary>90天</StyleHeadItemPrimary>
                                <StyleHeadItemSecond>投资期限</StyleHeadItemSecond>
                            </div>
                            <div>
                                <StyleHeadItemPrimary>15000元</StyleHeadItemPrimary>
                                <StyleHeadItemSecond>起购金额</StyleHeadItemSecond>
                            </div>
                        </LayoutBoxAround>
                    </LayoutWrap>

                    <StylePercentBar>
                        <div style={ { width: '50%' } }></div>
                    </StylePercentBar>

                    <LayoutBoxBet>
                        <div>剩余额度：500,000,.00元</div>
                        <div>已售：50.00%</div>
                    </LayoutBoxBet>
                </StyleRow>

                <StyleRow>
                    <StyleBox>
                        <span>上饶银行资金存管</span>
                        <box-icon name='chevron-right' color="#ccc"></box-icon>
                    </StyleBox>
                </StyleRow>

                <StyleRow>
                    <LayoutWrap>
                        <StyleItems>
                            <StyleItem>今日投资</StyleItem>
                            <StyleItem>开始计息</StyleItem>
                            <StyleItem>产品到期</StyleItem>
                        </StyleItems>
                    </LayoutWrap>
                    <LayoutWrap>
                        <StyleStepLine>
                            <StyleStep src={ line } alt="线条"/>
                        </StyleStepLine>
                    </LayoutWrap>
                    <StyleItems>
                        <StyleItem>03-19</StyleItem>
                        <StyleItem>预计03-05</StyleItem>
                        <StyleItem>预计04-24</StyleItem>
                    </StyleItems>
                </StyleRow>
                
                <StyleRow>
                    <StyleCalcHead>
                        <LayoutIcon>
                            <box-icon name='calculator' animation='tada' color="#f8695e"></box-icon>
                        </LayoutIcon>
                        <span>投资10,000元，90天到期后预计可赚</span>
                    </StyleCalcHead>
                    <StyleCalc>10,000.23元</StyleCalc>
                </StyleRow>

                <StyleRow>
                    <StyleNav>
                        <Link to="/">
                            <span>产品信息</span>
                            <box-icon name='chevron-right' color="#ccc"></box-icon>
                        </Link>
                        <Link to="/">
                            <span>产品介绍</span>
                            <box-icon name='chevron-right' color="#ccc"></box-icon>
                        </Link>
                        <Link to="/">
                            <span>风险控制</span>
                            <box-icon name='chevron-right' color="#ccc"></box-icon>
                        </Link>
                        <Link to="/">
                            <span>相关材料</span>
                            <box-icon name='chevron-right' color="#ccc"></box-icon>
                        </Link>
                        <Link to="/">
                            <span>投资记录</span>
                            <box-icon name='chevron-right' color="#ccc"></box-icon>
                        </Link>
                        <Link to="/">
                            <span>常见问题</span>
                            <box-icon name='chevron-right' color="#ccc"></box-icon>
                        </Link>
                    </StyleNav>
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
                                <StyleLink to={`/jjh/${id}`}>立即投资</StyleLink>
                            </LayoutMain>
                        </LayoutFlexBox>
                    </LayoutFixedBottom>
                </div>
            </div>
        )
    }
}