import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import BScroll from 'better-scroll';

import { actions as loadingActions } from '@/common/loading';
import { buildAuthSign } from '@/api/api';

import './style.css';

const LayoutBox = styled.div`
    margin-bottom: 0.2667rem;
`;
const LayoutNavItem = styled.div`
    color: #898996;
    font-size: 0.4rem;
    padding: 0.4rem 0.6667rem;
`;
const LayoutItem = styled.div`
    margin-bottom: 0.2667rem;
    background: #fff;
    padding: 0.4rem;
`;

const Title = styled.h2`
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
`;
const SubTitle = styled.h3`
    color: #898996;
    font-weight: normal;
    font-size: 0.3733rem;
    line-height: 1.7;
    margin-bottom: 0.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;
const Date = styled.div`
    color: #898996;
    text-align: right;
    font-size: 0.3733rem;
`;
const Guid = styled.div`
    color: #898996;
    margin-bottom: 0.2rem;
    font-size: 0.3733rem;
`;

class ExchangeRecord extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadFlag: false,
            list: []
        };
    }

    componentWillMount() {
        this.props.onShowLoading();

        axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=exchange_record')
        .then((response) => {
            if(response.status === 200){
                this.setState({
                    list: response.data.result
                });
            }
        })
        .catch((error) => {
        })
        .finally(() => {
            this.props.onHideLoading();
        });
    }

    componentDidMount() {
        const scroll = new BScroll('.wrapper', {
            scrollX: true
        });
    }

    render() {
        const { list } = this.state;
        return (
            <div>
                
                <LayoutBox>
                    <div className="wrapper">
                        <div className="scroller">
                            <LayoutNavItem>全部</LayoutNavItem>
                            <LayoutNavItem>充值</LayoutNavItem>
                            <LayoutNavItem>提现</LayoutNavItem>
                            <LayoutNavItem>购买</LayoutNavItem>
                            <LayoutNavItem>回款</LayoutNavItem>
                        </div>
                    </div>
                    <div className="wrapper-sibling"></div>
                </LayoutBox>

                <LayoutBox>
                    {
                        list.map((item) => {
                            return(
                                <LayoutItem key={ item.id }>
                                    <Title>{ item.title }</Title>
                                    <SubTitle>{ item.subtitle }</SubTitle>
                                    <Guid>{ item.guid }</Guid>
                                    <Date>{ item.date }</Date>
                                </LayoutItem>
                            )
                        })
                    }
                </LayoutBox>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowLoading: () => {
            dispatch(loadingActions.showLoading())
        },
        onHideLoading: () => {
            dispatch(loadingActions.hideLoading())
        }
    }
}

export default connect(null, mapDispatchToProps)(ExchangeRecord)