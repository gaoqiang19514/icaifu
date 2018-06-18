import React from 'react';
import {connect} from 'react-redux';
import ReactLoading from 'react-loading';

import styles from  './style.scss'
import loadingSrc from './loading.gif'

const Loading = ({show}) => {

    let displayStyle = show === true ? {display: "block"} : {display: "none"}

    return (
        <div className={styles.loading_layer} style={displayStyle}>
            <div className={styles.loading_wrap}>
                <ReactLoading type="spin" className={styles.loading} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        show: state.loading
    }
}

export default connect(mapStateToProps)(Loading)