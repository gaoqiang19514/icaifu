import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

import {actions as loadingActions} from './../../../common/loading'

import style from './style.scss'

class Withdraw extends Component {

	constructor(props) {
		super(props)

		this.state = {
			active: '1'
		}

		this.onChangeHandle = this.onChangeHandle.bind(this)
	}

	onChangeHandle(e) {
		this.setState({
			active: e.target.value
		})
	}

	render() {

		const { active } = this.state

		return (
			<div>
				<div>
					<div className={style.item}>
						{
							active === '1' ? <span>本月还可以免费提现2次</span> : <span>本次提现由汇付天下收取</span>
						}
					</div>
					<div className={style.box}>
						<input className={style.input} />
					</div>
				</div>

				<div>
					<div className={style.item}>您的银行卡</div>
					<div className={style.box}>建设银行卡</div>
				</div>

				<div>
					<div className={style.item}>体现方式</div>
					<div>
						<div>
							<label className={style.box}>
								<input type="radio" name="type" checked={active === '1'} value="1" onChange={this.onChangeHandle} />
								<span>普通提现</span>
							</label>
						</div>
						<div>
							<label className={style.box}>
								<input type="radio" name="type" checked={active === '2'} value="2" onChange={this.onChangeHandle} />
								<span>即时提现</span>
							</label>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowLoading: () => {
            dispatch(loadingActions.showLoading())
        },
        onHideLoading: () => {
            dispatch(loadingActions.hideLoading())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw)

