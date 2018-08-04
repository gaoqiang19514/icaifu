import React, { Component } from 'react'
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Picker, Switch  } from 'antd-mobile';

import { buildPublicSign } from '@/api/api.js'
import { view as Skeleton } from '@/common/skeleton';

const LayoutWrap = styled.div`
    background: #fff;
`;
const LayoutBox = styled.div`
    display: flex;
    padding: 0.4rem;
`;
const LayoutBoxBet = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.4rem;
`;

const LayoutBox2 = styled.div`
    display: flex;
    flex-grow: 1;
`;

const StyleButton = styled.button`
    outline: none;
    border: 0;
    padding: 0;
    text-decoration: none;
    background: transparent;
    text-align: center;
`;

const LayoutButtonWrap = styled.div`
    padding: 0 0.4rem 0.4rem 0.4rem;
`;

const StyleFullButton = StyleButton.extend`
    height: 1.3333rem;
    line-height: 1.3333rem;
    width: 100%;
    background: #fff;
    font-size: 0.4rem;
    color: #898996;
    box-shadow: 0rem 0.08rem 0.2133rem 0rem rgba(204, 204, 204, 0.2);
`;

const LayoutFixed = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

const LayoutFixedSibling = styled.div`
    height: 1.7333rem;
`;

const StyleLink = styled(Link)`
    outline: none;
    border: 0;
    padding: 0;
    text-decoration: none;
    background: transparent;
    text-align: center;

    display: block;
    height: 1.3333rem;
    line-height: 1.3333rem;
    width: 100%;
    background: #fff;
    font-size: 0.4rem;
    color: #898996;
    box-shadow: 0rem 0.08rem 0.2133rem 0rem rgba(204, 204, 204, 0.2);
`;

const StyleTitle = styled.label`
    display: inline-block;
    width: 1.8667rem;
    font-size: 0.3733rem;
`;

const StyleInput = styled.input`
    flex-grow: 1;
    padding: 0;
    font-size: 0.3733rem;
    outline: none;
    border: 0;
`;
const StyleTextarea = styled.textarea`
    flex-grow: 1;
    font-size: 0.3733rem;
    padding: 0;
    outline: none;
    border: 0;
`;

const FixedContainer = ({ children }) => {
    return (
        <div>
            <LayoutFixedSibling />
            <LayoutFixed>
                { children }
            </LayoutFixed> 
        </div>
    )
}


const seasons = [
    [
      {
        label: '2013',
        value: '2013',
      },
      {
        label: '2014',
        value: '2014',
      },
    ],
    [
      {
        label: '春',
        value: '春',
      },
      {
        label: '夏',
        value: '夏',
      },
    ],
  ];
export default class extends Component {
    state = {
        loadFlag: false,
        list: [],
        checked: false
    }

    onSelectAddress = () => {

    }

    render() {
        return(
            <div>
                
                <LayoutWrap>
                    <LayoutBox>
                        <StyleTitle>收货人</StyleTitle>
                        <StyleInput placeholder="收货人" type="text"/>
                    </LayoutBox>
                    <LayoutBox>
                        <StyleTitle>联系电话</StyleTitle>
                        <StyleInput placeholder="联系电话" type="text"/>
                    </LayoutBox>
                    <LayoutBoxBet>
                        <StyleTitle>所在地区</StyleTitle>
                        <Picker
                            data={seasons}
                            cascade={false}
                            extra="请选择(可选)"
                            value={this.state.sValue}
                            onChange={v => this.setState({ sValue: v })}
                            onOk={v => this.setState({ sValue: v })}
                        >
                            <button onClick={ this.onSelectAddress }>选择地址</button>
                        </Picker>
                    </LayoutBoxBet>
                    <LayoutBox>
                        <StyleTitle>详细地址</StyleTitle>
                        <StyleTextarea placeholder="街道、楼牌号等"></StyleTextarea>
                    </LayoutBox>
                    <LayoutBoxBet>
                        <StyleTitle>设为默认</StyleTitle>
                        <Switch
                            checked={ this.state.checked }
                            onClick={ (v) => this.setState({ checked: v }) }
                            platform="ios"
                        />
                    </LayoutBoxBet>
                </LayoutWrap>




                <FixedContainer>
                    <LayoutButtonWrap>
                        <StyleFullButton>确定</StyleFullButton>
                    </LayoutButtonWrap>
                </FixedContainer>


            </div>

        )
    }
}
