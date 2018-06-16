import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

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

const labelStyle = {
    color: '#fff',
    padding: '0.0667rem 0.2rem',
    display: 'inline-block',
    fontSize: '0.2667rem',
    borderRadius: '0.4rem'
}

const Item = ({ novice, novice_restrictions_desc, match, id, percent, timeLimit, borrowingRate, gift, full }) => {
    if(gift){
        gift = `+${gift}元`
    }
    let badgeStyle = {display: 'none'};
    if(novice){
        badgeStyle = {display: 'block'};
    }

    return (
        <Link to={`${match.url}/${id}`}>
            <div className={style.l_box}>
                <div style={badgeStyle} className={style.l_box_hd}>
                    <label className="gradient" style={labelStyle}>{novice_restrictions_desc}</label>
                </div>
                <div className={style.l_box_bd} style={itemStyle}>
                    <div style={cell1Style}>
                        <div className={style.l_c_t}>
                            <strong style={t1}>{borrowingRate}%</strong>
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

export default ({ data, match }) => (
    <div className={style.l_box_wrap}>
        {
            data.map((item, index) => (
                <Item 
                    id={ item.pro_id } 
                    novice={item.novice}
                    novice_restrictions_desc={ item.novice_restrictions_desc }
                    match={ match } 
                    timeLimit={ item.time_limit }
                    borrowingRate={ item.borrowing_rate }
                    gift={ item.gift }
                    full={ item.full }
                    percent={ item.percent }
                    key={ item.pro_id }
                />
            ))
        }
    </div>        
)