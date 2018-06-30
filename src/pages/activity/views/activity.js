import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroller';

import MenuComponent from '@/common/menu/';
import { view as Skeleton } from '@/common/skeleton';



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

const LayoutWrap = styled.div`
    padding: 0.4rem;
`;

const LayoutBox = styled.div`
    margin-bottom: 0.2667rem;
`;

const LayoutItemBox = styled.div`
    margin-bottom: 0.4rem;
`;


// Style

const StyleItem = styled.div`
    padding: 0.2667rem;
    background: #fff;
    border-radius: 3px;
`;

const StyleTtitle = styled.h2`
    font-weight: bold;
    font-size: 0.4rem;
`;

const StyleDesc = styled.div`
    color: #898996;
`;

const StyleImage = styled.img`
    width: 8.6667rem;
    height: 3.4667rem;
`;

const StyleDate = styled.div`
    font-size: 12px;
    color: #898996;
`;

const StyleReactLoading = styled(ReactLoading)`
    margin: auto;
`;

const Item = ({ title, desc, pic_url, link_url, date_start, date_end }) => (
    <StyleItem>
        <a href={ link_url }>
            <LayoutBox>
                <StyleImage src={ pic_url } alt={ title } />
            </LayoutBox>
            <LayoutBox>
                <StyleTtitle>{ title }</StyleTtitle>
            </LayoutBox>
            <LayoutBox>
                <StyleDesc>{ desc }</StyleDesc>
            </LayoutBox>
            <StyleDate>活动时间：{ date_start } 至 { date_end }</StyleDate>
        </a>
    </StyleItem>
);

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasMoreItems: true,
            list: []
        }
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
        const { list } = this.state;

        return (
            <div>
                <LayoutWrap>

                    <InfiniteScroll
                        pageStart={ 0 }
                        loadMore={ this.handleLoadMore }
                        hasMore={ this.state.hasMoreItems }
                        loader={ <StyleReactLoading key={ 0 } height={ 30 } width={ 30 } type="spin" color="#444" /> }
                    >
                        <TransitionGroup>
                            {
                                list.map((item, index) => (
                                    <CSSTransition
                                        key={ item.id }
                                        appear={ true }
                                        classNames="fadeUp"
                                        timeout={ 500 }
                                    >
                                        <LayoutItemBox>
                                            <Item 
                                                title={ item.title } 
                                                desc={ item.desc }
                                                pic_url={ item.pic_url }
                                                link_url={ item.link_url }
                                                date_start={ item.date_start }
                                                date_end={ item.date_end }
                                            />
                                        </LayoutItemBox>
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                    </InfiniteScroll>
                </LayoutWrap>

                <MenuComponent />
            </div>
        )
    }
}