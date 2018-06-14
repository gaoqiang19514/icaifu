import React, { Component } from 'react'
import axios from 'axios';
import JiPlan from './jiPlan.js'
import IEnjoy from './ienjoy.js'

import { createSignature } from './../../../api/api.js'

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

        axios.get('/product/p2p_data_info?' + keyStr)
        .then((response) => {
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
	}

	render() {
		const { jiPlanList, ienjoyList } = this.state

		if(ienjoyList.length < 1){
			return null;
		}
   
		return (
			<div>
				<div className="l-box">
					<div className="l-box-hd">
						<h2 className="title">极计划</h2>
					</div>
					<div className="l-box-bd">
						<JiPlan arr={ jiPlanList } />
					</div>
				</div>
				<div className="l-box">
					<div className="l-box-hd">
						<h2 className="title">i享系列</h2>
					</div>
					<div className="l-box-bd">
						<IEnjoy arr={ ienjoyList } />
					</div>
				</div>
			</div>
		)
	}
}

export default List