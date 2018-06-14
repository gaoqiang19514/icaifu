import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ name, match, id, percent, timeLimit, borrowingRate, gift, full }) => {
    if(gift){
        gift = `+${gift}元`
    }
    return (
        <Link to={`${match.url}/${id}`}>
            <div>
                <div>{borrowingRate}%{gift}</div>
                <div>期限{timeLimit}天</div>
                <div>{percent}%</div>
            </div>
            <div>
                <div>预期年化利率</div>
                <div>投资金额{full}元</div>
                <div>{percent}</div>
            </div>
        </Link>
    )
}


export default ({ data, match }) => {
	return (
        <div>
            {
                data.map((item, index) => (
                    <Item 
                        id={ item.pro_id } 
                        name={ item.pro_name }
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
}