import React, {Component} from 'react'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from 'react-loading';
import uuid from 'uuid';

import './style.css';
import { LayoutFixedTop, LayoutFixedSiblingDouble, LayoutFlexBox, StyleBg, StylePlaceHolder } from '@/common/commonStyled';

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


const StyleList = styled.div`
    position: relative;
    display: flex;
    background: #fff;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);
    }
`;

const StyleItem = styled.div`
    flex: 1;
    text-align: center;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    &.selected{
        color: #ff4949;
    }
`;

const Types = {
    CASH: 'cash',
    INTEREST_RATES: 'interest_rates'
};

const Status = {
    UNUSED: 'unused',
    USED: 'used',
    EXPIRED: 'expired'
};

const StyleReactLoading = styled(ReactLoading)`
    margin: auto;
`;


class Coupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMoreItems: true,
            list: []
        };
    }

    componentWillUnmount() {
        source.cancel('Operation canceled');
    }

    loadNextPage = (page) => {
        source = CancelToken.source();
        instance.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=activity_list', {
            cancelToken: source.token
        })
        .then((response) => {
            this.setState({
                list: [
                    ...this.state.list,
                    ...response.data.list
                ]
            });
        })
        .catch(() => {
        })
        .finally(() => {
        });
    }

    handleLoadMore = (page) => {
        this.loadNextPage(page);
    }

    render() {
        const { type, status } = this.props;
        const { hasMoreItems, list } = this.state;
        
        return(
            <div>
                <InfiniteScroll
                    threshold={ 0 } 
                    pageStart={ 0 }
                    loadMore={ this.handleLoadMore }
                    hasMore={ hasMoreItems }
                    loader={ <StyleReactLoading key={ 0 } height={ 30 } width={ 30 } type="spin" color="#444" /> }
                >
                    {
                        list.map((item) => {
                            return(
                                <StylePlaceHolder key={ item.id }></StylePlaceHolder>
                            )
                        })
                    }
                </InfiniteScroll>
            </div>
        )
    }
}

const Page = ({ type }) => (
    <Tabs>
        <TabList>
            <Tab>未使用</Tab>
            <Tab>已使用</Tab>
            <Tab>已过期</Tab>
        </TabList>

        <TabPanel>
            <Coupon type={ type } status={ Status.UNUSED }/>
        </TabPanel>
        <TabPanel>
            <Coupon type={ type } status={ Status.USED }/>
        </TabPanel>
        <TabPanel>
            <Coupon type={ type } status={ Status.EXPIRED }/>
        </TabPanel>
    </Tabs>
)

export default class extends Component {
    
    render() {
        return (
            <Tabs>
                <TabList>
                    <Tab>代金券</Tab>
                    <Tab>加息券</Tab>
                </TabList>

                <TabPanel>
                    <Page type={ Types.CASH }/>
                </TabPanel>
                <TabPanel>
                    <Page type={ Types.INTEREST_RATES }/>
                </TabPanel>
            </Tabs>
        )
    }
}