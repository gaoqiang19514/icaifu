import React, { Component } from 'react';
import styled from 'styled-components';
import 'boxicons';

import { LayoutBoxVerticalCenter, LayoutPrimaryBox, LayoutFlexBox, input, StyleBg, StylePrimaryButton, LayoutBoxBetCenter } from '@/common/commonStyled';

import arrow_icon from '@/common/images/arrow_icon.png';

const StyleBankName = styled.div`
    font-size: 0.4267rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
`;

const StyleBankLimit = styled.div`
    font-size: 0.3467rem;
    color: #888;
`;

const StyleTips = styled.div`
    color: #888;
`;

const StyleIconBox = styled.div`
    margin-right: 0.4rem;
`;

const StyleInput = input.extend`
    font-size: 0.6667rem;
    width: 100%;
`;

const StyleLabel = styled.label`
    font-size: 0.6667rem;
    margin-right: 0.3rem;
`;

const Arrow = styled.img`
    width: 0.24rem;
    height: 0.4rem;
    margin-left: 0.4rem;
`;

class Recharge extends Component {
    state = {
        money: ''
    }

    submitHandle = () => {
        alert('submitHandle')
    }

	onChangeHandle = (e) => {
		this.setState({ money: e.target.value.replace(/\D/g, '') })
	}
    
    render() {
        const { onChangeHandle, submitHandle } = this;
        const money = parseInt(this.state.money) || 0

        return (
            <div>
                
                <StyleBg>
                    <LayoutPrimaryBox>
                        <LayoutBoxBetCenter>
                            <LayoutBoxVerticalCenter>
                                <StyleIconBox>
                                    <box-icon name='credit-card' color="#f94c50" style={ { width: "1rem", height: "1rem" } }></box-icon>
                                </StyleIconBox>
                                <div>
                                    <StyleBankName>工商银行</StyleBankName>
                                    <StyleBankLimit>单笔限额10万，单日限额20万</StyleBankLimit>
                                </div>
                            </LayoutBoxVerticalCenter>
                            <Arrow src={ arrow_icon } alt="箭头" />
                        </LayoutBoxBetCenter>
                    </LayoutPrimaryBox>
                </StyleBg>
                
                <LayoutPrimaryBox>
                    <StyleTips>充值不收取手续费，充值金额必须为整数</StyleTips>
                </LayoutPrimaryBox>

                <StyleBg>
                    <LayoutPrimaryBox>
                        <LayoutBoxVerticalCenter>
                            <StyleLabel>￥</StyleLabel>
                            <StyleInput onChange={ onChangeHandle } type="text" value={ this.state.money } placeholder="请输入充值金额" />
                        </LayoutBoxVerticalCenter>
                    </LayoutPrimaryBox>
                </StyleBg>

                <LayoutPrimaryBox>
                    { money ? <StylePrimaryButton onClick={ submitHandle } primary>确定</StylePrimaryButton> : <StylePrimaryButton>确定</StylePrimaryButton> }
                </LayoutPrimaryBox>
            </div>
        )
    }
}

export default Recharge;