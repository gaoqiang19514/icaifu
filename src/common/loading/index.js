import React from 'react'

import style from './style.scss'

export default ({show}) => {

    console.log(show)

    let displayStyle = show === true ? {display: "flex"} : {display: "none"}

    return (
        <div style={displayStyle} className={style.loading}>
            Loading
        </div>
    )
}