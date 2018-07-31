import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import BScroll from 'better-scroll';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import uuid from 'uuid';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroller';
import Infinite from 'react-infinite'

import { actions as loadingActions } from '@/common/loading';
import { fetchAsync } from '../actions';
import { view as Skeleton } from '@/common/skeleton';
import { LayoutFixedTop, LayoutFixedSibling, LayoutFlexBox, StyleBg, StylePlaceHolder, StyleReactLoading } from '@/common/commonStyled';

import SelectedCate from './selectedCate';

const Cates = {
    ALL: 'all',
    RECHARGE: 'recharge',
    WITHDRAW: 'withdraw',
    BUY: 'buy',
    PAYMENT: 'payment' 
};

class ExchangeRecord extends Component {

    // 当props发生变化时执行，初始化render时不执行
    componentWillReceiveProps(nextProps) {
        if(nextProps.cate !== this.props.cate){
            
            console.log(nextProps.cate)
        }
    }

    handleInfiniteLoad = () => {
        this.props.onFetchAsync(0, this.props.cate)
    }

    elementInfiniteLoad = () => {
        return <div>
            Loading...
        </div>
    }

    render() {
        const { items, isInfiniteLoading } = this.props.list
        return (
            <div>
                <SelectedCate/>
                
                <div>
                    <Infinite 
                        onInfiniteLoad={ this.handleInfiniteLoad }
                        infiniteLoadBeginEdgeOffset={ 250 }
                        loadingSpinnerDelegate={ this.elementInfiniteLoad() }
                        isInfiniteLoading={ isInfiniteLoading } 
                        elementHeight={ 113 } useWindowAsScrollContainer>
                        {
                            items.map((item) => {
                                return <div style={ { padding: '50px' } } key={ item.id }>{ item.text }</div>
                            })
                        }
                    </Infinite>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const list = state.record.list[state.record.cate] || {
        status: 'loading',
        items: [],
        isInfiniteLoading: false
    }
    return {
        cate: state.record.cate,
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