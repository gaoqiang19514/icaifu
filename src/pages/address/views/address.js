import React, { Component } from 'react'
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { buildPublicSign } from '@/api/api.js'
import { view as Skeleton } from '@/common/skeleton';

const LayoutListWrap = styled.div`
    padding-bottom: 0.4rem;
`;

const LayoutItem = styled.div`
    padding: 0.4rem 0.4rem 0 0.4rem;
`;

const LayoutItemWrap = styled.div`
    background: #fff;
    border-radius: 3px;
    box-shadow: 0px 6px 16px 0px 
		rgba(204, 204, 204, 0.2);
`;

const LayoutWrap = styled.div`
    padding: 0.2667rem;
`;

const LayoutBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LayoutBox2 = styled.div`
    margin-bottom: 0.4667rem;
`;

const StyleUser = styled.div`
    font-size: 0.4rem;
`;
const StyleTel = styled.div`
    font-size: 0.3733rem;
    color: #898996;
`;
const StyleAddress = styled.div`
    font-size: 0.32rem;
    color: #898996;
`;

const StyleLine = styled.div`
    height: 1px;
    transform: scaleY(.5);
    background: #eaeaea;
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


const Item = () => {
    return(
        <LayoutItem>
            <LayoutItemWrap>
                <LayoutWrap>
                    <LayoutBox2>
                        <LayoutBox>
                            <StyleUser>张三</StyleUser>
                            <StyleTel>138****2030</StyleTel>
                        </LayoutBox>
                    </LayoutBox2>
                    <StyleAddress>广东深圳市南山区前海路海路23号</StyleAddress>
                </LayoutWrap>

                <StyleLine />
                
                <LayoutWrap>
                    <LayoutBox>
                        <label>
                            <StyleButton>默认地址</StyleButton>
                        </label>
                        <div>
                            <StyleButton>编辑</StyleButton>
                            <StyleButton>删除</StyleButton>
                        </div>
                    </LayoutBox>
                </LayoutWrap>
            </LayoutItemWrap>
        </LayoutItem>
    )
}

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loadFlag: false,
            list: []
        };
    }

    render() {
        return(
            <div>

                <LayoutListWrap>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </LayoutListWrap>

                <FixedContainer>
                    <LayoutButtonWrap>
                        <StyleLink to="/address/add">新建地址</StyleLink>
                    </LayoutButtonWrap>
                </FixedContainer>

            </div>

        )
    }
}
