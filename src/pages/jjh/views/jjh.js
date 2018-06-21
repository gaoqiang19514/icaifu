import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import service_icon from './images/service_icon.png';
import arrow_icon from './images/arrow_icon.png';
import checkbox_ok from './images/checkbox_icon_ok.png';
import checkbox_no from './images/checkbox_icon_no.png';
import styles from './style.scss';

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            agree: false
        };
    }

    toggleAgree = () => {
        this.setState({
            agree: !this.state.agree
        });
    }

    render() {
        const { agree } = this.state;
        const { match } = this.props;
        const id = match.params.id;
 
        const agree_icon = agree ? checkbox_ok : checkbox_no;

        return (
            <div>

                <div className={ `${styles.l_box2} ${styles.u_m1} ${styles.u_b1}` }>
                    <div className={ `${styles.l_flex1} ${styles.u_c2} ${styles.u_t4} ${styles.u_m1} ` }>
                        <span>剩余可购(元)</span>
                        <span>预期收益(元)</span>
                    </div>
                    <div className={ `${styles.l_flex1} ${styles.u_t2} ${styles.u_m2}` }>
                        <strong>894,531</strong>
                        <strong className={ styles.u_c3 }>129.45+499</strong>
                    </div>
                    <div className={ `${styles.u_m2} ${styles.l_box3} ${styles.m_border}` }>
                        <div className={ `${styles.l_flex2} ${styles.u_c2} ${styles.u_t2} ${styles.u_m1}` }>投资金额(元)</div>
                        <strong className={ `${styles.l_flex2} ${styles.u_t1}` }>15000</strong>
                    </div>
                    <div className={ `${styles.u_c2} ${styles.u_t4}` }>
                        <span>可用余额0.00元</span>
                    </div>
                </div>

                <div className={ `${styles.l_box1} ${styles.u_m1} ${styles.u_b1}` }>
                    <Link to={{
                        pathname: `/invest/${id}`,
                        state: {
                            type: 'jjh'
                        }
                    }}>
                        <div className={ `${styles.l_flex1} ${styles.l_flex4}` }>
                            <span className={ styles.u_t3 }>项目详情</span>
                            <span className={ styles.m_arrow_wrap }><img className={ styles.m_arrow } src={ arrow_icon } alt="箭头"/></span>
                        </div>
                    </Link>
                </div>

                <div className={ `${styles.l_box1} ${styles.u_m1} ${styles.u_b1}` }>
                    <div className={ `${styles.l_flex1} ${styles.l_flex4}` }>
                        <input className={ styles.m_input } type="text" placeholder="请输入CF码"/>
                        <button className={ styles.m_button }>如何获取CF码</button>
                    </div> 
                </div>
                
                <div className={ styles.l_box1 }>
                    <label onClick={ this.toggleAgree } className={ `${styles.l_flex3} ${styles.u_c2} ${styles.u_t4}` }>
                        <img src={ agree_icon } alt="checkbox" className={ styles.m_checkbox }/>我已阅读并同意<a href="" className={ styles.u_c3 }>《i财富四方借款协议》</a>
                    </label>
                </div>
                
                <div>
                    <div className={styles.m_fixed_fill}></div>
                    <div className="fixed-bottom">
                        <div className={styles.m_op}>
                            <div className={styles.m_op__service}>
                                <img className={styles.m_op__service_icon} src={service_icon} alt="客服图标"/>
                                客服
                            </div>
                            <Link className={styles.m_op__invest} to="/">余额不足，请充值14251元</Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}