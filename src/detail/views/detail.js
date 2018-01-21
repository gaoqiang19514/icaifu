import React from 'react'

import Profile from './profile.js'
import Info from './info.js'

export default ({match}) => {
    return (
        <div>
            <Profile />
            <Info />
        </div>
    )
}