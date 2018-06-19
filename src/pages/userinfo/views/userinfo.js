import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

export default class extends Component {
    
    render() {
        return(
            <div>
                <h1>个人信息</h1>

                <div>
                    <span>昵称</span>
                    <span>icaifu_13077890023</span>
                </div>
                <div>
                    <span>手机号</span>
                    <span>186****0000</span>
                </div>
                <div>
                    <span>绑定微信</span>
                    <span>未绑定</span>
                </div>
                <div>
                    <span>汇付存管</span>
                    <span>未开通</span>
                </div>
                <div>
                    <span>实名认证</span>
                    <span>未实名</span>
                </div>
                <div>
                    <span>我的银行卡</span>
                    <span>未绑卡</span>
                </div>
                <div>
                    <span>风险等级评测</span>
                    <span>未评测</span>
                </div>
                <div>
                    <span>收货地址</span>
                    <span>未设置</span>
                </div>
                <div>
                    <span>头像</span>
                    <span>头像</span>
                </div>


            </div>
        )
    }
}