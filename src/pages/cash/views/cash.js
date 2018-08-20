import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import uuid from 'uuid';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroller';

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

const StyleNavItem = styled(Tab)`
    flex-grow: 1;
    text-align: center;
    height: 1.3333rem;
    line-height: 1.3333rem;
    color: #9299a4;
    font-size: 0.3467rem;
    background: #fff;

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
        instance.get('https://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=exchange_record', {
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
    ACTIVATE: 'activate',
    GETED: 'geted',
    EXPIRED: 'expired'
};

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: Types.ACTIVATE
        };
    }

    render() {
        const { type } = this.state;
        const { ACTIVATE, GETED, EXPIRED } = Types;

        return(
            <Tabs>

                <TabList>
                    <LayoutFixedSibling/>
                    <LayoutFixedTop>
                        <StyleBg>
                            <LayoutFlexBox>
                                <StyleNavItem>待激活</StyleNavItem>
                                <StyleNavItem>已领取</StyleNavItem>
                                <StyleNavItem>已过期</StyleNavItem>
                            </LayoutFlexBox>
                        </StyleBg>
                    </LayoutFixedTop>
                </TabList>

				<TabPanel>
					<List type={ ACTIVATE }/>
				</TabPanel>

				<TabPanel>
					<List type={ GETED }/>
				</TabPanel>

				<TabPanel>
					<List type={ EXPIRED }/>
				</TabPanel>

            </Tabs>
        )
    }
}