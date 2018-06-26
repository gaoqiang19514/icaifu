import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import {actions as loadingActions} from '@/common/loading';


const LayoutWrap = styled.div`

`;

const LayoutBox = styled.div`
	padding: 0.4rem;
`;

const LayoutBoxBg = LayoutBox.extend`
	background: #fff;
	margin-bottom: 0.2667rem;
	display: flex;
	justify-content: space-between;
`;

const Button = styled.button`
    font-weight: bold;
    letter-spacing: .1em;
    color: #fff;
    padding: 0;
    font-size: 0.4267rem;
    cursor: pointer;
    border: 0;
    outline: none;
    height: 1.3333rem;
    border-radius: 0.6667rem;
    width: 100%;
	background-image: linear-gradient(90deg, 
		#f94c50 0%, 
		#f77366 100%), 
	linear-gradient(
		#f7645b, 
		#f7645b);
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249, 82, 83, 0.75);
`;

class Withdraw extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<LayoutWrap>

				<LayoutBoxBg>
					<img src="" alt=""/>
					<div>
						<div>建设银行（尾号7008）</div>
						<div>单笔10000 日限额5000000</div>
					</div>
				</LayoutBoxBg>

				<LayoutBoxBg>
					<span>账户余额</span>
					<span>100.00元</span>
				</LayoutBoxBg>

				<LayoutBoxBg>
					<span>￥</span>
					<input type="text"/>
				</LayoutBoxBg>

				<LayoutBoxBg>
					充值不收取手续费，充值金额必须为整数
				</LayoutBoxBg>

				<LayoutBox>
					<Button>充值</Button>
				</LayoutBox>

			</LayoutWrap>
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