import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

import style from './style.scss'

import {toggleView} from '../actions'
import {actions as authActions} from './../../../common/auth/'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            total: 111110,
            earnings: 10,
            balance: 20
        }
        this.toggleMoneyView = this.toggleMoneyView.bind(this)

        // axios.get('/users').then((response) => {
        //     if(response.status === 200){
         
        //     }
        // }).catch((error) => {
        //     this.props.onLogout();
        // });

    }

    toggleMoneyView() {
        this.props.onToggle()
    }

    render() {

        let {total, earnings, balance} = this.state

        if(this.props.numFlag){
            total = '****'
            earnings = '****'
            balance = '****'
        }

        return (
            <div className={style.profile}>
                <div className={style.name}>
                    user name
                </div>

                <button className={style.toggle} onClick={this.toggleMoneyView}>隐藏金额</button>
                <div className={style.total}>
                    <p className={style.num}>{total}</p>
                    <p className={style.title}>资产总额（元）</p>
                </div>
    
                <div className={style.money}>
                    <div className={style.cell}>
                        <p className={style.num}>{earnings}</p>
                        <p>累计收益</p>
                    </div>
                    <div className={style.cell}>
                        <p className={style.num}>{balance}</p>
                        <p>可用余额</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numFlag: state.user
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

export default connect(mapStateToProps, mapDisaptchToProps)(Profile)