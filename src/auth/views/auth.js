import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { actions as loadingActions } from '../../common/loading'

class Auth extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const {component: Part, auth: auth, ...args} = this.props

		// 如果token为真，则发起请求验证是否过期
			setTimeout(() => {
				// 已过期 重定向到login
			}, 2000)

		this.props.onShowLoading()
		return <div></div>

	    return (
	        <Route {...args} render={
	            (props) => (
	                auth ? (<Part {...props} />)
	                    : (<Redirect to={{
	                    	pathname: '/login',  
	                    	state: { from: props.location }
	                    }} />)
	            )
	        } />
	    )
	}
}

const mapStateToProps = (state) => {
    return {
    	auth: state.auth
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth)