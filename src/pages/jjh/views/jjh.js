import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import service_icon from './images/service_icon.png';

import { LayoutFixedBottom, Checkbox, input, button, LayoutFlexBox, LayoutBoxVerticalCenter, LayoutFixedSibling, LayoutPrimaryBox, StyleBg, LayoutBoxWrapSec, LayoutBoxWrap, LayoutBoxBet, LayoutBoxBetCenter, LayoutBoxCenter } from '@/common/commonStyled';

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

const StyleInput = input.extend`
`;

const StyleButton = button.extend`
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

const StyleRow = styled.div`
    font-size: 0.4rem;
    padding: 0.4rem;
    margin-bottom: ${ props => props.nomargin ? '0' : '0.2667rem' };
    background: #fff;
`;

const StyleBox = styled.div`
    text-align: center;
    padding: 0.4rem;
    background: #fff3f0;
    border-radius: 5px;

    strong{
        display: flex;
        justify-content: center;
        font-size: 0.6667rem;
        margin-top: 0.2667rem;
    }
`;

const StyleGreyText = styled.div`
    color: #898996;
`;

export default class extends Component {
    state = {
        agree: false
    }

    toggleAgree = () => {
        this.setState({ agree: !this.state.agree });
    }

    render() {
        const { agree } = this.state;
        const { match } = this.props;
        const id = match.params.id;

        return (
            <div>
                
                <StyleRow>
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

                    <LayoutBoxWrapSec>
                        <StyleBox>
                            <StyleGreyText>
                                投资金额(元)
                            </StyleGreyText>
                            <strong>15000</strong>
                        </StyleBox>
                    </LayoutBoxWrapSec>

                    <StyleGreyText>
                        <LayoutBoxBet>
                            <span>可用余额</span>
                            <span>0.00元</span>
                        </LayoutBoxBet>
                    </StyleGreyText>
                </StyleRow>

                <StyleRow>
                    <Link to={ { pathname: `/invest/${id}`, state: { type: 'jjh' } } }>
                        <LayoutBoxBetCenter>
                            <span>项目详情</span>
                            <box-icon name='chevron-right'></box-icon>
                        </LayoutBoxBetCenter>
                    </Link>
                </StyleRow>

                <StyleRow nomargin>
                    <LayoutBoxBetCenter>
                        <StyleInput type="text" placeholder="请输入CF码"/>
                        <StyleButton>如何获取CF码</StyleButton>
                    </LayoutBoxBetCenter>
                </StyleRow>
                    
                <LayoutPrimaryBox>
                    <LayoutBoxVerticalCenter>
                        <LayoutBoxVerticalCenter onClick={ this.toggleAgree }>
                            <Checkbox flag={ agree }/>我已阅读并同意
                        </LayoutBoxVerticalCenter>
                        <a href="">《i财富四方借款协议》</a>
                    </LayoutBoxVerticalCenter>
                </LayoutPrimaryBox>
                
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