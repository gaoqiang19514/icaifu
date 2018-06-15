import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import './style.scss'
import {toggleView} from '../actions'
import {actions as authActions} from '@/common/auth/'

const forge = require('node-forge');
const APP_KAY = '9wsez1o5cc2oetj6f6n8oh'

const sha1 = (value) => {
    const md = forge.md.sha1.create().update(value);
    return md.digest().toHex();
}

export const createAuthKey = (username, access_token, userid) => {

    let date = new Date().getTime();
    let uuid = '1111111111111111111111111111111111';

    let signParams = [
        'page_size=10',
        'page_no=1',
        `uuid=${uuid}`,
        `user_name=${username}`,
        'openid=p2p_ios',
        '_type=json',
        `access_token=${access_token}`,
        `userId=${userid}`,
        `userid=${userid}`
    ];

    signParams = signParams.sort()

    let signParamsString = signParams.join('&');
    let signParamsAndAppkey = signParamsString + APP_KAY;

    const md = forge.md.md5.create();
    md.update(signParamsAndAppkey);
    const sign = md.digest().toHex();

    return 'sign='+ sign + '&' + 'sign_type=' + 'MD5&' + signParamsString;
}

const createRandomNumStr = (num) => {
    let str = num.toString().replace('0.', '');
    return str.substr(0, 6)
}
class Profile extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const access_token = localStorage.getItem('token');
        const userid       = localStorage.getItem('userid');
        const salt         = createRandomNumStr(Math.random());
        let keyStr         = createAuthKey('15014095291', access_token, userid);

        axios.get('/my/user_assets?' + keyStr)
        .then((response) => {
            if(response.status === 200){
			}
        })
        .catch((error) => {
		})
		.finally(() => {
  
		});	
    }
    
    render() {
        return (
            <div className="l-box2">
                <div className="card">
                    <div>
                        <div>资产总额（元）</div>
                        <div>10000</div>
                    </div>
                    <div className="card__row">
                        <div className="card__cell">
                            <div>投资中的资金(元)</div>
                            <div>10</div>
                        </div>
                        <div className="card__cell">
                            <div>待收总收益(元)</div>
                            <div>10</div>
                        </div>
                    </div>
                    <div>
                        冻结资金(元)  134581.61
                    </div>
                </div>

                <div className="l-box1">
                    <div className="l-box1-main">
                        <div className="m-account-amount">
                            账户余额：<strong>100.00</strong>
                        </div>
                    </div>
                    <div className="l-box1-aside">
                        <Link to="/recharge">充值</Link>
                        <Link to="/withdraw">提现</Link>
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