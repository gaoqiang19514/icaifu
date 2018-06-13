import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import InfiniteScroll from 'infinite-scroll'

import './style.scss'
import { createSignature } from '@/api/api.js'
import { actions as loadingActions } from '@/common/loading'
import List from './list.js'
import Menu from '@/common/menu/'


class Invest extends Component {

	constructor(props) {
		super(props)

		this.state = {
			sort: 1,
			flag1: false,
			flag2: false,
			ienjoyList: [],
			jiPlanList: []
		}
	}

	componentWillMount() {
		this.loadFlag = true
		this.loadProductList()
        this.loadJiPlanList()
    }
    
    componentDidMount() {
        var elem = document.querySelector('.ienjoy');
    }

	componentWillUnmount() {
		this.loadFlag = false
	}

	loadProductList() {
		const keyStr = createSignature()

        axios.get('/product/p2p_subject_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				if(!this.loadFlag){return}
				this.setState({
					ienjoyList: response.data.items
				})
			}
        })
        .catch((error) => {

        })			
	}

	loadJiPlanList() {
		const keyStr = createSignature()

		axios.get('/product/p2p_data_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				if(!this.loadFlag){return}
				this.setState({
					jiPlanList: response.data.items
				})
            }
        })
        .catch((error) => {

        })	
	}

	switchSort = (sort) => {
		console.log(sort);

		this.setState({
			sort: sort
		})
	}

	sort1 = () => {
		this.switchSort(1);
	}

	sort2 = () => {
		this.setState({
			flag1: !this.state.flag1
		}, () => {
			if(this.state.flag1){
				this.switchSort(2);
			}else{
				this.switchSort(3);
			}
		})
	}

	sort3 = () => {
		this.setState({
			flag2: !this.state.flag2
		}, () => {
			if(this.state.flag2){
				this.switchSort(4);
			}else{
				this.switchSort(5);
			}
		})
	}

	render = () => {

		const { jiPlanList, ienjoyList } = this.state

		return (
			<div>
				<div className="l-hd">
					<div onClick={ () => { this.sort1() } } className="l-hd-item">默认</div>
					<div onClick={ () => { this.sort2() } } className="l-hd-item">收益率</div>
					<div onClick={ () => { this.sort3() } } className="l-hd-item">期限</div>
				</div>
				<div className="l-box">
					<div className="l-box-hd">
						<h2>极计划</h2>
					</div>
					<div className="l-box-bd">
						<List data={ jiPlanList } match={ this.props.match } />
					</div>
				</div>
				<div className="l-box">
					<div className="l-box-hd">
						<h2>i享系列</h2>
					</div>
					<div className="l-box-bd">
						<List data={ ienjoyList } match={ this.props.match } />
					</div>
				</div>
				<Menu />
			</div>		
		)
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

export default connect(null, mapDispatchToProps)(Invest)