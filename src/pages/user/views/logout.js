import React from 'react'
import {connect} from 'react-redux';

import {actions as authActions} from './../../../common/auth/'

import style from './style.scss'

const Logout = ({onLogout}) => {
    return (
        <div className={style.wrap}>
            <button onClick={
            	() => {
            		onLogout()
            	}
            } className={style.btn}>退出登录</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(authActions.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)