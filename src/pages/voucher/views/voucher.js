import React, {Component} from 'react'
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import uuid from 'uuid';

const LayoutPanel = styled.div`
    padding: 0.4rem;
`;

const LayoutItem = styled.div`
    padding: 30px;
    background: #fff;
    margin-bottom: 0.4rem;
    font-size: 0.4rem;
    font-weight: bold;
`;

const StyleList = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    background: #fff;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);
    }
`;

const StyleItem = styled.div`
    flex: 1;
    text-align: center;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    &.selected{
        color: #ff4949;
    }
`;

const Coupon = ({ title }) => {
    return(
        <LayoutItem>
            { title }
        </LayoutItem>
    )
}

// cash interestRates
const typeSchema = {
    cash: 1,
    interestRates: 2
};

// 未使用 unused 1 已使用 used 2 已过期 expired 3
const statusSchema = {
    unused: 1,
    used: 2,
    expired: 3
};

let type   = 'cash';
let status = 'unused';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            type: 'cash',
            status: 'unused',
            list: []
         };
    }

    componentWillMount() {
        this.getCouponList();
    }

    selectTypeHandle = (e) => {
        let type = e.target.getAttribute('data-type');
        this.setState({
            status: 'unused',
            type: type
        }, () => {
            this.getCouponList();
        });
    }

    selectStatusHandle = (e) => {
        let status = e.target.getAttribute('data-status');
        this.setState({
            status: status
        }, () => {
            this.getCouponList();
        });
    }

    getCouponList = () => {
        // 在这里发起请求 然后更新state.list
        let len = Math.random() * 20 + 1;
        let list = [];
        for(let i = 0; i < len; i++){
            let id = uuid();
            list.push({
                id: id,
                title: id
            });
        }
        this.setState({
            list: list
        });
    }
    
    render() {
        const { type, status, list } = this.state;

        return (
            <div>

                <StyleList>
                    <StyleItem className={ type === "cash" ? "selected" : "" } onClick={ this.selectTypeHandle } data-type="cash">代金券</StyleItem>
                    <StyleItem className={ type === "interestRates" ? "selected" : "" } onClick={ this.selectTypeHandle } data-type="interestRates">加息券</StyleItem>
                </StyleList>

                <StyleList>
                    <StyleItem className={ status === "unused" ? "selected" : "" } onClick={ this.selectStatusHandle } data-status="unused">未使用</StyleItem>
                    <StyleItem className={ status === "used" ? "selected" : "" } onClick={ this.selectStatusHandle } data-status="used">已使用</StyleItem>
                    <StyleItem className={ status === "expired" ? "selected" : "" } onClick={ this.selectStatusHandle } data-status="expired">已过期</StyleItem>
                </StyleList>

                <LayoutPanel>
                    {
                        list.map((item) => (
                            <Coupon key={ item.id } title={ item.title } />
                        ))
                    }
                </LayoutPanel>

            </div>
        )
    }
}