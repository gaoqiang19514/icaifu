import React from 'react'
import {connect} from 'react-redux';

import './style.scss'
import {actions as authActions} from '@/common/auth/'

const Logout = ({onLogout}) => {
    return <button onClick={() => {onLogout()}}>退出登录</button>
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch(authActions.logout())
        }
    }
}

export default connect(null, mapDispatchToProps)(Logout)