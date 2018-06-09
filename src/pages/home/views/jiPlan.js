import React, { Component } from 'react';

class JiPlan extends Component {
    
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
                                <div>{ item.full }</div>
                                <div>{ item.gift }</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default JiPlan