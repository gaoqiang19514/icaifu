import React, { Component } from 'react'
import axios from 'axios';
import Item from './item.js'
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
		this._isMounted = true
		this.loadProductList()
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	loadProductList() {
		const keyStr = createSignature()

        axios.get('/product/p2p_data_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				if(!this._isMounted){return}
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
			return <div>no data</div>;
		}
   
		return (
			<div>
				<JiPlan arr={ jiPlanList } />
				<IEnjoy arr={ ienjoyList } />
			</div>
		)
	}
}

export default List