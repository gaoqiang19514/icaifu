import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

import Head from './head.js'

class Buy extends Component {

    constructor(props) {
        super(props)

        this.state = {
            CFCode: '',
            money: ''
        }

        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onChangeHandle(type, e) {
        switch(type){
            case 'cfcode':
                this.setState({
                    CFCode: e.target.value
                })
                break;
            case 'money':
                if(isNaN(e.target.value)){return}
                this.setState({
                    money: e.target.value
                })
                break;
            default:
        }
    }

    render() {

        let disabled = true
        let { CFCode, money } = this.state

        if(CFCode && (CFCode.length > 8) && !isNaN(money) && (money > 100)){
            disabled = false
        }

        return (
            <div>
                <Head />

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
                        <span>0.00元</span>
                    </div>

                    <div className={style.item}>
                        <label>代金券</label>
                        <span>请选择</span>
                    </div>

                    <div className={style.item}>
                        <label>加息券</label>
                        <span>请选择</span>
                    </div>

                    <div className={style.item}>
                        <label>实际支付</label>
                        <span>0.00元</span>
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