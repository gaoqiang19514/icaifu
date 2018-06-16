import React, {Component} from 'react'

import Menu from '@/common/menu/'
import Banner from './banner.js'
import List from './list.js'
import Safety from './safety.js'

const containerStyle = {
    padding: '0.5333rem 0 0.9333rem 0'
}

const boxStyle = {
    marginBottom: '0.4rem',
    textAlign: 'center'
}

const linkStyle = {
    padding: '0 0.5333rem',
    display: 'line-block',
    fontSize: '0.32rem',
    fontWeight: 'bold',
    color: '#898996',
}

const textStyle = {
    margin: 0,
    textAlign: 'center',
    fontSize: '0.32rem',
    color: '#a8acb3'
}

export default ({match}) => (
    <div>
        <Banner />
        <List match={match} />
        <Safety />

        <div style={containerStyle}>
            <div style={boxStyle}>
                <a style={linkStyle} href="">信息披露</a>
                <a style={linkStyle} href="">在线客服</a>
            </div>
            <p style={textStyle}>参考利率不代表实际利率 投资需谨慎</p>
        </div>

        <Menu />
    </div>
)