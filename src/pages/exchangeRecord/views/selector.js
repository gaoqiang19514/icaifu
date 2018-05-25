import React, { Component } from 'react'

class Selector extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<select onChange={ this.props.onChangeHandle } value={this.props.currentTypeValue}>
                    {
                        this.props.list.map(function(item, index) {
                            return <option key={index} value={item.value}>{item.title}</option>
                        })
                    }
                </select>
			</div>
		)
	}
}

export default Selector