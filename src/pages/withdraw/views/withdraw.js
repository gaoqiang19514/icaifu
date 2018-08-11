import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import 'boxicons';

import arrow_icon from '@/common/images/arrow_icon.png';

import { LayoutBoxBetCenter, LayoutPrimaryBox, LayoutBoxBet, StyleBg, StylePrimaryButton, LayoutBoxVerticalCenter, Input } from '@/common/commonStyled';
import { actions as loadingActions } from '@/common/loading';

const StyleIconBox = styled.div`
    margin-right: 0.4rem;
`;

const StyleLabel = styled.label`
    font-size: 0.6667rem;
    margin-right: 0.3rem;
`;

const StyleInput = Input.extend`
    font-size: 0.6667rem;
    width: 100%;
`;

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

const Arrow = styled.img`
    width: 0.24rem;
    height: 0.4rem;
    margin-left: 0.4rem;
`;

class Withdraw extends Component {
	state = {
		money: ''
	}

	onChangeHandle = (e) => {
		this.setState({ money: e.target.value.replace(/\D/g, '') })
	}

	onClickHandle = () => {
	}

	render() {
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
									<StyleBankName>建设银行（尾号7008）</StyleBankName>
									<StyleBankLimit>单笔限额10万，单日限额20万</StyleBankLimit>
								</div>
							</LayoutBoxVerticalCenter>
							<Arrow src={ arrow_icon } alt="箭头" />
						</LayoutBoxBetCenter>
					</LayoutPrimaryBox>
				</StyleBg>

				<StyleTips>
					<LayoutPrimaryBox>
						<LayoutBoxBet>
								<div>账户余额</div>
								<div>100.00元</div>
						</LayoutBoxBet>
					</LayoutPrimaryBox>
				</StyleTips>

				<StyleBg>
					<LayoutPrimaryBox>
						<LayoutBoxVerticalCenter>
							<StyleLabel>￥</StyleLabel>
							<StyleInput value={ this.state.money } onChange={ this.onChangeHandle } type="text" placeholder="请输入提现金额"/>
						</LayoutBoxVerticalCenter>
					</LayoutPrimaryBox>
				</StyleBg>

				<LayoutPrimaryBox>
					<StyleTips>充值不收取手续费，充值金额必须为整数</StyleTips>
				</LayoutPrimaryBox>

				<LayoutPrimaryBox>
					{ money ? <StylePrimaryButton onClick={ this.onClickHandle } primary>确定</StylePrimaryButton> : <StylePrimaryButton>确定</StylePrimaryButton> }
				</LayoutPrimaryBox>

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

export default connect(null, mapDispatchToProps)(Withdraw)