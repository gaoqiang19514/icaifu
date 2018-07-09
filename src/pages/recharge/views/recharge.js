import React, { Component } from 'react';
import styled from 'styled-components';
import 'boxicons';

import { LayoutBoxVerticalCenter, LayoutPrimaryBox, LayoutFlexBox, Input, StyleBg, StylePrimaryButton } from '@/common/commonStyled';

const StyleBankName = styled.div`
    font-size: 0.4267rem;
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

const StyleInput = Input.extend`
    font-size: 0.6667rem;
    width: 100%;
`;

const StyleLabel = styled.label`
    font-size: 0.6667rem;
    margin-right: 0.3rem;
`;

class Recharge extends Component {
    state = {
        money: ''
    }

    submitHandle = (e) => {
        this.setState({ money: '' });
    }

    inputChangeHandle = (e) => {
        this.setState({ money: e.target.value });
    }
    
    render() {
        const { money } = this.state;
        const { inputChangeHandle, submitHandle } = this;

        return (
            <div>
                
                <StyleBg>
                    <LayoutPrimaryBox>
                        <StyleTips>充值不收取手续费，充值金额必须为整数</StyleTips>
                    </LayoutPrimaryBox>
                </StyleBg>

                <LayoutPrimaryBox>
                    <StyleTips>充值不收取手续费，充值金额必须为整数</StyleTips>
                </LayoutPrimaryBox>

                <StyleBg>
                    <LayoutPrimaryBox>
                        <LayoutBoxVerticalCenter>
                            <StyleLabel>￥</StyleLabel>
                            <StyleInput onChange={ inputChangeHandle } type="text" value={ money } placeholder="请输入充值金额" />
                        </LayoutBoxVerticalCenter>
                    </LayoutPrimaryBox>
                </StyleBg>

                <LayoutPrimaryBox>
                    <StyleTips>充值不收取手续费，充值金额必须为整数</StyleTips>
                </LayoutPrimaryBox>

                <StyleBg>
                    <LayoutPrimaryBox>
                        <LayoutBoxVerticalCenter>
                            <StyleIconBox>
                                <box-icon name='credit-card' color="#f94c50" style={ { width: "1.3333rem", height: "1.3333rem" } }></box-icon>
                            </StyleIconBox>
                            <div>
                                <StyleBankName>工商银行</StyleBankName>
                                <StyleBankLimit>单笔限额10万，单日限额20万</StyleBankLimit>
                            </div>
                        </LayoutBoxVerticalCenter>
                    </LayoutPrimaryBox>
                </StyleBg>

                <LayoutPrimaryBox>
                    <StylePrimaryButton onClick={ submitHandle }>确定</StylePrimaryButton>
                </LayoutPrimaryBox>
            </div>
        )
    }
}

export default Recharge;