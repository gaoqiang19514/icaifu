import React, {Component} from 'react'
import { Link } from 'react-router-dom'

const Item = ({ pro_name, match, id, percent, timeLimit, interest_rate, gift, full }) => {
    if(gift){
        gift = `+${gift}%`
    }
    return(
        <Link to={`${match.url}/${id}`}>
            <div>
                <div>{pro_name}</div>
                <div>
                    <div>{interest_rate}{gift}</div>
                    <div>期限{timeLimit}天</div>
                    <div>{percent}%</div>
                </div>
                <div>
                    <div>预期年化利率</div>
                    <div>投资金额{full}元</div>
                    <div>{percent}</div>
                </div>
            </div>
        </Link>
    )
}

export default class Ienjoy extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { data, match } = this.props

        return (
            <div>
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
            </div>  
        )
    }
}
