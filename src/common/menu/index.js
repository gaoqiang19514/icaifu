import React from 'react'
import { Link } from 'react-router-dom'

const navStyle = {
    display: "flex",
    background: "#fff"
}

const linkStyle = {
    letterSpacing: '.1em',
    fontSize: "12px",
    flex: "1",
    textAlign: "center",
    lineHeight: "50px"
}

const siblingStyle = {
    height: "50px"
}

const Menu = () => (
    <div>
        <div style={ siblingStyle }></div>
        <div className="l-fixed-bottom">
            <nav style={ navStyle }>
                <Link style={ linkStyle } to="/home">首页</Link>
                <Link style={ linkStyle } to="/invest">投资</Link>
                <Link style={ linkStyle } to="/activity">发现</Link>
                <Link style={ linkStyle } to="/user">我的</Link>
            </nav>
        </div>
    </div>
)

export default Menu