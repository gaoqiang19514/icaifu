import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { actions as loadingActions } from '../../common/loading'

let timer = null

class Auth extends Component {

	constructor(props) {
		super(props)

        this.state = {
            flag: false
        }
        this.props.onShowLoading()
	}

    componentDidMount() {
        timer = setTimeout(() => {
            this.setState({
                flag: true
            }, () => {
                this.props.onHideLoading()
            })
        }, 2000)        
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }

	render() {

		const { component: Part, auth: auth, ...args } = this.props

        if(this.state.flag){
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

        return (<div></div>)
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