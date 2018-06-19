import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import style from './style.scss';
import { view as Skeleton } from '@/common/skeleton';

const t1 = {
    fontSize: '0.64rem'
}
const t2 = {
    fontSize: '0.4rem'
}
const t3 = {
    fontSize: '0.2933rem'
}
const itemStyle = {
    ...t3,
    display: 'flex',
    justifyContent: 'space-between'
}
const cellStyle = {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto'
}
const cell1Style = {
    ...cellStyle,
    flexBasis: '50%'
}
const cell2Style = {
    ...cellStyle,
    flexBasis: '35%'
}
const cell3Style = {
    ...cellStyle,
    flexBasis: '15%'
}

const titleStyle = {
    fontSize: '0.3467rem',
	color: '#1a1b1c'
}

const Item = ({ pro_name, match, id, percent, timeLimit, interest_rate, gift, full }) => {
    if(gift){gift = `+${gift}%`}

    return(
        <Link to={`/buy/${id}`}>
            <div className={style.l_box}>
                <div className={style.l_box_hd}>
                    <h2 style={titleStyle}>{pro_name}</h2>
                </div>
                <div className={style.l_box_bd} style={itemStyle}>
                    <div style={cell1Style}>
                        <div className={style.l_c_t}>
                            <strong style={t1}>{interest_rate}%</strong>
                            <span style={t2}>{gift}</span>
                        </div>
                        <div className={`${style.sub_text}`}>预期年化利率</div>
                    </div>
                    <div style={cell2Style}>
                        <div className={style.l_c_t}>
                            <span style={t2}>期限{timeLimit}天</span>
                        </div>
                        <div className={`${style.sub_text}`}>投资金额{full}元</div>
                    </div>
                    <div style={cell3Style}>
                        <div className={style.l_c_t}>{percent}%</div>
                        <div className={style.l_c_b}>
                            <div className={style.percent}>
                                <div className={style.percent__bar} style={{width: `${percent}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ({data, match, ready}) => (

    <div className={style.l_box_wrap}>
        <Skeleton count={4} ready={ready}>
            {
                data.map((item, index) => (
                    <Item 
                        id={ item.pro_id } 
                        pro_name={ item.pro_name }
                        match={ match } 
                        timeLimit={ item.time_limit }
                        interest_rate={ item.interest_rate }
                        gift={ item.gift }
                        full={ item.full }
                        percent={ item.percent }
                        key={ item.pro_id }
                    />
                ))
            }
        </Skeleton>

    </div>  
)
