import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import ReactLoading from 'react-loading';
import InfiniteScroll from 'react-infinite-scroller';

import MenuComponent from '@/common/menu/';
import { view as Skeleton } from '@/common/skeleton';
import { LayoutPrimaryBox, StyleReactLoading, LayoutBoxWrap } from '@/common/commonStyled';

const axiosInstance = axios.create();

// 添加响应拦截器
axiosInstance.interceptors.response.use(function (response) {
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


// Style

const StyleLink = styled.a`
    display: block;
    padding: 0.2667rem;
    margin-bottom: .4rem;
    border-radius: 3px;
    background: #fff;
`;

const StyleImage = styled.img`
    width: 8.6667rem;
    height: 3.4667rem;
`;

const StyleTtitle = styled.h2`
    font-weight: bold;
    font-size: 0.4rem;
`;

const StyleDesc = styled.div`
    color: #898996;
`;

const StyleDate = styled.div`
    font-size: 12px;
    color: #898996;
`;


const Item = ({ title, desc, pic_url, link_url, date_start, date_end }) => (
    <StyleLink href={ link_url }>
        <LayoutBoxWrap>
            <StyleImage src={ pic_url } alt={ title } />
        </LayoutBoxWrap>
        <LayoutBoxWrap>
            <StyleTtitle>{ title }</StyleTtitle>
        </LayoutBoxWrap>
        <LayoutBoxWrap>
            <StyleDesc>{ desc }</StyleDesc>
        </LayoutBoxWrap>
        <StyleDate>活动时间：{ date_start } 至 { date_end }</StyleDate>
    </StyleLink>
);

export default class extends Component {
    state = {
        hasMoreItems: true,
        list: [],
        ready: false,
        page: 1
    }

    componentDidMount() {
        this.loadNextPage(this.state.page)
    }

    loadNextPage = (page) => {
        axiosInstance.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=activity_list')
        .then((response) => {
            this.setState({
                ready: true,
                list: [
                    ...this.state.list, ...response.data.list
                ]
            });
        })
        .catch(() => {
        })
        .finally(() => {
        });
    }

    handleLoadMore = (page) => {
        this.loadNextPage(page)
    }
    
    render() {
        const { list, hasMoreItems, ready, page } = this.state;

        return (
            <div>
                <LayoutPrimaryBox>
                    <Skeleton type="activity" count={ 4 } ready={ ready }>
                        <InfiniteScroll
                            pageStart={ page }
                            loadMore={ this.handleLoadMore }
                            hasMore={ hasMoreItems }
                            loader={ <StyleReactLoading key={ 0 } height={ 30 } width={ 30 } type="spin" color="#444" /> }
                        >
                            <TransitionGroup>
                                {
                                    list.map((item) => (
                                        <CSSTransition
                                            key={ item.id }
                                            appear={ true }
                                            classNames="fadeUp"
                                            timeout={ 500 }
                                        >
                                            <Item 
                                                title={ item.title } 
                                                desc={ item.desc }
                                                pic_url={ item.pic_url }
                                                link_url={ item.link_url }
                                                date_start={ item.date_start }
                                                date_end={ item.date_end }
                                            />
                                        </CSSTransition>
                                    ))
                                }
                            </TransitionGroup>
                        </InfiniteScroll>
                    </Skeleton>
                </LayoutPrimaryBox>

                <MenuComponent />
            </div>
        )
    }
}