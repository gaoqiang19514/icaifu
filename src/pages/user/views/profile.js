import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import { Modal } from 'antd-mobile';
import styled from 'styled-components'

import bellIcon from './images/bell_icon.png';
import gearIcon from './images/gear_icon.png';
import cardSrc from './images/card_bg.png';

import { button, LayoutFlexBox, LayoutBoxBetCenter, LayoutPrimaryBox } from '@/common/commonStyled'

import { actions as authActions } from '@/common/auth/';
import { toggleView } from '../actions';
const alert = Modal.alert;

const LayoutBox = styled.div`
    margin-bottom: 0.5333rem;
`;

const LayoutHeader = styled.div`
    background: #fff;
    margin-bottom: 0.2667rem;
`;

const StyleButton = button.extend`
    color: #fff;
    font-size: 0.3467rem;
    display: inline-block;
    padding: 0.16rem 0.24rem;
    margin-left: 0.4rem;
    background-image: linear-gradient(90deg,#f94c50 0%,#f77366 100%),linear-gradient( #f7645b,#f7645b);
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75);
    border-radius: 0.1067rem;
`;

const StyleUsername = styled(Link)`
    display: flex;
    align-items: center;

    span{
        color: #1a1b1c;
        font-size: 0.45rem;
        margin-left: .1rem;
    }
`;

const StyleEntry = styled(Link)`
    margin-left: 0.4rem;
`;

const StyleCard = styled.div`
    color: #fff;
    padding: 0.6133rem;
    width: 9.6267rem;
    height: 5.3867rem;
    
    margin: auto;
    background: url(${cardSrc}) no-repeat center center;
    background-size: cover;

    .main{
        width: 4.9333rem;
    }

    .title{
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.32rem;
        margin-bottom: 0.24rem;
    }

    .assets{
        font-size: 0.8rem;
    }

    .frozen{
        margin-left: .1rem;
    }

    small{
        font-size: 0.48rem;
    }
`;

const StyleControl = styled.div`
    strong{
        font-size: 0.4rem;
    }

    .button{
        color: #fff;
        font-size: 0.3467rem;
        display: inline-block;
        padding: 0.16rem 0.24rem;
        margin-left: 0.4rem;
        background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #ff6364, #ff6364);
        box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249, 82, 83, 0.75);
        border-radius: 0.1067rem;
    }
`;

class Profile extends Component {
    state = {
        cash_use: '- -',
        p2p_assets: '- -',
        cash_frozen: '- -',
        total_assets: '- -',
        regular_receive_profit: '- -'
    };

    onRechargeHandle = () => {
        alert('Delete', 'Are you sure???', [
            { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
            { text: 'OK', onPress: () => {
                this.props.history.push('/recharge')
            } },
        ]);
    }
    
    render() {
        const { p2p_assets, cash_frozen, total_assets, regular_receive_profit, cash_use } = this.state;
        const { viewFlag, onToggleView } = this.props;

        return (
            <LayoutHeader>

                <LayoutPrimaryBox>
                    <LayoutBoxBetCenter>
                        <StyleUsername to="/userinfo">
                            <box-icon name='user-circle' color="1a1b1c"></box-icon>
                            <span>186****6666</span>
                        </StyleUsername>
                        <div>
                            <StyleEntry to="/setting">
                                <box-icon name='cog'></box-icon>
                            </StyleEntry>
                            <StyleEntry to="/stationLetter">
                                <box-icon name='bell'></box-icon>
                            </StyleEntry>
                        </div>
                    </LayoutBoxBetCenter>
                </LayoutPrimaryBox>

                <StyleCard>
                    <LayoutBox>
                        <div className="title">资产总额（元）</div>
                        <div className="assets">{ total_assets }</div>
                    </LayoutBox>
                    <LayoutBox>
                        <LayoutFlexBox>
                            <div className="main">
                                <div className="title">投资中的资金(元)</div>
                                <small>{ p2p_assets }</small>
                            </div>
                            <div>
                                <div className="title">待收总收益(元)</div>
                                <small>{ regular_receive_profit }</small>
                            </div>
                        </LayoutFlexBox>
                    </LayoutBox>
                    <div>
                        <span className="title">冻结资金(元)</span>
                        <span className="frozen">{ cash_frozen }</span>
                    </div>
                </StyleCard>

                <StyleControl>
                    <LayoutPrimaryBox>
                        <LayoutBoxBetCenter>
                            <div>
                                账户余额(元)：<strong>{ cash_use }</strong>
                            </div>
                            <div>
                                <StyleButton className="button" onClick={ this.onRechargeHandle }>充值</StyleButton>
                                <Link className="button" to="/withdraw">提现</Link>
                            </div>
                        </LayoutBoxBetCenter>
                    </LayoutPrimaryBox>
                </StyleControl>
                
            </LayoutHeader>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        viewFlag: state.user.viewFlag
    }
}

const mapDisaptchToProps = (disaptch) => {
    return {
        onLogout: () => {
            disaptch(authActions.logout());
        },
        onToggleView: () => {
            disaptch(toggleView());
        }
    }
}

export default connect(mapStateToProps, mapDisaptchToProps)(Profile);