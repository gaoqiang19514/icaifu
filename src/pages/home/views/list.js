import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

import JiPlan from './jiPlan.js'
import IEnjoy from './ienjoy.js'
import style from './style.scss'
import { buildPublicSign } from '@/api/api.js'
import { actions as loadingActions } from '@/common/loading'

class List extends Component {

	constructor(props) {
		super(props)

		this.state = {
			ready: false,
			jiPlanList: [],
			ienjoyList: []
		}

		this.loadProductList = this.loadProductList.bind(this);
	}

	componentWillMount() {
		this.loadProductList();
	}

	componentWillUnmount() {
	}

	loadProductList() {
		const keyStr = buildPublicSign()

        axios.get('/product/p2p_data_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				this.setState({
					jiPlanList: response.data.items,
					ienjoyList: response.data.p2pSubjectList
				}, () => {
					this.setState({
						ready: true
					});
				});
            }
        })
        .catch((error) => {
		})	
		.finally(() => {
		});	
	}

	render() {
		const {ready, jiPlanList, ienjoyList} = this.state
   
		return (
			<div>
				<div className={style.l_b}>
					<div className={style.l_b_h}>
						<h2 className="label">极计划</h2>
					</div>
					<div className={style.l_b_b}>
						<JiPlan ready={ ready } data={jiPlanList} match={this.props.match} />
					</div>
				</div>

				<div className={style.l_b}>
					<div className={style.l_b_h}>
						<h2 className="label">i享系列</h2>
					</div>
					<div className={style.l_b_b}>
						<IEnjoy ready={ ready } data={ienjoyList} match={this.props.match} />
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