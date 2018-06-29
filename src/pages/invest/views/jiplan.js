import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const CancelToken = axios.CancelToken;
let source = null;


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

const LayoutBoxHead = styled.div`
    margin-bottom: 0.4rem;
`;

const LayoutBoxBody = styled.div`
    font-size: 0.2933rem;
    display: flex;
    justify-content: space-between;
`;

const LayoutCellFirst = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 50%;
`;

const LayoutCellSecond = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 35%;
`;

const LayoutCellThird = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 15%;
`;

const LayoutLoadingWrap = styled.div`
    padding: 0.4rem 0;
`;


// Style

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

const StyleReactLoading = styled(ReactLoading)`
    margin: auto;
`;

const Item = ({ id, title, rate, time_limit, gift, total, percent }) => {
    return (
        <Link to={{ pathname: `/invest/${id}`, state: { type: 'jjh' } }}>
            <LayoutBox>

                <LayoutBoxHead>
                    <StyleTitle>{ title }</StyleTitle>
                </LayoutBoxHead>

                <LayoutBoxBody>
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
                </LayoutBoxBody>
                
            </LayoutBox>
        </Link>
    )
}

export default class extends Component {

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
		axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=product_jiplan', {
            cancelToken: source.token
        })
        .then((response) => {
            this.setState({
                hasMoreItems: false,
                list: [
                    ...this.state.list,
                    ...response.data.list
                ]
            });
        })
        .catch((error) => {
		})
		.finally(() => {
		});
	}

    render() {
        const { list, hasMoreItems } = this.state;

        return(
            <LayoutWrap>
                <InfiniteScroll
                    pageStart={ 0 }
                    loadMore={ this.loadNextPage }
                    hasMore={ hasMoreItems }
                    loader={ <LayoutLoadingWrap key={ 0 }><StyleReactLoading height={ 30 } width={ 30 } type="spin" color="#444" /></LayoutLoadingWrap> }
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
        )
    }
}