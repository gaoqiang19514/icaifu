import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ name, match, id, percent, timeLimit, borrowingRate, gift, full }) => (
	<Link className="link" to={`${match.url}/${id}`}>
		<tr>
			<td>{ borrowingRate }% + {gift}元</td>
			<td>期限{ timeLimit }天</td>
			<td>{ percent }%</td>
		</tr>
		<tr>
			<td className="stt">预期年化利率</td>
			<td className="stt">投资金额{ full }元</td>
			<td>
				<div className="bar">
					<div className="bar__per" style={ { width: `${percent}%` } }></div>
				</div>
			</td>
		</tr>
	</Link>
)

export default ({ data, match }) => {
	return (
		<table className="table">
			{
				data.map((item, index) => {
					return (
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
					)
				})
			}
		</table>

	)
}