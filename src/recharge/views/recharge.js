import React, { Component } from 'react'

import style from './style.scss'

class Recharge extends Component {

    constructor(props) {
        super(props)

        this.state = {
            money: '',
            bankLimit: [
                {id: 1, name: '建设银行', once: 50000, day: 10000},
                {id: 2, name: '工商银行', once: 50000, day: 10000},
                {id: 3, name: '邮政储蓄', once: 50000, day: 10000},
                {id: 4, name: '渤海银行', once: 50000, day: 10000},
                {id: 5, name: '上海银行', once: 50000, day: 10000},
                {id: 6, name: '广大银行', once: 50000, day: 10000},
            ]
        }

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
                    <button onClick={this.onSubmitHandle} className={style.button}>确定</button>
                </div>

                <div className={style.list}>
                    {
                        bankLimit.map(function(item, index){
                            return (
                                <div className={style.item} key={item.id}>
                                    <h2>{item.name}</h2>
                                    <p><span>{item.once}</span> <span>{item.day}</span></p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Recharge