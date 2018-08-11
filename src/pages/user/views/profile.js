import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import { Modal } from 'antd-mobile';
import styled from 'styled-components'

import styles from './style.scss';
import bellIcon from './images/bell_icon.png';
import gearIcon from './images/gear_icon.png';

import { button } from '@/common/commonStyled'

import { actions as authActions } from '@/common/auth/';
import { toggleView } from '../actions';
const alert = Modal.alert;


const StyleButton = button.extend`
    color: #fff;
    font-size: 0.3467rem;
    display: inline-block;
    padding: 0.16rem 0.24rem;
    margin-left: 0.4rem;
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #ff6364, #ff6364);
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249, 82, 83, 0.75);
    border-radius: 0.1067rem;
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
            <div className={styles.l_hd}>

                <div className={styles.l_box5}>
                    <Link className={styles.m_profile} to="/userinfo">
                        <div className={styles.m_profile__username}>186****6666</div>
                        <div>查看个人信息 ></div>
                    </Link>
                    <div className={styles.m_e_e}>
                        <Link className={styles.m_e_e__icon} to="/setting">
                            <img src={gearIcon} alt="设置"/>
                        </Link>
                        <Link className={styles.m_e_e__icon} to="/stationLetter">
                            <img src={bellIcon} alt="站内信"/>
                        </Link>
                    </div>
                </div>

                <div className={styles.m_card}>
                    <div className={styles.l_box1}>
                        <div className={styles.m_title}>资产总额（元）</div>
                        <div className={styles.m_p_v}>{total_assets}</div>
                    </div>
                    <div className={styles.l_box2}>
                        <div style={{width: '4.9333rem'}}>
                            <div className={styles.m_title}>投资中的资金(元)</div>
                            <div className={styles.m_s_v}>{p2p_assets}</div>
                        </div>
                        <div>
                            <div className={styles.m_title}>待收总收益(元)</div>
                            <div className={styles.m_s_v}>{regular_receive_profit}</div>
                        </div>
                    </div>
                    <div>
                        <span className={styles.m_title}>冻结资金(元)</span>{cash_frozen}
                    </div>
                </div>

                <div className={styles.l_box3}>
                    <div>
                        <div className={styles.m_a_a}>
                            账户余额(元)： <strong>{cash_use}</strong>
                        </div>
                    </div>
                    <div>
                        <StyleButton className={styles.m_b} onClick={ this.onRechargeHandle } >充值</StyleButton>
                        <Link className={styles.m_b} to="/withdraw">提现</Link>
                    </div>
                </div>
                
            </div>
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