import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

import JiPlan from './jiPlan.js'
import IEnjoy from './ienjoy.js'
import style from './style.scss'
import { createSignature } from '@/api/api.js'
import { actions as loadingActions } from '@/common/loading'

class List extends Component {

	constructor(props) {
		super(props)

		this.state = {
			jiPlanList: [],
			ienjoyList: []
		}
	}

	componentWillMount() {
		this.loadFlag = true
		this.loadProductList()
	}

	componentWillUnmount() {
		this.loadFlag = false
	}

	loadProductList() {
		const keyStr = createSignature()

		this.props.onShowLoading();
        axios.get('/product/p2p_data_info?' + keyStr)
        .then((response) => {
			console.log(response)
            if(response.status === 200){
				if(!this.loadFlag){return}
				this.setState({
					jiPlanList: response.data.items,
					ienjoyList: response.data.p2pSubjectList
				})
            }
        })
        .catch((error) => {

		})	
		.finally(() => {
			this.props.onHideLoading();
		});	
	}

	render() {
		const { jiPlanList, ienjoyList } = this.state

		if(ienjoyList.length < 1){
			return null;
		}
   
		return (
			<div>
				<div className={style.l_b}>
					<div className={style.l_b_h}>
						<h2 className="label">极计划</h2>
					</div>
					<div className={style.l_b_b}>
						<JiPlan data={jiPlanList} match={this.props.match} />
					</div>
				</div>

				<div className={style.l_b}>
					<div className={style.l_b_h}>
						<h2 className="label">i享系列</h2>
					</div>
					<div className={style.l_b_b}>
						<IEnjoy data={ienjoyList} match={this.props.match} />
					</div>
				</div>
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
			console.log('hide');
			dispatch(loadingActions.hideLoading())
		}
	}
}

export default connect(null, mapDispatchToProps)(List)