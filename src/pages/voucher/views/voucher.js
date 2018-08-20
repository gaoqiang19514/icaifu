import React, {Component} from 'react'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from 'react-loading';
import uuid from 'uuid';

import './style.css';
import { LayoutFixedTop, LayoutFixedSiblingDouble, LayoutFlexBox, StyleBg, StylePlaceHolder, StyleReactLoading } from '@/common/commonStyled';

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
    font-size: 0.3467rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    &.selected{
        color: #ff4949;
    }
`;

class Coupon extends Component {
    state = {
        hasMoreItems: true,
        list: [],
        type: this.props.type,
        status: this.props.status
    }
    
    componentWillUnmount() {
        source.cancel('Operation canceled');
    }

    componentWillReceiveProps(nextProps) {
        const { props } = this;
        if(nextProps.type !== props.type || nextProps.status !== props.status){
            this.setState({
                type: nextProps.type,
                status: nextProps.status,
                list: []
            });
        }
    }

    loadNextPage = (page) => {
        const { type, status } = this.state;

        source = CancelToken.source();
        instance.get('https://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=activity_list', {
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

    handleLoadMore = (page) => {
        this.loadNextPage(page);
    }

    render() {
        const { hasMoreItems, list } = this.state;

        return(
            <div>
                <InfiniteScroll
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

const Types = {
    CASH: 'cash',
    INTEREST_RATES: 'interest_rates'
};

const Statuses = {
    UNUSED: 'unused',
    USED: 'used',
    EXPIRED: 'expired'
};

export default class extends Component {
    state = {
        type: Types.CASH,
        status: Statuses.UNUSED
    }

    switchTypeHandle = (e) => {
        const type = e.target.getAttribute('data-type');
        this.setState({
            type: type
        });
    }

    switchStatusHandle = (e) => {
        const status = e.target.getAttribute('data-status');
        this.setState({
            status: status
        });    
    }

    render() {
        const { type, status } = this.state;
        const { switchTypeHandle, switchStatusHandle } = this;
        
        return (
            <div>
                
                <div>
                    <LayoutFixedSiblingDouble/>
                    <LayoutFixedTop>
                        <StyleList>
                            <StyleItem className={ type === Types.CASH ? "selected" : "" } data-type={ Types.CASH } onClick={ switchTypeHandle }>代金券</StyleItem>
                            <StyleItem className={ type === Types.INTEREST_RATES ? "selected" : "" } data-type={ Types.INTEREST_RATES } onClick={ switchTypeHandle }>加息券</StyleItem>
                        </StyleList>
                        <StyleList>
                            <StyleItem className={ status === Statuses.UNUSED ? "selected" : "" } data-status={ Statuses.UNUSED } onClick={ switchStatusHandle }>未使用</StyleItem>
                            <StyleItem className={ status === Statuses.USED ? "selected" : "" } data-status={ Statuses.USED } onClick={ switchStatusHandle }>已使用</StyleItem>
                            <StyleItem className={ status === Statuses.EXPIRED ? "selected" : "" } data-status={ Statuses.EXPIRED } onClick={ switchStatusHandle }>已过期</StyleItem>
                        </StyleList>
                    </LayoutFixedTop>
                </div>

                <Coupon type={ type } status={ status }/>

            </div>
        )
    }
}