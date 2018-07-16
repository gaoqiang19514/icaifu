import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

import { LayoutPrimaryBox, LayoutSecondBox, LayoutBoxBet, LayoutBoxVerticalEnd, LayoutCellFirst, LayoutCellSecond, LayoutCellThird, LayoutBoxWrap, StyleBg, StyleReactLoading, LayoutBoxWrapSec } from '@/common/commonStyled';

import { view as Skeleton } from '@/common/skeleton';

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
const StyleValue = LayoutBoxVerticalEnd.extend`
    height: .8rem;
    margin-bottom: 0.2667rem;
`;

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
    return (
        <Link to={{ pathname: `/invest/${id}`, state: { type: 'jjh' } }}>
            <LayoutBox>

                <LayoutBoxWrapSec>
                    <StyleTitle>{ title }</StyleTitle>
                </LayoutBoxWrapSec>

                <StyleBoxBody>
                    <LayoutBoxBet>
                        <LayoutCellFirst>
                            <StyleValue>
                                <StyleSecondText>{ rate }%</StyleSecondText>
                                <StylePlus>+</StylePlus>
                                <StyleSubText>{ gift }</StyleSubText>
                            </StyleValue>
                            <StyleText>预期年化利率</StyleText>
                        </LayoutCellFirst>
                        <LayoutCellSecond>
                            <StyleValue>
                                <StyleSubText>期限{ time_limit }天</StyleSubText>
                            </StyleValue>
                            <StyleText>投资金额{ total }元</StyleText>
                        </LayoutCellSecond>
                        <LayoutCellThird>
                            <StyleValue>{ percent }%</StyleValue>
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
        list: []
    }

    componentDidMount() {
		axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=product_jiplan')
        .then((response) => {
            this.setState({
                ready: true,
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
        const { ready, list } = this.state;

        return(
            <Skeleton type="product" count={ 3 } ready={ ready }>
                <LayoutWrap>
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
                </LayoutWrap>
            </Skeleton>
        )
    }
}