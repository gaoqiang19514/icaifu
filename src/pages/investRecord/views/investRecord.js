import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import uuid from 'uuid';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroller';

import { actions as loadingActions } from '@/common/loading';
import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder } from '@/common/commonStyled';

const CancelToken = axios.CancelToken;
let source = null;
const instance = axios.create();

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    response.data.list = response.data.list.filter((item) => {
        item.id = uuid();
        return item;
	});

	// 对响应数据做点什么
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});


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

const StyleReactLoading = styled(ReactLoading)`
    margin: 0.4rem auto;
`;

class List extends Component {
	state = {
		initFlag: true,
		list: [],
		hasMoreItems: true
	}
	
	componentWillUnmount() {
        source.cancel('Operation canceled');
	}
	
	loadNextPage = (page) => {
        source = CancelToken.source();
        instance.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=exchange_record', {
            cancelToken: source.token
        })
        .then((response) => {
			if(response.data.list.length){
				this.setState({
					list: [
						...this.state.list,
						...response.data.list
					]
				});
			}else{
				this.setState({
					hasMoreItems: false
				});
			}
        })
        .catch(() => {
        })
        .finally(() => {
			if(this.state.initFlag){
				this.setState({initFlag: false});
			}
        });
    }

	loadMoreHandle = (page) => {
		this.loadNextPage(page);
	}

	render() {
		const { hasMoreItems, list } = this.state;

		const LoadingPlaceHolder = () => {
			if(this.state.initFlag){
				return <div>Skeleton</div>;
			}else{
				return <StyleReactLoading height={ 30 } width={ 30 } type="spin" color="#444" />;
			}
		}

		return(
			<InfiniteScroll
				pageStart={ 0 }
				loadMore={ this.loadMoreHandle }
				hasMore={ hasMoreItems }
				loader={ <LoadingPlaceHolder key={ 0 }/> }
			>
				{ 
					list.map((item) => {
						return <StylePlaceHolder key={ item.id }>{ item.text }</StylePlaceHolder>
					}) 
				}
			</InfiniteScroll>
		)
	}
}

const Types = {
	ALL: 'all',
	BID: 'bid',
	PAYMENT: 'payment',
	REDEEMED: 'redeemed'
};

class InvestRecord extends Component {

	render() {
		const { ALL, BID, PAYMENT, REDEEMED } = Types;

		return (
			<Tabs>
			
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
					<List type={ ALL }/>
				</TabPanel>

				<TabPanel>
					<List type={ BID }/>
				</TabPanel>

				<TabPanel>
					<List type={ PAYMENT }/>
				</TabPanel>

				<TabPanel>
					<List type={ REDEEMED }/>
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