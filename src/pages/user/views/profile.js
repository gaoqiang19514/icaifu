import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';


import './style.scss'

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
        
        axios.get('/users')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

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
            <div>
                <div>
                    name
                </div>
                
                <div className="card">
                    <div>
                        <p>资产总额（元）</p>
                        <p>{total}</p>
                    </div>
        
                    <div className="card__row">
                        <div className="card__cell">
                            <p>投资中的资金(元)</p>
                            <p>{earnings}</p>
                        </div>
                        <div className="card__cell">
                            <p>待收总收益(元)</p>
                            <p>{balance}</p>
                        </div>
                    </div>

                    <div>
                        冻结资金(元)  134581.61
                    </div>
                </div>

                <button onClick={this.toggleMoneyView}>隐藏金额</button>

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