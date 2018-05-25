import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import axios from 'axios';

import { islogin, islogout } from '../actions.js'
import { actions as loadingActions } from './../../loading'

class Auth extends Component {

	constructor(props) {
		super(props)
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
		onIsLogin: () => {
            dispatch(islogin())
		},
		onIsLogout: () => {
            dispatch(islogout())
        },
        onShowLoading: () => {
			dispatch(loadingActions.showLoading())
		},
		onHideLoading: () => {
			dispatch(loadingActions.hideLoading())
		}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)