import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import calc_icon from './images/calc_icon.png';
import service_icon from './images/service_icon.png';
import arrow_icon from './images/arrow_icon.png';
import line from './images/line.png'

import styles from './style.scss';
import { LayoutFixedBottom, LayoutFixedSibling } from '@/common/commonStyled';

export default class extends Component {

    render() {
        const { id } = this.props.match.params;

        return (
            <div>
                
                <div className={ `${styles.l_box1} ${styles.u_m1} ${styles.u_b1}` }>

                    <div className={ `${styles.u_m2} ${styles.u_p1}` }>
                        <div className={ `${styles.l_flex5} ${styles.u_m1} ${styles.u_c3}` }>
                            <strong className={ `${styles.u_t1}` }>12.00</strong>
                            <strong className={ `${styles.u_t2}` }>% + 2.00%</strong>
                        </div>
                        <div className={ `${styles.l_flex2} ${styles.u_t5} ${styles.u_c2}` }>参考年化利率</div>
                    </div>

                    <div className={ `${styles.u_m1}` }>
                        <div className={ styles.l_flex6 }>
                            <div>
                                <div className={ `${styles.l_flex2} ${styles.u_t3} ${styles.u_m1}` }>90天</div>
                                <div className={ `${styles.l_flex2} ${styles.u_t5} ${styles.u_c2}` }>投资期限</div>
                            </div>
                            <div>
                                <div className={ `${styles.l_flex2} ${styles.u_t3} ${styles.u_m1}` }>15000元</div>
                                <div className={ `${styles.l_flex2} ${styles.u_t5} ${styles.u_c2}` }>起购金额</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={ `${styles.m_percent} ${styles.u_m1}` }>
                            <div className={styles.m_percent_bar} style={{width: '50%'}}></div>
                        </div>
                    </div>

                    <div>
                        <div className={ `${styles.l_flex1} ${styles.u_t6} ${styles.u_c2}` }>
                            <div>剩余额度：500,000,.00元</div>
                            <div>已售：50.00%</div>
                        </div>
                    </div>

                </div>

                <div className={ `${styles.l_box1} ${styles.u_m1} ${styles.u_b1}` }>
                    <div className={ `${styles.l_flex1} ${styles.u_t4}` }>
                        <div>上饶银行资金存管</div>
                        <div className={ styles.m_arrow_wrap }>
                            <img className={ styles.m_arrow } src={arrow_icon} alt="箭头"/>
                        </div>
                    </div>
                </div>

                <div className={ `${styles.l_box1} ${styles.u_m1} ${styles.u_b1}` }>
                    <div className={ `${styles.l_flex6} ${styles.u_c2} ${styles.u_m1} ${styles.u_t5}` }>
                        <div className={ styles.m_item }>今日投资</div>
                        <div className={ styles.m_item }>开始计息</div>
                        <div className={ styles.m_item }>产品到期</div>
                    </div>
                    <div className={ `${styles.u_m1} ${styles.l_flex2}` }>
                        <img className={ styles.m_line } src={line} alt="线条"/>
                    </div>
                    <div className={ `${styles.l_flex6} ${styles.u_c2} ${styles.u_t5}` }>
                        <div className={ styles.m_item }>03-19</div>
                        <div className={ styles.m_item }>预计03-05</div>
                        <div className={ styles.m_item }>预计04-24</div>
                    </div>
                </div>
                
                <div className={ `${styles.l_box1} ${styles.u_m1} ${styles.u_b1}` }>
                    <div>
                        <div className={ `${styles.l_flex7} ${styles.u_t5} ${styles.u_m1}` }>
                            <img className={ styles.m_calc } src={calc_icon} alt="计算器"/>
                            投资10,000元，90天到期后预计可赚
                        </div>
                        <div className={ `${styles.u_p2} ${styles.u_b3} ${styles.u_c3} ${styles.u_t2}` }>10,000.23元</div>
                    </div>
                </div>

                <div className={ `${styles.u_b1} ${styles.u_m1}` }>
                    <nav className={ styles.m_nav }>
                        <Link to="/">
                            <span>产品信息</span>
                            <img className={ styles.m_arrow } src={arrow_icon} alt="箭头"/>
                        </Link>
                        <Link to="/">
                            <span>产品介绍</span>
                            <img className={ styles.m_arrow } src={arrow_icon} alt="箭头"/>
                        </Link>
                        <Link to="/">
                            <span>风险控制</span>
                            <img className={ styles.m_arrow } src={arrow_icon} alt="箭头"/>
                        </Link>
                        <Link to="/">
                            <span>相关材料</span>
                            <img className={ styles.m_arrow } src={arrow_icon} alt="箭头"/>
                        </Link>
                        <Link to="/">
                            <span>投资记录</span>
                            <img className={ styles.m_arrow } src={arrow_icon} alt="箭头"/>
                        </Link>
                        <Link to="/">
                            <span>常见问题</span>
                            <img className={ styles.m_arrow } src={arrow_icon} alt="箭头"/>
                        </Link>
                    </nav>
                </div>

                <div>
                    <LayoutFixedSibling/>
                    <LayoutFixedBottom>
                    <div className={styles.m_op}>
                            <div className={styles.m_op__service}>
                                <img className={styles.m_op__service_icon} src={service_icon} alt="客服图标"/>
                                <div>客服</div>
                            </div>
                            <Link className={styles.m_op__invest} to={`/buy/${id}`}>立即投资</Link>
                        </div>
                    </LayoutFixedBottom>
                </div>
                
            </div>
        )
    }
}