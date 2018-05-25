import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

class JPlan extends Component {

    constructor(props) {
        super(props)

        this.state = {
            total: 15000,
            CFCode: '',
            rate: 0.07,
            days: 45,
            agreen: true
        }

        this.changeHandle = this.changeHandle.bind(this)
        this.checkedHandle = this.checkedHandle.bind(this)
    }

    changeHandle(e) {
        this.setState({
            CFCode: e.target.value
        })
    }

    checkedHandle(e) {
        this.setState({
            agreen: e.target.checked
        })
    }

    render() {

        let { total, CFCode, rate, days, agreen }    = this.state
        
        let btnClassName = 'btn'
        let btnText      = '确定'

        let earnings = 15000 * rate / 360 * days
        
        if(total < 15000){
            btnClassName = [btnClassName, style.disable].join(' ')
            let balance = 15000 - total

            btnText = `余额不足，充值${balance}元`
        }else if(!CFCode || (CFCode.length < 8)) {
            btnClassName = [btnClassName, style.disable].join(' ')
            btnText = '请输入CF码'
        }else if(!agreen) {
            btnClassName = [btnClassName, style.disable].join(' ')
            btnText = '请同意用户协议'
        }
      

        return (
            <div>
                <div className={style.head}>
                    <h2>剩余可购金额</h2>
                    <p>444400.00</p>
                </div>
    
                <div className={`${style.box} ${style.mg}`}>
                    <span>账户余额：<strong>0.0</strong>元</span>
                    <Link to="/recharge">充值</Link>
                </div>
    
                <div className={`${style.box} ${style.mg}`}>
                    <Link to="/invest/12">
                        <span>查看项目详情</span>
                    </Link>
                </div>
    
                <div>
    
                    <div className={style.box}>
                        <span>投资金额：</span>
                        <span>15000.00元</span>
                    </div>
    
                    <div className={style.box}>
                        <span>预期收益：</span>
                        <span>{earnings}元 + 499.00元</span>
                    </div>
    
                    <div className={style.box}>
                        <span>实际支付：</span>
                        <span>15000.00元</span>
                    </div>
    
                    <div className={style.box}>
                        <span className={style.shrink}>CF码</span>
                        <input onChange={this.changeHandle} className={style.input} type="text" value={CFCode} placeholder="请输入CF码" />
                    </div>
    
                    <div className={`${style.box} ${style.center}`}>
                        <label><input onChange={this.checkedHandle} type="checkbox" checked={agreen} />同意<a href="">《i财富四方借款协议》</a></label>
                    </div>
    
                    <div className={style.container}>
                        <button className={btnClassName}>{btnText}</button>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default JPlan