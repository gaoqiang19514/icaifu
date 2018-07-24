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

const Cates = {
    ALL: 'all',
    RECHARGE: 'recharge',
    WITHDRAW: 'withdraw',
    BUY: 'buy',
    PAYMENT: 'payment' 
};

class ExchangeRecord extends Component {

    handleLoadMore = (page) => {
        this.props.onFetchAsync(page, this.props.cate);
    }

    render() {
        const { list } = this.props;

        return (
            <div>
                <SelectedCate/>

                <InfiniteScroll
                    pageStart={ 0 }
                    loadMore={ this.handleLoadMore }
                    hasMore={ true }
                    loader={ <StyleReactLoading key={ 0 } height={ 30 } width={ 30 } type="spin" color="#444" /> }
                >
                    { 
                        list.map((item) => {
                            return <StylePlaceHolder key={ item.id }>{ item.text }</StylePlaceHolder>
                        }) 
                    }
                </InfiniteScroll>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { list } = state.record.list[state.record.cate] || {};
    return {
        cate: state.record.cate,
        list: list || []
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