import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import uuid from 'uuid';

import { actions as loadingActions } from '@/common/loading';
import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder } from '@/common/commonStyled';

// Layout


// Style

const StyleTypeItem = styled(Tab)`
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
	state = {
		index: 0,
		list: {
			all: [
				{ id: uuid(), text: uuid() }
			],
			bid: [
				{ id: uuid(), text: uuid() },
				{ id: uuid(), text: uuid() }
			],
			payment: [
				{ id: uuid(), text: uuid() },
				{ id: uuid(), text: uuid() },
				{ id: uuid(), text: uuid() }
			],
			redeemed: [
				{ id: uuid(), text: uuid() },
				{ id: uuid(), text: uuid() }
			]
		}
	}

	selectedTypeHandle = (index, lastIndex, e) => {
	}

	render() {
		const { index, list } = this.state;
		const { selectedTypeHandle } = this;
		const { ALL, BID, PAYMENT, REDEEMED } = Types;
		const { all, bid, payment, redeemed } = list;

		return (
			<Tabs onSelect={ this.selectedTypeHandle }>
			
				<TabList>
					<LayoutFixedSibling/>
					<LayoutFixedTop>
						<StyleBg>
							<LayoutFlexBox>
								<StyleTypeItem>全部</StyleTypeItem>
								<StyleTypeItem>招标中</StyleTypeItem>
								<StyleTypeItem>还款中</StyleTypeItem>
								<StyleTypeItem>已赎回</StyleTypeItem>
							</LayoutFlexBox>
						</StyleBg>
					</LayoutFixedTop>
				</TabList>

				<TabPanel>
					{ 
						all.map((item) => {
							return <StylePlaceHolder key={ item.id }>{ item.text }</StylePlaceHolder>
						}) 
					}
				</TabPanel>
				<TabPanel>
					{ 
						bid.map((item) => {
							return <StylePlaceHolder key={ item.id }>{ item.text }</StylePlaceHolder>
						}) 
					}
				</TabPanel>
				<TabPanel>
					{ 
						payment.map((item) => {
							return <StylePlaceHolder key={ item.id }>{ item.text }</StylePlaceHolder>
						}) 
					}
				</TabPanel>
				<TabPanel>
					{ 
						redeemed.map((item) => {
							return <StylePlaceHolder key={ item.id }>{ item.text }</StylePlaceHolder>
						}) 
					}
				</TabPanel>

			</Tabs>
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