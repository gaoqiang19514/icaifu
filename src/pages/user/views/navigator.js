import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import icon_doc from './images/doc_icon.png';
import icon_record from './images/record_icon.png';
import icon_calendar from './images/calendar_icon.png';

// Layout

const LayoutBox = styled.div`
    margin-bottom: 0.2667rem;
`;

const LayoutBoxCell = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

// Style

const StyleBoxWrap = styled.div`
    background: #fff;
`;

const StyleTitle = styled.div`
    font-size: 0.4267rem;
`;

const StyleBoldTitle = styled.div`
    font-weight: bold;
    font-size: 0.4267rem;
`;

const StyleSubTitle = styled.div`
    color: #898996;
    font-size: 0.2667rem;
    padding-top: 0.2667rem;
`;

const StyledFullLink = styled(Link)`
    position: relative;
    display: block;
    padding: 0.5333rem 0.4rem 0.5333rem 1.6267rem;
    &:after {
        content: '';
        position: absolute;
        left: 1.6rem;
        right: 0;
        bottom: 0;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);
    }
`;

const StyledLink = styled(Link)`
    position: relative;
    padding: 0.5333rem 0.6667rem 0.6667rem 0.6667rem;
    width: 50%;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);
    }
    &:nth-child(2n-1)::after{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 1px;
        background: #eaeaea;
        transform: scaleX(.5);
    }
`;

const StyleIcon = styled.span`
    position: absolute;
    top: 0.27rem;
    left: .4rem;
    width: 0.9467rem;
    height: 0.9733rem;
    background-size: cover;
`;

const StyleIconDoc = StyleIcon.extend`
    background-image: url(${icon_doc});
`;

const StyleIconRecord = StyleIcon.extend`
    background-image: url(${icon_record});
`;

const StyleIconCalendar = StyleIcon.extend`
    background-image: url(${icon_calendar});
`;


export default () => {
    return (
        <div>

            <StyleBoxWrap>
                <LayoutBox>
                    <StyledFullLink to="/exchangeRecord">
                        <StyleIconDoc />
                        <StyleTitle>交易记录</StyleTitle>
                    </StyledFullLink>
                    <StyledFullLink to="/investRecord">
                        <StyleIconRecord />
                        <StyleTitle>投资记录</StyleTitle>
                    </StyledFullLink>
                    <StyledFullLink to="/voucher">
                        <StyleIconCalendar />
                        <StyleTitle>回款计划</StyleTitle>
                    </StyledFullLink>
                </LayoutBox>
            </StyleBoxWrap>

            <StyleBoxWrap>
                <LayoutBox>
                    <LayoutBoxCell>
                        <StyledLink to="/recommend">
                            <StyleBoldTitle>推荐</StyleBoldTitle>
                            <StyleSubTitle>我的推荐</StyleSubTitle>
                        </StyledLink>
                        <StyledLink to="/voucher">
                            <StyleBoldTitle>优惠券</StyleBoldTitle>
                            <StyleSubTitle>代金券 加息券</StyleSubTitle>
                        </StyledLink>
                        <StyledLink to="/cash">
                            <StyleBoldTitle>现金奖励</StyleBoldTitle>
                            <StyleSubTitle>我的现金奖励</StyleSubTitle>
                        </StyledLink>
                    </LayoutBoxCell>
                </LayoutBox>
            </StyleBoxWrap>

        </div>
    )
}