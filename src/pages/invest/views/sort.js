import React, {Component} from 'react';

import style from './style.scss'

const heightStyle = {
    height: '1.1733rem',
    lineHeight: '1.1733rem'
}

const flexBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between'
};

const flexItemStyle = {
    ...heightStyle,
    flex: '1',
    textAlign: 'center',
    color: '#9299a4',
    fontSize: '0.3733rem'
};

export default () => {
    return (
        <div style={flexBoxStyle}>
            <div style={flexItemStyle}>默认</div>
            <div style={flexItemStyle}>收益率</div>
            <div style={flexItemStyle}>期限</div>
        </div>
    )
}