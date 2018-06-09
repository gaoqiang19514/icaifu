import React, { Component } from 'react'
import axios from 'axios';

import Menu from './../../../common/menu/'

import { createSignature } from './../../../api/api.js'

const imgBox = {
    "maxWidth": "100%"
}

const Item = ({ id, name, imgSrc, url, startDate, endDate}) => (
    <div>
        <a href={ url }>
            <h2>{ name }</h2>
            <div><img style={ imgBox } src={ imgSrc } alt={ name }/></div>
            <div>
                { startDate } { endDate }
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
                if(!this._isMounted){return}
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
                <div>
                    {
                        list.map((item, index) => {
                            return <Item 
                                        key={ item.id } 
                                        id={ item.id } 
                                        name={ item.name } 
                                        imgSrc={ item.appPicUrl }
                                        url={ item.activityUrl }
                                        startDate={ item.startDate }
                                        startDate={ item.startDate }
                                    />
                        })
                    }
                </div>
                 



                <Menu />
            </div>
        )
    }
}

export default Activity