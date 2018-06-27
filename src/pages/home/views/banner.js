import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

const CancelToken = axios.CancelToken;
let source = null;

const Image = styled.img`
    height: 4rem;
`;

const Banner = styled.div`
    height: 4rem;    
`;

const Item = ({ link_url, pic_url }) => (
    <div className="swiper-slide">
        <a href={ link_url }>
            <Image src={ pic_url } />
        </a>
    </div>        
)

export default class extends Component {

    constructor(props) {
        super(props)
        this.state = { list: [] };
    }

    componentWillMount(){
        source = CancelToken.source();
        axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=banners', {
            cancelToken: source.token
        })
        .then((response) => {
            this.setState({
                list: response.data.list
            }, () => {
                new Swiper('.swiper-container', {
                    effect: 'fade',
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                })
            });
        })
        .catch((error) => {
        });
    }

    componentWillUnmount() {
        source.cancel('Operation canceled');
    }

	render() {
		return (
            <div className="swiper-container">
                <Banner className="swiper-wrapper">
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <Item 
                                    key={ item.id }
                                    link_url={ item.link_url }
                                    pic_url={ item.pic_url }
                                />
                            )
                        })
                    }
                </Banner>
                <div className={`swiper-pagination swiper-pagination swiper__pagination`}></div>
            </div>
		)
	}
}