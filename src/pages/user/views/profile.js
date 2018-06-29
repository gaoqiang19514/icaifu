import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import swal from 'sweetalert';

import styles from './style.scss';
import bellIcon from './images/bell_icon.png';
import gearIcon from './images/gear_icon.png';

import { actions as authActions } from '@/common/auth/';

class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cash_use: '- -',
            p2p_assets: '- -',
            cash_frozen: '- -',
            total_assets: '- -',
            regular_receive_profit: '- -'
        };
    }

    componentWillMount() {
        axios.get('/my/user_assets')
        .then((response) => {
        })
        .catch((error) => {
		})
		.finally(() => {
		});
    }
    
    render() {
        const { p2p_assets, cash_frozen, total_assets, regular_receive_profit, cash_use } = this.state;

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
                        <Link className={styles.m_e_e__icon} to="/staionletter">
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
                        <Link className={styles.m_b} to="/recharge">充值</Link>
                        <Link className={styles.m_b} to="/withdraw">提现</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapDisaptchToProps = (disaptch) => {
    return {
        onLogout: () => {
            disaptch(authActions.logout());
        }
    }
}

export default connect(null, mapDisaptchToProps)(Profile);