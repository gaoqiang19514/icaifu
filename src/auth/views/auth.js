import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


import { actions as loadingActions } from '../../common/loading'

class Auth extends Component {

	constructor(props) {
		super(props)

	}

    componentDidMount() {
    	// 如果token为真 则发起查询请求 否则重定向到login
    	// if(token){
    	// 	queryTokenExpires(token)
    	// 	.then((response) => {
    	// 		if(respone){
    	// 			// 未过期 正常渲染
    	// 		}else{
    	// 			// 过期 重定向到login
    	// 		}
    	// 	})
    	// }else{
    	// 	// 重定向到login
    	// }
    }

    componentWillUnmount() {

    }

	render() {
		const { component: Part, auth: auth, ...args } = this.props

	    return (
	        <Route {...args} render={
	            (props) => (
	                auth.isAuthenticated ? (<Part {...props} />)
	                    : (<Redirect to={{
	                    	pathname: '/login',  
	                    	from: { from: props.location }
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