import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { actions as loadingActions } from '@/common/loading';
import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder } from '@/common/commonStyled';

// Layout


// Style

const StyleTypeItem = styled.div`
	width: 25%;
	height: 1.3333rem;
	line-height: 1.3333rem;
	text-align: center;
	color: #898996;
	font-size: 0.3467rem;
	&.selected{
		color: #ff4949;
	}
`;

// 每种类型的页数

const Types = {
	ALL: 'all',
	BID: 'bid',
	PAYMENT: 'payment',
	REDEEMED: 'redeemed'
};

class InvestRecord extends Component {
	constructor(props) {
		super(props);
		this.state = { type: Types.ALL };
	}

	selectedTypeHandle = (e) => {
		let type = e.target.getAttribute('data-type');

		if(type === this.state.type){
			return;
		}

		this.setState({
			type: type
		}, this.getListOfTypeHandle);
	}
	
	getListOfTypeHandle = () => {
		const { type } = this.state;
	}

	render() {
		const { type } = this.state;
		const { selectedTypeHandle } = this;
		const { ALL, BID, PAYMENT, REDEEMED } = Types;

		return (
			<div>

				<div>
					<LayoutFixedSibling/>
					<LayoutFixedTop>
						<StyleBg>
							<LayoutFlexBox>
								<StyleTypeItem 
									className={ type === ALL ? "selected" : "" } 
									onClick={ selectedTypeHandle } 
									data-type={ ALL }>全部</StyleTypeItem>
								<StyleTypeItem 
									className={ type === BID ? "selected" : "" } 
									onClick={ selectedTypeHandle } 
									data-type={ BID }>招标中</StyleTypeItem>
								<StyleTypeItem 
									className={ type === PAYMENT ? "selected" : "" } 
									onClick={ selectedTypeHandle } 
									data-type={ PAYMENT }>还款中</StyleTypeItem>
								<StyleTypeItem 
									className={ type === REDEEMED ? "selected" : "" } 
									onClick={ selectedTypeHandle } 
									data-type={ REDEEMED }>已赎回</StyleTypeItem>
							</LayoutFlexBox>
						</StyleBg>
					</LayoutFixedTop>
				</div>

				<div>
					<StylePlaceHolder/>
					<StylePlaceHolder/>
					<StylePlaceHolder/>
					<StylePlaceHolder/>
					<StylePlaceHolder/>
					<StylePlaceHolder/>
				</div>

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowLoading: () => {
            dispatch(loadingActions.showLoading());
        },
        onHideLoading: () => {
            dispatch(loadingActions.hideLoading());
        }
    }
}

export default connect(null, mapDispatchToProps)(InvestRecord);