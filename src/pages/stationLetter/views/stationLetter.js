import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import axios from 'axios';

import { 
    LayoutFixedBottom, 
    LayoutFixedSibling, 
    LayoutFlexBox, 
    LayoutBoxBet,
    StyleBg, 
    StylePlaceHolder, 
    LayoutTittleBox, 
    LayoutPrimaryBox, 
    StylePrimaryButton,
    LayoutBoxWrap
} from '@/common/commonStyled';

import bell_icon from './images/bell_icon.png';
import gift_icon from './images/gift_icon.png';
import horn_icon from './images/horn_icon.png';
import money_icon from './images/money_icon.png';
import service_icon from './images/service_icon.png';

const LayoutMain = styled.div`
    flex: 1;
    margin-left: 0.3333rem;
    align-self: center;
`;

const LayoutItem = LayoutPrimaryBox.extend`
    position: relative;

    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        background: #eaeaea;
        left: 0.4rem;
        right: 0;
        transform: translateY(.5);
    }
    &:last-child::after{
        content: none;
    }
`;

const StyleIcon = styled.div`
    width: 1.3333rem;
    height: 1.3333rem;

    position: relative;

    background: ${prop => prop.bg ? prop.bg : "transparent"}  url(${prop => prop.url}) no-repeat center;
    background-size: 100%;
`;

const StyleTitle = styled.div`
    font-size: 0.4267rem;
    margin-bottom: 0.2667rem;
`;

const StyleSubTitle = styled.div`
    font-size: 0.3733rem;
    color: #acacac;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const StyleDate = styled.div`
    font-size: 0.32rem;
    color: #acacac;
`;

const StyleBubble = styled.div`
    position: absolute;
    top: -.25rem;
    right: -.25rem;
    color: #fff;
    text-align: center;
    border-radius: .25rem;
    min-width: 0.5rem;
    padding: 0 0.1rem;
    line-height: 0.5rem;
    background: #ff4936;
`;

const Item = ({ icon, title, subTitle, date, count, bg }) => {

    return(
        <LayoutItem>
            <LayoutFlexBox>
                <StyleIcon url={ icon } bg={ bg }>
                    { count ? <StyleBubble>{ count }</StyleBubble> : "" }
                </StyleIcon>
                <LayoutMain>
                    <LayoutBoxBet>
                        { subTitle ? <StyleTitle>{ title }</StyleTitle> : <StyleTitle style={ { margin: 0 } }>{ title }</StyleTitle> }
                        { date ? <StyleDate>{ date }</StyleDate> : "" }
                    </LayoutBoxBet>
                    { subTitle ? <StyleSubTitle>{ subTitle }</StyleSubTitle> : "" }
                </LayoutMain>
            </LayoutFlexBox>
        </LayoutItem>
    )
}



export default class extends Component {

    render() {
        return (
            <div>
                <StyleBg>
                    <Item icon={ money_icon } title="投资提醒" subTitle="您有100元优惠券即将过期，超值优..." date="10:00" count={ 0 } bg="#f5ac55"/>
                    <Item icon={ gift_icon } title="优惠活动" subTitle="您有100元优惠券即将过期，超值优..." date="10:00" count={ 99 } bg="#ff8362"/>
                    <Item icon={ money_icon } title="通知" subTitle="您有100元优惠券即将过期，超值优..." date="10:00" count={ 999 } bg="#4b98fe"/>

                    <Item icon={ horn_icon } title="官方公告"/>
                    <Item icon={ service_icon } title="联系客服"/>
                </StyleBg>
            </div>
        )
    }
}




