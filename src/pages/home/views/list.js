import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import styled from 'styled-components';

import { buildPublicSign } from '@/api/api.js';
import { actions as loadingActions } from '@/common/loading';

import JiPlan from './jiPlan.js'
import IEnjoy from './ienjoy.js'

const Box = styled.div`
    margin-bottom: 0.2667rem;
    background: #fff;
`;

const BoxHead = styled.div`
    position: relative;
    padding: 0.2667rem 0.4rem;
    &:after{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #eaeaea;
        transform: scaleY(.5);
    }
`;

const BoxBody = styled.div`
	padding: 0 0.4rem;
`;

class List extends Component {

	constructor(props) {
		super(props)

		this.state = {
			ready: false,
			jiPlanList: [],
			ienjoyList: []
		}
	}

	componentWillMount() {
		this.loadProductList();
	}

	loadProductList = () => {
		const keyStr = buildPublicSign();

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
		const {ready, jiPlanList, ienjoyList} = this.state;
   
		return (
			<div>
				<Box>
					<BoxHead>
						<h2 className="label">极计划</h2>
					</BoxHead>
					<BoxBody>
						<JiPlan ready={ ready } data={jiPlanList} match={this.props.match} />
					</BoxBody>
				</Box>
				<Box>
					<BoxHead>
						<h2 className="label">i享系列</h2>
					</BoxHead>
					<BoxBody>
						<IEnjoy ready={ ready } data={ienjoyList} match={this.props.match} />
					</BoxBody>
				</Box>
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

export default connect(null, mapDispatchToProps)(List);