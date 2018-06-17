import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import styles from './style.scss';
import bellIcon from './images/bell_icon.png';
import gearIcon from './images/gear_icon.png';

import {buildAuthSign} from '@/api/api';
import {actions as authActions} from '@/common/auth/';
import {toggleView} from '../actions';

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cash_use: '- -',
            p2p_assets: '- -',
            cash_frozen: '- -',
            total_assets: '- -',
            regular_receive_profit: '- -'
        };
    }

    componentDidMount() {
        const access_token = localStorage.getItem('token');
        const userid       = localStorage.getItem('userid');
        const keyStr       = buildAuthSign('15014095291', access_token, userid);

        // axios.get('/my/user_assets?' + keyStr)
        // .then((response) => {
        //     if(response.status === 200){
        //         this.setState({
        //             cash_use: response.data.item.cash_use,
        //             p2p_assets: response.data.item.p2p_assets,
        //             cash_frozen: response.data.item.cash_frozen,
        //             total_assets: response.data.item.total_assets,
        //             regular_receive_profit: response.data.item.regular_receive_profit
        //         })
		// 	}
        // })
        // .catch((error) => {
		// })
		// .finally(() => {
		// });	
    }
    
    render() {
        const {p2p_assets, cash_frozen, total_assets, regular_receive_profit, cash_use} = this.state;

        return (
            <div className={styles.l_hd}>

                <div className={styles.l_box5}>
                    <Link className={styles.m_profile} to="/recharge">
                        <div className={styles.m_profile__username}>186****6666</div>
                        <div>查看个人信息 ></div>
                    </Link>
                    <div className={styles.m_e_e}>
                        <Link className={styles.m_e_e__icon} to="/recharge">
                            <img src={gearIcon} alt="站内信"/>
                        </Link>
                        <Link className={styles.m_e_e__icon} to="/recharge">
                            <img src={bellIcon} alt="设置"/>
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
        onToggle: () => {
            disaptch(toggleView())
        },
        onLogout: () => {
            disaptch(authActions.logout())
        }
    }
}

export default connect(null, mapDisaptchToProps)(Profile)