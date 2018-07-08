import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import BScroll from 'better-scroll';
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

const LayoutScroller = styled.div`
    flex-shrink: 0;
    display: flex;
`;

const LayoutNavItem = styled(Tab)`
    flex: 1;
    color: #898996;
    font-size: 0.3467rem;
    height: 1.3333rem;
	line-height: 1.3333rem;
    padding: 0 0.6667rem;
    &.selected{
        color: #ff4949;
    }
`;

const StyleReactLoading = styled(ReactLoading)`
    margin: 0.4rem auto;
`;

class List extends Component {
	state = {
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
			if(response.data.list){
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
        });
    }

	loadMoreHandle = (page) => {
		this.loadNextPage(page);
	}

	render() {
		const { hasMoreItems, list } = this.state;
		const { type } = this.props;

		return(
			<InfiniteScroll
				pageStart={ 0 }
				loadMore={ this.loadMoreHandle }
				hasMore={ hasMoreItems }
				loader={  <StyleReactLoading key={ 0 } height={ 30 } width={ 30 } type="spin" color="#444" /> }
			>
				<div>
					{ 
						list.map((item) => {
							return <StylePlaceHolder key={ item.id }>{ item.text }</StylePlaceHolder>
						}) 
					}
				</div>
			</InfiniteScroll>
		)
	}
}

const Types = {
    ALL: 'all',
    RECHARGE: 'recharge',
    WITHDRAW: 'withdraw',
    BUY: 'buy',
    PAYMENT: 'payment' 
};

class ExchangeRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: Types.ALL,
            list: []
        };
    }

    componentDidMount() {
        const scroll = new BScroll('.wrapper', {
            scrollX: true,
            click: true
        });
    }

    render() {
        const { type, list } = this.state;
        const { ALL, RECHARGE, WITHDRAW, BUY, PAYMENT } = Types;

        return (
            <Tabs>

                <TabList>
                    <LayoutFixedSibling/>
                    <LayoutFixedTop>
                        <StyleBg>
                            <LayoutFlexBox className="wrapper">
                                <LayoutScroller>
                                    <LayoutNavItem>全部</LayoutNavItem>
                                    <LayoutNavItem>充值</LayoutNavItem>
                                    <LayoutNavItem>提现</LayoutNavItem>
                                    <LayoutNavItem>购买</LayoutNavItem>
                                    <LayoutNavItem>回款</LayoutNavItem>
                                </LayoutScroller>
                            </LayoutFlexBox>
                        </StyleBg>
                    </LayoutFixedTop>
                </TabList>
           
				<TabPanel>
					<List type={ ALL }/>
				</TabPanel>

				<TabPanel>
					<List type={ RECHARGE }/>
				</TabPanel>

				<TabPanel>
					<List type={ WITHDRAW }/>
				</TabPanel>

				<TabPanel>
					<List type={ BUY }/>
				</TabPanel>

                <TabPanel>
					<List type={ PAYMENT }/>
				</TabPanel>

            </Tabs>
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

export default connect(null, mapDispatchToProps)(ExchangeRecord)