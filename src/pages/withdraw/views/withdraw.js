import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import 'boxicons';

import { LayoutBoxWrap, LayoutPrimaryBox, LayoutBoxBet, StyleBg, StylePrimaryButton, LayoutBoxVerticalCenter, Input } from '@/common/commonStyled';
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
    margin-bottom: 0.2rem;
`;

const StyleBankLimit = styled.div`
    font-size: 0.3467rem;
    color: #888;
`;

class Withdraw extends Component {

	render() {
		return (
			<div>
				
				<LayoutBoxWrap>
					<StyleBg>
						<LayoutPrimaryBox>
							<LayoutBoxVerticalCenter>
								<StyleIconBox>
									<box-icon name='credit-card' color="#f94c50" style={ { width: "1.3333rem", height: "1.3333rem" } }></box-icon>
								</StyleIconBox>
								<div>
									<StyleBankName>建设银行（尾号7008）</StyleBankName>
                                	<StyleBankLimit>单笔限额10万，单日限额20万</StyleBankLimit>
								</div>
							</LayoutBoxVerticalCenter>
						</LayoutPrimaryBox>
					</StyleBg>
				</LayoutBoxWrap>

				<LayoutBoxWrap>
					<StyleBg>
						<LayoutPrimaryBox>
							<LayoutBoxBet>
								<div>账户余额</div>
								<div>100.00元</div>
							</LayoutBoxBet>
						</LayoutPrimaryBox>
					</StyleBg>
				</LayoutBoxWrap>

				<LayoutBoxWrap>
					<StyleBg>
						<LayoutPrimaryBox>
							<LayoutBoxVerticalCenter>
								<StyleLabel>￥</StyleLabel>
								<StyleInput type="text" placeholder="请输入提现金额"/>
							</LayoutBoxVerticalCenter>
						</LayoutPrimaryBox>
					</StyleBg>
				</LayoutBoxWrap>

				<LayoutPrimaryBox>
					充值不收取手续费，充值金额必须为整数
				</LayoutPrimaryBox>

				<LayoutPrimaryBox>
					<StylePrimaryButton>确定</StylePrimaryButton>
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