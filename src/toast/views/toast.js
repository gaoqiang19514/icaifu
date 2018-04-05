import React, { Component } from 'react'

let baseIndex = 1

class Toast extends Component {
	constructor(props) {
		super(props)

		this.state = {
			toasts: [],
			zIndex: baseIndex,
		}

		this.add = this.add.bind(this)
		this.remove = this.remove.bind(this)
		this.renderToastItem = this.renderToastItem.bind(this)
		this.renderToasts = this.renderToasts.bind(this)

	}

	componentWillUnmount() {

	}

	add(msg = '提示不能为空', { expire = 5000, type = 'default', position = 'top', style={} }) {
		const zIndex = this.state.zIndex + 1
		const message = {
			id: new Date().getTime(),
			msg: msg,
			type: type,
			position: position,
			zIndex: zIndex,
			style: style,
			expire: expire
		}

		this.setState({
			toasts: this.state.toasts.push(message),
			zIndex: zIndex,
		}, () => this._clearOnExpire(message.id, expire))
	
		return message.id
	}

	remove(id) {
		this.setState({
			toasts: this.state.toasts.filter((item) => item.id !== id)
		})
	}

	renderToastItem() {
		return (<div>item</div>)
	}

	renderToasts() {
		return this.state.toasts.map((item, index) => this.renderToastItem(item, index))
	}

	render() {
		return(
			<div>{ this.renderToasts() }</div>
		)
	}
}

export default Toast