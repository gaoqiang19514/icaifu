import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import {actions as loadingActions} from '../../common/loading'
import style from './style.scss'

class InvestRecord extends Component {

	constructor(props) {
		super(props)

		this.state = {
			currentTypeValue: '0',
			currentTermValue: '1',
			typeList: [
				{ id: 0, title: '全部', value: '0' },
				{ id: 1, title: '招标中', value: '1' },
				{ id: 2, title: '还款中', value: '2' },
				{ id: 3, title: '已完成', value: '3' }
			],
			termList: [
				{ id: 0, title: '全部', value: '0' },
				{ id: 1, title: '近一月', value: '1' },
				{ id: 2, title: '近三月', value: '2' },
				{ id: 3, title: '近半年', value: '3' }			
			],
			investList: []
		}

		this.onClickHandle = this.onClickHandle.bind(this)
		this.updateDate = this.updateDate.bind(this)

		this.updateDate()
	}

	onClickHandle(type, value) {

		switch(type){
			case 'type':
				this.setState({
					currentTypeValue: value
				}, () => this.updateDate())
				break;
			case 'term':
				this.setState({
					currentTermValue: value
				}, () => this.updateDate())
				break;
			default:
		}
	}

	updateDate() {

		const { currentTypeValue, currentTermValue } = this.state

		this.props.onShowLoading()

		const data = [
            { id: 1, value: '0', title: '购买一双鞋子' },
            { id: 2, value: '1', title: '提现了好多钱' },
            { id: 3, value: '1', title: '充值1万块' },
            { id: 4, value: '1', title: '疯狂回款' },
            { id: 5, value: '2', title: '购买一个冰箱' },
            { id: 6, value: '3', title: '购买一辆坦克' }
        ]

        const response = data.filter(function(item, index) {
            if(currentTypeValue === '0'){
                return item
            }
            if(item.value === currentTypeValue){
                return item
            }
        })

        setTimeout(() => {
            this.setState({
                investList: response
            }, () => {
                this.props.onHideLoading()
            })
        }, 2000)
	}

	render() {

		const { currentTypeValue, currentTermValue, typeList, termList, investList } = this.state

		return (
			<div>
				<div className={style.box}>
					{
						typeList.map(function(item, index) {
							let activeStyle = item.value === currentTypeValue ? {color: 'red'} : {}
							return (
                                <span style={activeStyle} onClick={
                                	() => this.onClickHandle('type', item.value)
                                } key={item.id}>{item.title}</span>
							)
						}, this)
					}
				</div>
				<div className={style.box}>
					{
						termList.map(function(item, index) {
							let activeStyle = item.value === currentTermValue ? {color: 'red'} : {}
							return (
                                <span style={activeStyle} onClick={
                                	() => this.onClickHandle('term', item.value)
                                } key={item.id}>{item.title}</span>
							)
						}, this)
					}
				</div>

				<div>
					{
						investList.map(function(item, index) {
							return (
                                <div className={style.item} key={item.id}>item</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowLoading: () => {
            dispatch(loadingActions.showLoading())
        },
        onHideLoading: () => {
            dispatch(loadingActions.hideLoading())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestRecord)

