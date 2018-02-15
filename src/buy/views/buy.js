import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

import Head from './head.js'

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
                <Head />

                {/*代金券*/}
                <div style={cashDisplay}>
                    <div className={style.modal}>
                        <div className="list">
                            {
                                cashList.map(function(item,index) {
                                    return (
                                        <div key={index} className={style._item}>
                                            <div className={style._title}>代金券<span>编号:78451241254</span></div>
                                            <div>
                                                <div>
                                                    <ul>
                                                        <li>单笔投资>0.00元</li>
                                                        <li>期限大于等于2个月</li>
                                                        <li>除极计划外其余产品可用</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div>{item.cash}元</div>
                                                    <div>
                                                        <button  onClick={() => { this.chooseCoupon('cash', item, index)} }>{ item.checked ? '取消' : '选择'}</button>
                                                    </div>
                                                </div>    
                                            </div>
                                            <div>
                                                <p>有效期至：2017-09-16 00:00:00</p>
                                            </div>
                                        </div>
                                    )
                                }, this)
                            }
                        </div>

                        <div className={style.box}>
                            <button onClick={() => {
                                this.showModal('cash')
                            }}>确定</button>
                        </div>
                    </div>
                </div>

                {/*加息券*/}
                <div style={rateDisplay}>
                    <div className={style.modal}>
                        <div className="list">
                            {
                                rateList.map(function(item, index) {
                                    let rate = (item.rate * 100).toFixed(2)
                                    return (
                                        <div key={index} className={style._item}>
                                            <div className={style._title}>加息券<span>编号:78451241254</span></div>
                                            <div>
                                                <div>
                                                    <ul>
                                                        <li>单笔投资>0.00元</li>
                                                        <li>期限大于等于2个月</li>
                                                        <li>除极计划外其余产品可用</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <div>{rate}%</div>
                                                    <div>
                                                        <button onClick={() => { this.chooseCoupon('rate', item, index)} }>{item.checked ? '取消' : '选择'}</button>
                                                    </div>
                                                </div>    
                                            </div>
                                            <div>
                                                <p>有效期至：2017-09-16 00:00:00</p>
                                            </div>
                                        </div>
                                    )
                                }, this)
                            }
                        </div>

                        <div className={style.box}>
                            <button onClick={() => {
                                this.showModal('rate')
                            }}>确定</button>
                        </div>
                    </div>
                </div>

                <div className={style.balance}>
                    <span>账户余额：<strong>0.00</strong>元</span>
                    <Link to="/recharge">充值</Link>
                </div>
                <div className={style.list}>
                    <div className={style.item}>
                        <label>CF码</label>
                        <input onChange={(e) => {
                            this.onChangeHandle('cfcode', e)
                        }} type="text" value={CFCode} placeholder="请输入CF码（没有可不填）" />
                    </div>
                    <div className={style.item}>
                        <label>投资金额</label>
                        <input onChange={(e) => {
                            this.onChangeHandle('money', e)
                        }} type="text" value={money} placeholder="请输入投资金额，100元起投" />
                    </div>
                    <div className={style.item}>
                        <label>预期收益</label>
                        <span>{expected_revenue}元</span>
                    </div>
                    <div className={style.item}>
                        <label>
                            代金券：
                            {
                                (chooseCashLen > 0) ? (<span className={style.red}>{totalCash}元代金券</span>) : (<span className={style.red}>{cashLength}张代金券可用</span>)
                            }
                        </label>
                        <span onClick={() => {
                            this.showModal('cash')
                        }}>请选择</span>
                    </div>
                    <div className={style.item}>
                        <label>
                            加息券：
                            {
                                (chooseRateLen > 0) ? (<span className={style.red}>加息{totalRate}%</span>) : (<span className={style.red}>{rateLength}张加息券可用</span>)
                            }
                        </label>
                        <span onClick={() => {
                            this.showModal('rate')
                        }}>请选择</span>
                    </div>
                    <div className={style.item}>
                        <label>实际支付</label>
                        <span>{total}元</span>
                    </div>
                </div>
                <div className={style.box}>
                    <button disabled={disabled}>立即投资</button>
                </div>
            </div>
        )
    }

}

export default Buy