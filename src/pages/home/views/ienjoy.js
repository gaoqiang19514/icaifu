import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { view as Skeleton } from '@/common/skeleton';

const LayoutCell_1 = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 50%;
`;
const LayoutCell_2 = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 35%;
`;
const LayoutCell_3 = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 15%;
`;

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

const StyleTitle = styled.h2`
    font-size: 0.3467rem;
	color: #1a1b1c;
`;

const LayoutValue = styled.div`
    display: flex;
    align-items: flex-end;
    height: .8rem;
    margin-bottom: 0.2667rem;
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

const Item = ({ pro_name, match, id, percent, timeLimit, interest_rate, gift, full }) => {
    if(gift){gift = `+${gift}%`}

    return(
        <Link to={{ pathname: `/invest/${id}`, state: { type: 'buy' } }}>
            <LayoutBox>
                <LayoutBoxHead>
                    <StyleTitle>{pro_name}</StyleTitle>
                </LayoutBoxHead>
                <LayoutBoxBody>
                    <LayoutCell_1>
                        <LayoutValue>
                            <StyleSecondText>{interest_rate}%</StyleSecondText>
                            <StyleSubText>{gift}</StyleSubText>
                        </LayoutValue>
                        <StyleText>预期年化利率</StyleText>
                    </LayoutCell_1>
                    <LayoutCell_2>
                        <LayoutValue>
                            <StyleSubText>期限{timeLimit}天</StyleSubText>
                        </LayoutValue>
                        <StyleText>投资金额{full}元</StyleText>
                    </LayoutCell_2>
                    <LayoutCell_3>
                        <LayoutValue>
                            {percent}%
                        </LayoutValue>
                        <StylePercent>
                            <StylePercentBar style={{width: `${percent}%`}}></StylePercentBar>
                        </StylePercent>
                    </LayoutCell_3>
                </LayoutBoxBody>
            </LayoutBox>
        </Link>
    )
}

export default ({data, match, ready}) => (
    <LayoutWrap>
        <Skeleton count={4} ready={ready}>
            {
                data.map((item, index) => (
                    <Item 
                        id={ item.pro_id } 
                        pro_name={ item.pro_name }
                        match={ match } 
                        timeLimit={ item.time_limit }
                        interest_rate={ item.interest_rate }
                        gift={ item.gift }
                        full={ item.full }
                        percent={ item.percent }
                        key={ item.pro_id }
                    />
                ))
            }
        </Skeleton>
    </LayoutWrap>  
)