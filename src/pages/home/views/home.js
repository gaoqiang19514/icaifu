import React, {Component} from 'react'
import {connect} from 'react-redux'

import {actions as loadingActions} from '@/common/loading'

import style from './style.scss'

import Menu from '@/common/menu/'
import Banner from './banner.js'
import List from './list.js'

export default () => (
    <div>
        <Banner />
        <nav className={style.nav}>
            <a href="">0元购</a>
            <a href="">安全保障</a>
        </nav>
        <List />
        <Menu />
    </div>
)