import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

class Auth extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		const {component: Part, auth: auth, ...args} = this.props
		
	    return (
	        <Route {...args} render={
	            (props) => (
	                auth ? (<Part {...props} />)
	                    : (<Redirect to={{pathname: '/login', state: { from: props.location }}} />)
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

export default connect(mapStateToProps)(Auth)