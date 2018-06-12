import React, { Component } from 'react'
import axios from 'axios';

import { createSignature } from '@/api/api.js'
import Menu from '@/common/menu/'

import './style.scss'

const imgStyle = {
    "display": "block",
    "maxWidth": "100%"
}

const imgBoxStyle = {
    "overflow": "hidden",
    "borderRadius": "3px",
}

const boxStyle = {
    "width": "92%",
    "margin": "auto",   
    "padding": "4% 0"
}

const titleStyle = {
    "fontWeight": "bold",
    "fontSize": "16px"
}

const Item = ({ id, name, intro, imgSrc, url, startDate, endDate}) => (
    <div className="activity">
        <a href={ url }>
            <div style={ imgBoxStyle }><img style={ imgStyle } src={ imgSrc } alt={ name }/></div>
            <h2 style={ titleStyle }>{ name }</h2>
            <div>{ intro }</div>
            <div>
                活动时间：{ startDate } { endDate }
            </div>
        </a>
    </div>
)

class Activity extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentWillMount() {
        this._isMounted = true
        this.loadActivity()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    loadActivity() {
        const keyStr = createSignature()

        axios.get('/product/activity_list?' + keyStr)
        .then((response) => {
            if(response.status === 200){
                if(!this._isMounted){ return }
                this.setState({
                    list: response.data.item
                })
            }
        })
        .catch((error) => {

        })
    }

    render() {

        const { list } = this.state

        return (
            <div>
                <div style={ boxStyle }>
                    {
                        list.map((item, index) => (
                            <Item 
                                key={ item.id } 
                                id={ item.id } 
                                name={ item.name } 
                                intro={ item.intro }
                                imgSrc={ item.appPicUrl }
                                url={ item.activityUrl }
                                startDate={ item.startDate }
                                endDate={ item.endDate }
                            />
                        ))
                    }
                </div>
                <Menu />
            </div>
        )
    }
}

export default Activity