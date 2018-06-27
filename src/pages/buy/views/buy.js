import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import ReactLoading from 'react-loading';
import BScroll from 'better-scroll';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { buildBuyAuthSign } from '@/api/api.js';
import { AnimateFullLayer } from '@/common/animateLayer';

import service_icon from './images/service_icon.png';
import arrow_icon from './images/arrow_icon.png';
import checkbox_ok from './images/checkbox_icon_ok.png';
import checkbox_no from './images/checkbox_icon_no.png';
import circle_ok from './images/circle_check_icon_ok.png';
import circle_no from './images/circle_check_icon_no.png';

import styles from './style.scss';
import './layer.css';

class Coupon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadFlag: false,
            coupons: []
        };
    }

    // 发起请求
    componentWillMount() {
        setTimeout(() => {
            this.setState({
                loadFlag: true,
                coupons: [
                    { id: uuid(), checked: true },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false },
                    { id: uuid(), checked: false }
                ]
            });
        }, 1000);
    }

    // DOM装载完成
    componentDidMount() {
        const scroll = new BScroll('.full-layer__content');
    }

    render() {
        const { id, checkState, onSelectCouponHandle } = this.props;
        const { loadFlag, coupons } = this.state;
        let checkIcon = checkState ? circle_ok : circle_no;

        if(!loadFlag) {
            return (
                <div className="full-layer__loading">
                    <ReactLoading type="spin" style={ { width: '0.6667rem', height: '0.6667rem' } } />
                </div>
            )
        }

        return(
            <div className="coupon-list">
            <TransitionGroup>
                {
                    coupons.map((item) => {
                        return(
                            <CSSTransition
                                key={ item.id }
                                classNames="fadeUp"
                                appear={ true }
                                timeout={ 500 }
                            >
                                <div className={ styles.coupon }>
                                    <div className={ styles.coupon_aside }>
                                        <div className={ styles.coupon_amount }>￥15000</div>
                                        <div className={ styles.coupon_condition }>满20000元可用</div>
                                    </div>
                                    <div className={ styles.coupon_main }>
                                        <div className={ styles.coupon_hd }>
                                            <span onClick={ () => onSelectCouponHandle(id) } className={ styles.coupon_checkbox }>
                                                <img src={ checkIcon } alt="勾选"/>
                                            </span>
                                            <span className={ styles.coupon_title }>代金券</span>
                                            <span className={ styles.coupon_badge }>今天过期</span>
                                        </div>
                                        <div className={ styles.coupon_bd }>
                                            <div>投资期限=30天或60天</div>
                                            <div>除极计划外其余产品可用</div>
                                        </div>
                                        <div className={ styles.coupon_ft }>
                                            <span className={ styles.coupon_expire }>
                                            有效期至 2018-12-31
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
            </div> 
        )
    }
}

const ButtonFixed = ({ children }) => {
    return (
        <div>
            <div className="full-layer__fixed-sibling"></div>
            <div className="full-layer__fixed-bottom">
                { children }
            </div> 
        </div>
    )
}

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            investAmount: '',
            agree: true,
            couponFlag: false
        };
    }

    toggleAgree = () => {
        this.setState({
            agree: !this.state.agree
        });
    }

    investBalance = () => {
        this.setState({
            investAmount: 10000
        });
    }

    changeHandle = (e) => {
        let amout = e.target.value;
        this.setState({
            investAmount: amout
        });
    }

    submitHandle = () => {

        const keyStr = buildBuyAuthSign({
            user_name: '',
            operate_type: '',
            product_id: '',
            amount: '',
            act_code: '',
            rate_code: '',
            p2pSubjectId: '',
            p2pProductId: '',
            nbCode: ''
        });

        axios.get('/my/account_operate?=' + keyStr)
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });

    }

    toggleCouponHandle = () => {
        this.setState({
            couponFlag: !this.state.couponFlag
        });
    }

    selectCouponHandle = (id) => {
    }

    render() {
        const {investAmount, coupons, agree, couponFlag} = this.state;

        const agree_icon = agree ? checkbox_ok : checkbox_no;

        return (
            <div>

                <AnimateFullLayer flag={ couponFlag }>
                    <Coupon />
                    <ButtonFixed>
                        <button className="button" onClick={ this.toggleCouponHandle }>确定</button>
                    </ButtonFixed>
                </AnimateFullLayer>

                <div className={`${styles.l_box} ${styles.u_t1}`}>
                    <div className={`${styles.l_box_in} ${styles.u_c_g} ${styles.u_m_b} ${styles.u_t2}`}>
                        <span>剩余可购(元)</span>
                        <span>预期收益(元)</span>
                    </div>
                    <div className={`${styles.l_box_in} ${styles.u_m_b_c}`}>
                        <span>894,531</span>
                        <span>129.45+499</span>
                    </div>
                    <div className={styles.u_m_b_c}>
                        <div className={styles.l_box_inv}>
                            <label className={styles.m_label}>￥</label>
                            <input onChange={this.changeHandle} className={styles.m_input} value={investAmount} type="text" placeholder="100元起投"/>
                            <button onClick={this.investBalance} className={styles.m_button}>余额全投</button>
                        </div>
                    </div>
                    <div className={`${styles.l_box_in} ${styles.u_c_g} ${styles.u_t2}`}>
                        <span>可用余额0.00元</span>
                    </div>
                </div>
            
                <div className={`${styles.l_box} ${styles.u_t1}`}>
                    <div className={styles.l_box_in}>
                        <span>优惠券</span>
                        <div onClick={ this.toggleCouponHandle } className={ styles.l_flex }>
                            <span>有优惠券未使用</span>
                            <img className={ styles.m_arrow } src={ arrow_icon } alt="箭头"/>
                        </div>
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.u_t1}`}>
                    <div className={styles.l_box_in}>
                        <span>实际支付</span>
                        <span>9850元</span>
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.u_t2}`}>
                    <div className={styles.l_box_in}>
                    我有CF码，参加极路由0元购活动
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.u_t1}`}>
                    <div className={styles.l_box_in}>
                        <span>c457555</span>
                        <button className={styles.m_button}>如何获取CF码</button>
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.u_t2}`}>
                    <div className={styles.l_box_in}>
                        <label onClick={this.toggleAgree} style={{display: 'flex'}}>
                            <img className={styles.m_checkbox_icon} src={agree_icon} alt="checkbox"/>我已阅读并同意《i财富四方借款协议》
                        </label>
                    </div>
                </div>

                <div>
                    <div className={styles.m_fixed_fill}></div>
                    <div className="fixed-bottom">
                        <div className={styles.m_op}>
                            <div className={styles.m_op__service}>
                                <img className={styles.m_op__service_icon} src={service_icon} alt="客服图标"/>
                                客服
                            </div>
                            <button onClick={ this.submitHandle } className={styles.m_op__invest} to="/">余额不足，请充值14251元</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}