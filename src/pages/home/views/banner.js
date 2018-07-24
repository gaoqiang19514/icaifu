import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

import { fetchListAsync } from '../actions';

class Banner extends Component {
    state = { list: [] };

    componentDidMount(){
        this.props.onFetchListAsync();
    }

    render() {
        const { status, list } = this.props;

        if(status === 'loading'){
            // 亦可返回skeleton
            return <div>loading...</div>;
        }

        if(status === 'failure'){
            // 亦可返回skeleton
            return <div>加载失败</div>;
        }

        if(status === 'success'){
            return (
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            list.map((item) => {
                                return (
                                    <div key={ item.id } className="swiper-slide">
                                        <a href={ item.link_url }>
                                            <img src={ item.pic_url } />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            )
        }
	}
}

const mapStateToProps = (state) => {
    return {
        status: state.home.banner.status,
    	list: state.home.banner.banners
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);