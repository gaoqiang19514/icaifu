import React from 'react'
import { Link } from 'react-router-dom'

const fixedStyle = {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0
}
const navStyle = {
    display: 'flex',
    background: '#fff'
}
const linkStyle = {
    letterSpacing: '.1em',
    fontSize: '0.2667rem',
    flex: '1',
    textAlign: 'center',
    lineHeight: '1.3333rem'
}
const siblingStyle = {
    height: '1.3333rem'
}

export default () => (
    <div>
        <div style={siblingStyle}></div>
        <div style={fixedStyle}>
            <nav style={navStyle}>
                <Link style={linkStyle} to="/home">首页</Link>
                <Link style={linkStyle} to="/invest">投资</Link>
                <Link style={linkStyle} to="/activity">发现</Link>
                <Link style={linkStyle} to="/user">我的</Link>
            </nav>
        </div>
    </div>
)