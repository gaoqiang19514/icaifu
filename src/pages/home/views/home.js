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
        <List />
        <Menu />
    </div>
)