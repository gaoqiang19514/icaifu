import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import service_icon from './images/service_icon.png';
import arrow_icon from './images/arrow_icon.png';
import checkbox_ok from './images/checkbox_icon_ok.png';
import checkbox_no from './images/checkbox_icon_no.png';

import { LayoutFixedBottom, LayoutFixedSibling, LayoutPrimaryBox, StyleBg, LayoutBoxWrap, LayoutBoxBet, LayoutBoxBetCenter, LayoutBoxCenter, LayoutFlexBox } from '@/common/commonStyled';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            agree: false
        };
    }

    toggleAgree = () => {
        this.setState({
            agree: !this.state.agree
        });
    }

    render() {
        const { agree } = this.state;
        const { match } = this.props;
        const id = match.params.id;
 
        const agree_icon = agree ? checkbox_ok : checkbox_no;

        return (
            <div>
                
                <LayoutBoxWrap>
                    <StyleBg>
                        <LayoutPrimaryBox>
                            <LayoutBoxBet>
                                <span>剩余可购(元)</span>
                                <span>预期收益(元)</span>
                            </LayoutBoxBet>
                            <LayoutBoxBet>
                                <strong>894,531</strong>
                                <strong>129.45+499</strong>
                            </LayoutBoxBet>
                            <div>
                                <LayoutBoxCenter>投资金额(元)</LayoutBoxCenter>
                                <LayoutBoxCenter>15000</LayoutBoxCenter>
                            </div>
                            <LayoutBoxBet>
                                <span>可用余额</span>
                                <span>0.00元</span>
                            </LayoutBoxBet>
                        </LayoutPrimaryBox>
                    </StyleBg>
                </LayoutBoxWrap>

                <LayoutBoxWrap>
                    <StyleBg>
                        <LayoutPrimaryBox>
                            <Link to={ { pathname: `/invest/${id}`, state: { type: 'jjh' } } }>
                                <LayoutBoxBetCenter>
                                    <span>项目详情</span>
                                    <img src={ arrow_icon } alt="箭头"/>
                                </LayoutBoxBetCenter>
                            </Link>
                        </LayoutPrimaryBox>
                    </StyleBg>
                </LayoutBoxWrap>

                <StyleBg>
                    <LayoutPrimaryBox>
                        <LayoutBoxBetCenter>
                            <input type="text" placeholder="请输入CF码"/>
                            <button>如何获取CF码</button>
                        </LayoutBoxBetCenter> 
                    </LayoutPrimaryBox>
                </StyleBg>
                
                <LayoutPrimaryBox>
                    <div>
                        <label onClick={ this.toggleAgree }>
                            <img src={ agree_icon } alt="checkbox"/>我已阅读并同意
                        </label>
                        <a href="">《i财富四方借款协议》</a>
                    </div>
                </LayoutPrimaryBox>
                
                <div>
                    <LayoutFixedSibling/>
                    <LayoutFixedBottom>
                        <LayoutFlexBox>
                            <div>
                                <img src={service_icon} alt="客服图标"/>
                                <div>客服</div>
                            </div>
                            <div>
                                <Link to="/">余额不足，请充值14251元</Link>
                            </div>
                        </LayoutFlexBox>
                    </LayoutFixedBottom>
                </div>

            </div>
        )
    }
}