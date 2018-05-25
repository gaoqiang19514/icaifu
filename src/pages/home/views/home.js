import React, {Component} from 'react'
import {connect} from 'react-redux'

import {actions as loadingActions} from './../../../common/loading'

import style from './style.scss'

import Banner from './banner.js'
import List from './list.js'
import Menu from './../../../common/menu/'

class Home extends Component {
	
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
				<Banner />
				
				<div>
					<nav className={style.nav}>
						<a href="">0元购</a>
						<a href="">安全保障</a>
					</nav>
				</div>
	
				<List />
	
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


export default connect(null, mapDispatchToProps)(Home)