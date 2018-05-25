import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

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
                    auth.isAuthenticated 
                    ? <Part {...props} />
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

export default connect(mapStateToProps, null)(Auth)