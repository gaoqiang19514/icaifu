import React, { Component } from 'react'

import style from './style.scss'

class Recharge extends Component {

    constructor(props) {
        super(props)

        this.onSubmitHandle = this.onSubmitHandle.bind(this)
        this.onChangeHandle = this.onChangeHandle.bind(this)
    }

    onSubmitHandle(e) {
        console.log(this.state.money)
    }

    onChangeHandle(e) {
        this.setState({
            money: e.target.value
        })
    }
    
    render() {

        const { money, bankLimit } = this.state

        return (
            <div className={style.recharge}>
                <div className={style.box}>充值不收取手续费，充值金额必须为整数</div>
                <div><input onChange={this.onChangeHandle} className={style.input} type="text" value={money} placeholder="请输入充值金额" /></div>
                <div className={style.box}>
                    <button onClick={this.onSubmitHandle} className="btn">确定</button>
                </div>
            </div>
        )
    }
}

export default Recharge