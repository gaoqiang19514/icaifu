import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import arrow_icon from './images/arrow_icon.png';
import ibaby_icon from './images/ibaby_icon.png';
import camera_icon from './images/camera_icon.png';
import photo_icon from './images/photo_icon.png'

import styles from './styles.scss';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            layer: false
        }
    }

    changeProfile = () => {
        this.setState({
            layer: true
        });        
    }

    cancelHandle = (e) => {
        e.stopPropagation();

        if(e.target.getAttribute('data-js-cancel')){
            this.setState({
                layer: false
            });
        }
    }
    
    render() {
        const { layer } = this.state;

        const layerStyle = layer ? { display: 'block' } : { display: 'none' };

        return(
            <div>
                <h1 className={ styles.title }>个人信息</h1>

                <div className={ styles.list  }>
                    <div className={ styles.item }>
                        <span>头像</span>
                        <div onClick={ this.changeProfile } className={ styles.link }>
                            <img className={ styles.profile } src={ ibaby_icon } alt="头像"/>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </div>
                    </div>
                    <div className={ styles.item }>
                        <span>昵称</span>
                        <Link to='' className={ styles.link }>
                            <span>icaifu_13077890023</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="头像"/>
                        </Link>
                    </div>
                    <div className={ styles.item }>
                        <span>手机号</span>
                        <Link to='' className={ styles.link }>
                            <span>186****0000</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </Link>
                    </div>
                    <div className={ styles.item }>
                        <span>绑定微信</span>
                        <Link to='' className={ styles.link }>
                            <span>未绑定</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </Link>
                    </div>
                </div>

                <div className={ styles.list  }>
                    <div className={ styles.item }>
                        <span>汇付存管</span>
                        <a href='' className={ styles.link }>
                            <span>未开通</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </a>
                    </div>
                    <div className={ styles.item }>
                        <span>实名认证</span>
                        <Link to='' className={ styles.link }>
                            <span>未实名</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </Link>
                    </div>
                    <div className={ styles.item }>
                        <span>我的银行卡</span>
                        <Link to='' className={ styles.link }>
                            <span>未绑卡</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </Link>
                    </div>
                </div>

                <div className={ styles.list  }>
                    <div className={ styles.item }>
                        <span>风险等级评测</span>
                        <Link to='' className={ styles.link }>
                            <span>未评测</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </Link>
                    </div>
                    <div className={ styles.item }>
                        <span>收货地址</span>
                        <Link to='' className={ styles.link }>
                            <span>未设置</span>
                            <img className={ styles.arrow } src={ arrow_icon } alt="箭头"/>
                        </Link>
                    </div>
                </div>

                <div  className={ styles.fixed } style={ layerStyle }>
                    <div data-js-cancel className={ styles.fixed_wrap } onClick={ this.cancelHandle }>

                        <div className={ styles.box_wrap }>
                            <div className={ styles.box }>
                                <div className={ styles.box_item }>
                                    <img className={ styles.box_icon } src={ camera_icon } alt="相机"/>
                                    <span>拍摄照片</span>
                                </div>
                                <div className={ styles.box_item }>
                                    <img className={ styles.box_icon } src={ photo_icon } alt="相册"/>
                                    <span>相册选择</span>
                                </div>
                            </div>
                            <div className={ styles.box }>
                                <div data-js-cancel onClick={ this.cancelHandle } className={ styles.box_item }>取消</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}