import React, { Component } from 'react'
import axios from 'axios';

import { buildPublicSign } from '@/api/api.js'
import Menu from '@/common/menu/'

import style from './style.scss'

const imgBoxStyle = {
    width: '9.2rem',
    height: '4.3467rem',
    marginBottom: '0.2667rem'
}
const boxStyle = {
    padding: "0.4rem"
}
const titleStyle = {
    marginBottom: "0.2667rem",
    fontWeight: "bold",
    fontSize: "0.4267rem"
}
const dateStyle = {
    paddingBottom: '0.2667rem',
    fontSize: "12px",
    color: "#ccc"
}

const Item = ({name, imgSrc, url, startDate, endDate}) => (
    <a href={ url } className="u-border">
        <div style={imgBoxStyle}>
            <img src={ imgSrc } alt={ name }/>
        </div>
        <h2 style={ titleStyle }>{ name }</h2>
        <div style={ dateStyle }>
            活动时间：{ startDate } { endDate }
        </div>
    </a>
)
const placeholderStyle = {
    background: '#fff',
    padding: '0.4rem',
    marginBottom: "0.2667rem"
}

const placeStyle = {
    background: '#eaeaea'
}
const placeItemImg = {
    ...placeStyle,
    marginBottom: '0.2667rem',
    height: '4.3467rem'
}
const placeItemTitle = {
    ...placeStyle,
    marginBottom: "0.2667rem",
    height: '0.4rem'
}
const placeItemDate = {
    ...placeStyle,
    paddingBottom: '0.2667rem',
    height: '0.2667rem'
}

class ReactPlaceholder extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            ready: props.ready
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.ready){
            setTimeout(() => {
                this.setState({
                    ready: true
                })
            }, 1000)
        }
    }

    render() {

        if(this.state.ready){
            return this.props.children
        }

        return (
            <div>
                <div style={placeholderStyle}>
                    <div style={placeItemImg}></div>
                    <div style={placeItemTitle}></div>
                    <div style={placeItemDate}></div>
                </div>
                <div style={placeholderStyle}>
                    <div style={placeItemImg}></div>
                    <div style={placeItemTitle}></div>
                    <div style={placeItemDate}></div>
                </div>
                <div style={placeholderStyle}>
                    <div style={placeItemImg}></div>
                    <div style={placeItemTitle}></div>
                    <div style={placeItemDate}></div>
                </div>
            </div>
        )
    }
}

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ready: false,
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
        const keyStr = buildPublicSign()

        axios.get('/product/activity_list?' + keyStr)
        .then((response) => {
            if(response.status === 200){
                if(!this._isMounted){ return }
                this.setState({
                    ready: true,
                    list: response.data.item
                });
            }
        })
        .catch((error) => {
        })
        .finally(() => {
        });
    }

    render() {
        const {ready, list} = this.state

        return (
            <div>
                <ReactPlaceholder ready={ready}>
                    <div className={style.list} style={ boxStyle }>
                        {
                            list.map((item, index) => (
                                <Item 
                                    key={item.id}
                                    name={item.name} 
                                    imgSrc={item.appPicUrl}
                                    url={item.activityUrl}
                                    startDate={item.startDate}
                                    endDate={item.endDate }
                                />
                            ))
                        }
                    </div>
                </ReactPlaceholder>

                <Menu />
            </div>
        )
    }
}