import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './style.scss'
import Coupon from './coupon.js'

class Buy extends Component {

    constructor(props) {
        super(props)

        this.state = {
            CFCode: '',
            money: 0,
            rate: 0.07,
            days: 45,
            expected_revenue: 0,
            total: 0,

            viewCashModalFlag: false,
            viewRateModalFlag: false,

            couponList: [],
            cashChooseList: [],
            cashList: [
                { cash: 300, expires: new Date().getTime(), checked: false },
                { cash: 500, expires: new Date().getTime(), checked: false },
                { cash: 700, expires: new Date().getTime(), checked: false }
            ],
            rateChooseList: [],
            rateList: [
                { rate: 0.03, expires: new Date().getTime(), checked: false },
                { rate: 0.05, expires: new Date().getTime(), checked: false },
                { rate: 0.07, expires: new Date().getTime(), checked: false }
            ]
        }

        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.showModal = this.showModal.bind(this)
        this.chooseCoupon = this.chooseCoupon.bind(this)
    }

    onChangeHandle(type, e) {
        switch(type){
            case 'cfcode':
                this.setState({
                    CFCode: e.target.value
                })
                break;
            case 'money':
                this.setState({
                    money: parseInt(e.target.value) || 0
                })
                break;
            default:
        }
    }

    showModal(type) {
        switch(type){
            case 'cash':
                this.setState({
                    viewCashModalFlag: !this.state.viewCashModalFlag
                })
                break;
            case 'rate':
                this.setState({
                    viewRateModalFlag: !this.state.viewRateModalFlag
                })
                break;
            default:
        }
    }

    // 用户点选票券的事件处理逻辑
    chooseCoupon(type, item, index) {
        switch(type){
            case 'cash':
                const newCashList = this.state.cashList.map(function(item, _index){
                    if(index === _index){
                        return {
                            ...item,
                            checked: !item.checked
                        }
                    }

                    return item
                });

                this.setState({
                    cashList: newCashList
                }, () => {
                    // console.log(this.state.cashList)
                })
                break;
            case 'rate':
                const newRateList = this.state.rateList.map(function(item, _index){
                    if(index === _index){
                        return {
                            ...item,
                            checked: !item.checked
                        }
                    }

                    return item
                });

                this.setState({
                    rateList: newRateList
                }, () => {
                    // console.log(this.state.rateList)
                })
                break;
            default:
        }
    }

    render() {
        let disabled = true
        let { CFCode, money, expected_revenue, rate, days, total, rateList, cashList, viewRateModalFlag, viewCashModalFlag, couponList, rateChooseList, cashChooseList } = this.state

        total = money

        let chooseCashLen = 0
        let chooseRateLen = 0
        let rateLength = rateList.length
        let cashLength = cashList.length

        let totalRate = 0
        let totalCash = 0

        // 计算加息券 和 代金券
        if(money > 100){
            rateList.map(function(item, index) {
                // 收益率要加上加息券
                if(item.checked){
                    chooseRateLen++
                    totalRate += item.rate
                }
            })

            cashList.map(function(item, index) {
                // 投资金额要加上代金券
                if(item.checked){
                    chooseCashLen++
                    totalCash += parseInt(item.cash)
                }
            })

            rate += totalRate 
            total += totalCash
        }

        if(CFCode && (CFCode.length > 8) && !isNaN(money) && (money > 100)){
            disabled = false
        }

        if(money > 100){
            expected_revenue = (money * rate / 365 * days).toFixed(2)
        }

        let rateDisplay = {
            display: viewRateModalFlag ? "block" : "none"
        }

        let cashDisplay = {
            display: viewCashModalFlag ? "block" : "none"
        }

        return (
            <div>

                <div className={`${styles.l_box} ${styles.u_t1}`}>
                    <div className={`${styles.l_box_in} ${styles.u_c_g} ${styles.u_m_b}`}>
                        <span>剩余可购(元)</span>
                        <span>预期收益(元)</span>
                    </div>
                    <div className={`${styles.l_box_in} ${styles.u_m_b_c}`}>
                        <span>894,531</span>
                        <span>129.45+499</span>
                    </div>
                    <div className={styles.u_m_b_c}>
                        <div className={styles.l_box_in}>
                            <input className={styles.m_input} type="text" placeholder="100元起投"/>
                            <button className={styles.m_button}>余额全投</button>
                        </div>
                    </div>
                    <div className={`${styles.l_box_in} ${styles.u_c_g}`}>
                        <span>可用余额0.00元</span>
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.u_t1}`}>
                    <div className={styles.l_box_in}>
                        <span>优惠券</span>
                        <span>无可用</span>
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.u_t1}`}>
                    <div className={styles.l_box_in}>
                        <span>实际支付</span>
                        <span>9850元</span>
                    </div>
                </div>












                {/*代金券*/}
                <div style={cashDisplay}>
                    <Coupon title="代金券" type="cash" cashList={cashList} chooseCoupon={this.chooseCoupon} showModal={this.showModal} />
                </div>

                {/*加息券*/}
                <div style={rateDisplay}>
                    <Coupon title="加息券" type="rate" cashList={rateList} chooseCoupon={this.chooseCoupon} showModal={this.showModal} />
                </div>

                <div>
                    <span>账户余额：<strong>0.00</strong>元</span>
                    <Link to="/recharge">充值</Link>
                </div>
                <div>
                    <div>
                        <label>CF码</label>
                        <input onChange={(e) => {
                            this.onChangeHandle('cfcode', e)
                        }} type="text" value={CFCode} placeholder="请输入CF码（没有可不填）" />
                    </div>
                    <div>
                        <label>投资金额</label>
                        <input onChange={(e) => {
                            this.onChangeHandle('money', e)
                        }} type="text" value={money} placeholder="请输入投资金额，100元起投" />
                    </div>
                    <div>
                        <label>预期收益</label>
                        <span>{expected_revenue}元</span>
                    </div>
                    <div>
                        <label>
                            代金券：
                            {
                                (chooseCashLen > 0) ? (<span>{totalCash}元代金券</span>) : (<span>{cashLength}张代金券可用</span>)
                            }
                        </label>
                        <span onClick={() => {
                            this.showModal('cash')
                        }}>请选择</span>
                    </div>
                    <div>
                        <label>
                            加息券：
                            {
                                (chooseRateLen > 0) ? (<span>加息{totalRate}%</span>) : (<span>{rateLength}张加息券可用</span>)
                            }
                        </label>
                        <span onClick={() => {
                            this.showModal('rate')
                        }}>请选择</span>
                    </div>
                    <div>
                        <label>实际支付</label>
                        <span>{total}元</span>
                    </div>
                </div>
                <div>
                    <button disabled={disabled}>立即投资</button>
                </div>
            </div>
        )
    }

}

export default Buy