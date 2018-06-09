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
                        return (
                            <div key={ item.pro_id }>
                                <div>{ item.pro_name }</div>
                                <div>{ item.amount }</div>
                                <div>{ item.available_amount }</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default IEnjoy