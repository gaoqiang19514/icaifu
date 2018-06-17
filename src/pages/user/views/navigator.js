import React from 'react';
import { Link } from 'react-router-dom';
 
import styles from './style.scss';

export default () => {
    return (
        <div className={styles.l_box4}>

            <nav className={styles.m_nav}>
                <Link className={styles.m_link} to="/exchangeRecord">
                    <span className={styles.m_nav__icon_doc}></span>
                    交易记录
                </Link>
                <Link className={styles.m_link} to="/investRecord">
                    <span className={styles.m_nav__icon_record}></span>
                    投资记录
                </Link>
                <Link className={styles.m_link} to="/voucher">
                    <span className={styles.m_nav__icon_calendar}></span>
                    回款计划
                </Link>
            </nav>

            <nav className={styles.m_nav2}>
                <Link className={styles.m_nav2__link} to="/voucher">
                    推荐
                    <div className={styles.m_nav2__subText}>我的推荐</div>
                </Link>
                <Link className={styles.m_nav2__link} to="/voucher">
                    优惠券
                    <div className={styles.m_nav2__subText}>代金券 加息券</div>
                </Link>
                <Link className={styles.m_nav2__link} to="/voucher">现金奖励
                    <div className={styles.m_nav2__subText}>我的现金奖励</div>
                </Link>
            </nav>

        </div>
    )
}