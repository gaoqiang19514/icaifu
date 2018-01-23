import React, { Component } from 'react'

import style from './style.scss'

import Item from './item.js'

class ExchangeRecord extends Component {

    constructor(props) {
        super(props)

        this.state = {
            currentType: "全部",
            currentDate: "近三天",
            viewTypes: false,
            viewDates: false
        }

        this.selectType = this.selectType.bind(this)
        this.chooseType = this.chooseType.bind(this)

        this.selectDate = this.selectDate.bind(this)
        this.chooseDate = this.chooseDate.bind(this)
    }

    selectType() {
        this.setState({
            viewTypes: !this.state.viewTypes
        })
    }

    chooseType(e) {
        const typeText = e.target.innerHTML

        this.setState({
            currentType: typeText
        })

        this.setState({
            viewTypes: !this.state.viewTypes
        })
    }

    selectDate() {
        this.setState({
            viewDates: !this.state.viewDates
        })
    }

    chooseDate(e) {
        const DateText = e.target.innerHTML

        this.setState({
            currentDate: DateText
        })

        this.setState({
            viewDates: !this.state.viewDates
        })
    }

    render() {

        let typeDisplayStyle = this.state.viewTypes === true ? {display: "block"} : {display: "none"}
        let dateDisplayStyle = this.state.viewDates === true ? {display: "block"} : {display: "none"}

        return (
            <div>
                <div className={style.nav}>
                    <div className={style.cell}>
                        <span className={style.current} onClick={this.selectType}>{this.state.currentType}</span>
                        <div onClick={this.chooseType} className={style.inner} style={typeDisplayStyle}>
                            <div>全部</div>
                            <div>充值</div>
                            <div>提现</div>
                            <div>购买</div>
                            <div>回款</div>
                        </div>
                    </div>
                    <div className={style.cell}>
                        <span className={style.current} onClick={this.selectDate}>{this.state.currentDate}</span>
                        <div onClick={this.chooseDate} className={style.inner} style={dateDisplayStyle}>
                            <div>近三天</div>
                            <div>近三星期</div>
                            <div>近三月</div>
                            <div>近三年</div>
                        </div>
                    </div>
                </div>
    
                <div className={style.list}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
    
            </div>
        )
    }
}

export default ExchangeRecord