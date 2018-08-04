import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import uuid from 'uuid';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from 'react-loading';

import { LayoutPrimaryBox, LayoutSecondBox, LayoutBoxBet, LayoutCellFirst, LayoutCellSecond, LayoutCellThird, LayoutBoxVerticalEnd, LayoutBoxWrap, StyleBg, StyleReactLoading, LayoutBoxWrapSec } from '@/common/commonStyled';
import { view as Skeleton } from '@/common/skeleton';

// Layout

const LayoutWrap = styled.div`
    a:last-child > div:after{
        content: none;
    }
`;

const LayoutBox = styled.div`
    position: relative;
    padding: 0.4rem 0 0.5333rem 0;
    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);  
    }
`;


// Style

const StyleBoxBody = styled.div`
    font-size: 0.2933rem;
`;

const StyleTitle = styled.h2`
    font-size: 0.3467rem;
    font-weight: bold;
`;

const StyleText = styled.div`
    color: #898996;
`;

const StyleSubText = styled.div`
    font-size: 0.4rem;
`;

const StyleSecondText = styled.strong`
    font-size: 0.64rem;
`;

const LayoutValue = styled.div`
    display: flex;
    align-items: flex-end;
    height: .8rem;
    margin-bottom: 0.2667rem;
`;

const StylePercent = styled.div`
    height: 3px;
    background: #eceff8;
`;

const StylePercentBar = styled.div`
    height: 100%;
    background: #ff5151;
`;

const StylePlus = styled.span`
    font-size: 0.3467rem;
    padding: 0 0.1333rem;
`;


const Item = ({ id, title, rate, time_limit, gift, total, percent }) => {
    return(
        <Link to={{ pathname: `/invest/${id}`, state: { type: 'buy' } }}>
            <LayoutBox>

                <LayoutBoxWrapSec>
                    <StyleTitle>{ title }</StyleTitle>
                </LayoutBoxWrapSec>

                <StyleBoxBody>
                    <LayoutBoxBet>
                        <LayoutCellFirst>
                            <LayoutValue>
                                <StyleSecondText>{ rate }%</StyleSecondText>
                                <StylePlus>+</StylePlus>
                                <StyleSubText>{ gift }</StyleSubText>
                            </LayoutValue>
                            <StyleText>预期年化利率</StyleText>
                        </LayoutCellFirst>
                        <LayoutCellSecond>
                            <LayoutValue>
                                <StyleSubText>期限{ time_limit }天</StyleSubText>
                            </LayoutValue>
                            <StyleText>投资金额{ total }元</StyleText>
                        </LayoutCellSecond>
                        <LayoutCellThird>
                            <LayoutValue>{ percent }%</LayoutValue>
                            <StylePercent>
                                <StylePercentBar style={ {width: `${ percent }%`} }></StylePercentBar>
                            </StylePercent>
                        </LayoutCellThird>
                    </LayoutBoxBet>
                </StyleBoxBody>
                
            </LayoutBox>
        </Link>
    )
}

export default class extends Component {
    state = {
        ready: false,
        hasMoreItems: true,
        list: [],
        page: 0
    }

    componentDidMount() {
        this.loadNextPage(0);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.type !== this.props.type){
            this.setState({
                ready: false,
                list: [],
                page: 0
            }, () => {
                this.loadNextPage(this.state.page)
            })
        }
    }

	loadNextPage = () => {
        
        axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=product_ienjoy')
        .then((response) => {
            this.setState({
                page: this.state.page + 1,
                list: [
                    ...this.state.list,
                    ...response.data.list
                ]
            });
        })
        .catch((error) => {
		})
		.finally(() => {
            if(!this.state.ready){
                this.setState({ ready: true });
            }
		});	
    }
    
    render() {
        const { ready, list, hasMoreItems, page } = this.state;

        return(
            <Skeleton type="product" count={ 4 } ready={ ready }>
                <LayoutWrap>
                    <InfiniteScroll
                        pageStart={ page }
                        loadMore={ this.loadNextPage }
                        hasMore={ hasMoreItems }
                        loader={ <StyleReactLoading key={ 0 } height={ 30 } width={ 30 } type="spin" color="#444" /> }
                    >
                        {
                            list.map((item) => (
                                <Item 
                                    id={ item.id } 
                                    key={ item.id }
                                    title={ item.title }
                                    time_limit={ item.time_limit }
                                    rate={ item.rate }
                                    gift={ item.gift }
                                    total={ item.total }
                                    percent={ item.percent }
                                />
                            ))
                        }
                    </InfiniteScroll>
                </LayoutWrap> 
            </Skeleton> 
        )
    }
}