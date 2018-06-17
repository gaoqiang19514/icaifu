import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import styles from './style.scss';
import arrowSrc from './images/arrow_icon.png';
import { height } from 'window-size';

export default class extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {id} = this.props.match.params;

        return (
            <div>
                
                <div className={`${styles.l_box} ${styles.bg}`}>

                    <div style={{paddingTop: '1.4667rem'}}>
                        <div style={{textAlign: 'center'}}>
                            <div style={{fontSize: '0.6667rem'}}>7.00%</div>
                            <div>预期年华</div>
                        </div>
                    </div>

                    <div style={{width: '6.3333rem', margin: 'auto'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{textAlign: 'center'}}>
                                30天
                                <div>投资期限</div>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                100元
                                <div>起购金额</div>
                            </div>
                        </div>
                    </div>

                    <div style={{padding: '0.2667rem 0.4rem'}}>

                        <div className={styles.m_percent}>
                            <div className={styles.m_percent__bar} style={{width: '50%'}}></div>
                        </div>

                    </div>

                    <div style={{padding: '0.2667rem 0.4rem'}}>

                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div>剩余额度 500,000,.00元</div>
                            <div>已售 50.00%</div>
                        </div>
                        
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.bg}`}>
                    <div className={styles.l_box_in}>

                        <div className={styles.m_box}>
                            <img className={styles.m_box__icon} src={arrowSrc} alt="箭头"/>
                            <div style={{flexGrow: 1, marginLeft: '0.2667rem'}}>上饶银行资金存管</div>
                            <img className={styles.m_box__icon} src={arrowSrc} alt="箭头"/>
                        </div>

                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.bg} ${styles.l_box_in}`}>

                    <div className={styles.l_box_flex}>
                        <div className="u-tc">
                            <div>今日投资</div>
                            <div>03-19</div>
                        </div>
                        <div className="u-tc">
                            <div>开始计息</div>
                            <div>预计03-05</div>
                        </div>
                        <div className="u-tc">
                            <div>产品到期</div>
                            <div>预计04-24</div>
                        </div>
                    </div>

                </div>


                <div className={`${styles.l_box} ${styles.bg}`}>
                    <div className={styles.m_calc}>
                        <div className={styles.m_calc__title}>投资10,000元，30天到期后预计可赚</div>
                        <div className={styles.m_calc__btn}>57.53元</div>
                    </div>
                </div>

                <div className={`${styles.l_box} ${styles.bg}`}>
                    <nav className={styles.m_desc}>
                        <Link to="/">产品信息</Link>
                        <Link to="/">产品介绍</Link>
                        <Link to="/">风险控制</Link>
                        <Link to="/">相关材料</Link>
                        <Link to="/">投资记录</Link>
                        <Link to="/">常见问题</Link>
                    </nav>
                </div>

                <div>
                    <div className={styles.m_fixed_fill}></div>
                    <div className="fixed-bottom">
                        <div className={styles.m_op}>
                            <div className={styles.m_op__service}>客服</div>
                            <Link className={styles.m_op__invest} to={`/buy/${id}`}>立即投资</Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}