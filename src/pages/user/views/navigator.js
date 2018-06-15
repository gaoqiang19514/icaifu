import React from 'react';
import { Link } from 'react-router-dom';
 
import './style.scss';

const subTextStyle ={
    fontSize: '0.2667rem',
    fontWeight: 'normal',
    color: '#898996',
    paddingTop: '0.2667rem'
};

export default () => {
    return (
        <div>
            <div className="record-nav">
                <Link to="/exchangeRecord">交易记录</Link>
                <Link to="/investRecord">投资记录</Link>
                <Link to="/voucher">回款计划</Link>
            </div>
            <div className="other-nav">
                <Link to="/voucher">
                    推荐
                    <div style={subTextStyle}>我的推荐</div>
                </Link>
                <Link to="/voucher">
                    优惠券
                    <div style={subTextStyle}>代金券 加息券</div>
                </Link>
                <Link to="/voucher">现金奖励
                    <div style={subTextStyle}>我的现金奖励</div>
                </Link>
            </div>
        </div>
    )
}