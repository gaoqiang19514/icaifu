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
import { fetchAsync } from '../actions';
import { view as Skeleton } from '@/common/skeleton';
import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder, StyleReactLoading } from '@/common/commonStyled';

import SelectedCate from './selectedCate';
import { randomBoolen, createDataList, getScrollTop } from '@/util';

const Cates = {
    ALL: 'all',
    RECHARGE: 'recharge',
    WITHDRAW: 'withdraw',
    BUY: 'buy',
    PAYMENT: 'payment' 
};

const getData = (cate, state = { items: [] }) => {
    return {
        items: [...state.items, ...createDataList(state.items.length, cate)]
    }
}

class RecordItem extends Component {
    render() {
        return (
            <InfiniteScroll
                pageStart={ 0 }
                loadMore={ this.props.loadFunc }
                hasMore={ true }
                loader={ <div className="loader" key={ 0 }>Loading ...</div> }
            >
                {
                    this.props.items.map((item) => {
                        return <div style={ { padding: '50px' } } key={ item.id }>{ item.text } - { item.index }</div>
                    })
                }
            </InfiniteScroll>
        )
    }
}

let nextReqId = 0

class ExchangeRecord extends Component {
    state = {}

    loadFunc = (page) => {
        const { cate } = this.props
        let seqId = ++nextReqId
        const dispatchIfValid = (callback) => {
            if(nextReqId === seqId){
                callback()
            }
        }
        
        setTimeout(() => {
            dispatchIfValid(() => {
                this.setState({
                    [cate]: getData(cate, this.state[cate])
                }, () => {
                    // console.log(this.state)
                })
            })
        }, 1000)
    }

    render() {
        const { items } = this.state[this.props.cate] || { items: [] }
        return (
            <div>
                <SelectedCate/>
                
                <RecordItem items={ items } loadFunc={ this.loadFunc }/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const list = state.record.list[state.record.cate.type] || {
        status: 'loading',
        items: [],
        isInfiniteLoading: false
    }
    return {
        cate: state.record.cate.type,
        list: list,
        isInfiniteLoading: list.isInfiniteLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchAsync: (page, cate) => {
            dispatch(fetchAsync(page, cate));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRecord)