import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import { actions as loadingActions } from './../../../common/loading'
import List from './list.js'
import Menu from './../../../common/menu/'

import { createSignature } from './../../../api/api.js'







class Invest extends Component {

	constructor(props) {
		super(props)

		this.state = {
			ienjoyList: [],
			jiPlanList: []
		}
	}

	componentWillMount() {
		this._isMounted = true
		this.loadProductList()
		this.loadJiPlanList()
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	loadProductList() {
		const keyStr = createSignature()

        axios.get('/product/p2p_subject_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				if(!this._isMounted){return}
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
				if(!this._isMounted){return}
				this.setState({
					jiPlanList: response.data.items
				})
            }
        })
        .catch((error) => {

        })	
	}

	render() {

		const { jiPlanList, ienjoyList } = this.state

		return (
			<div>
				<List data={ jiPlanList } match={ this.props.match } />
				<List data={ ienjoyList } match={ this.props.match } />
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