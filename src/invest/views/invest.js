import React, { Component } from 'react'
import {connect} from 'react-redux'


import {actions as loadingActions} from '../../common/loading'

import List from './list.js'
import Menu from '../../common/menu/'



class Invest extends Component {

	constructor(props) {
		super(props)

		props.onShowLoading()
	}

	componentDidMount() {
		
		setTimeout(() => {
			this.props.onHideLoading()
		}, 500)
	}

	render() {
		return (
			<div>
				<List match={this.props.match} />
				<Menu />
			</div>		
		)
	}
}

const mapStateToProps = () => {

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