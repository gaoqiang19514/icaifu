import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

import { fetchListAsync } from '../actions';

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

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { list: [] };
    }

    componentDidMount(){
        this.props.onFetchListAsync();
    }

    render() {
        if(this.props.status === 'loading'){
            // 亦可返回skeleton
            return <div>loading...</div>;
        }

        if(this.props.status === 'failure'){
            // 亦可返回skeleton
            return <div>加载失败</div>;
        }

        if(this.props.status === 'success'){
            return (
                <div className="swiper-container">
                    <Banner className="swiper-wrapper">
                        {
                            this.props.list.map((item, index) => {
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
}

const mapStateToProps = (state) => {
    return {
        status: state.home.status,
    	list: state.home.banners
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchListAsync: () => {
            dispatch(fetchListAsync(() => {
                new Swiper('.swiper-container', {
                    effect: 'fade',
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                })
            }));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);