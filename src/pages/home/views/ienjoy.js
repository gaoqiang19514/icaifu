import React, { Component } from 'react';

class IEnjoy extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        const { arr } = this.props

        return (
            <div>
                {
                    arr.map((item, index) => {
                        let gift = '';
                        if(item.gift){
                            gift = `+${item.gift}%`;
                        }

                        return (
                            <div key={ item.pro_id }>
                                <div>
                                    <div>{item.interest_rate}%{gift}</div>
                                    <div>期限{item.time_limit}天</div>
                                    <div>{item.percent}%</div>
                                </div>
                                <div>
                                    <div>预期年化利率</div>
                                    <div>投资金额{item.full}元</div>
                                    <div>{item.percent}%</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default IEnjoy