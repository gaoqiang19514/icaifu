import React from 'react'
import {connect} from 'react-redux'

import './style.scss'
import loadingSrc from './loading.gif'

const Loading = ({show}) => {

    let displayStyle = show === true ? {display: "flex"} : {display: "none"}

    return (
        <div style={displayStyle} className="loading"></div>
    )
}

const mapStateToProps = (state) => {
    return {
        show: state.loading
    }
}

export default connect(mapStateToProps)(Loading)