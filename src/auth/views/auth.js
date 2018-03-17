import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import axios from 'axios';

import { actions as authActions } from '../../auth/'
import { actions as loadingActions } from '../../common/loading'

let timer = null

class Auth extends Component {

	constructor(props) {
		super(props)
		this.state = {
			flag: false
		}
	}

    componentDidMount() {
		// 只调用一次
		if(sessionStorage.getItem('init')){
			this.setState({flag: true})
			return;
		}

		console.log('componentDidMount');

		axios.post('/verifyToken', {
            token: 'token123455678'
        })
        .then((response) => {
			if(response.status === 200){
                if(response.data.code === 1){
					// 如果token为过期，需要将auth.isAuthenticated置为true
					this.props.onIsLogin()
                }
			}
			
			this.setState({
				flag: true
			})
		})
        .catch((error) => {
			console.log(error);
			
			this.setState({
				flag: true
			})
		});
		sessionStorage.setItem('init', true)
    }

    componentWillUnmount() {
		clearTimeout(timer);
    }

	render() {
		const { component: Part, auth: auth, ...args } = this.props

		//	在token校验结果回来之前 这里要一直return
		if(!this.state.flag){
			return (<div>auth component</div>)
		}

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
            dispatch(authActions.islogin())
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