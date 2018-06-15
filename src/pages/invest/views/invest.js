import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ReactLoading from 'react-loading';

import './style.scss'
import {createSignature} from '@/api/api.js'
import {actions as loadingActions} from '@/common/loading'
import List from './list.js'
import Ienjoy from './ienjoy.js'
import Menu from '@/common/menu/'

let page = 1;
let flag = true;

class Invest extends Component {

	constructor(props) {
		super(props)

		this.state = {
            _loading: false,
			ienjoyList: [],
			jiPlanList: []
		}
	}

	componentWillMount() {
		this.loadFlag = true;
		this.loadIenjoy();
        this.loadJiPlanList();
    }
    
    componentDidMount() {
		window.addEventListener('scroll', this.scrollCheck);
    }
    
	componentWillUnmount  = () => {
		this.loadFlag = false;
		window.removeEventListener('scroll', this.scrollCheck);
    }
    
	scrollCheck = () => {
        if(!flag){return;}

        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(window.innerHeight >= document.body.scrollHeight - scrollTop){
			this.loadIenjoy();
		}
	}

	loadIenjoy() {
		const keyStr = createSignature(page);

        this.props.onShowLoading();
        flag = false;
        this.setState({
            _loading: true
        });
        axios.get('/product/p2p_subject_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				if(!this.loadFlag){return;}
				let arr = []
                arr = this.state.ienjoyList.concat(response.data.items)
                page++;
				this.setState({
					ienjoyList: arr
				})
			}
        })
        .catch((error) => {
		})
		.finally(() => {
            flag = true;
            this.props.onHideLoading();
            this.setState({
                _loading: false
            });
		});	
	}

	loadJiPlanList() {
		const keyStr = createSignature()

		axios.get('/product/p2p_data_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				if(!this.loadFlag){return}
				this.setState({
					jiPlanList: response.data.items
				})
            }
        })
        .catch((error) => {
        })	
    }
    
	render = () => {

        const { jiPlanList, ienjoyList, _loading } = this.state;

        let loadingStyle = {display: 'none'};
        if(_loading){
            loadingStyle = {display: 'block'};
        }

		return (
			<div>
				<div className="l-hd">
					<div className="l-hd-item">默认</div>
					<div className="l-hd-item">收益率</div>
					<div className="l-hd-item">期限</div>
				</div>
				<div className="l-box">
					<div className="l-box-hd">
						<h2 className="title">极计划</h2>
					</div>
					<div className="l-box-bd">
						<List data={ jiPlanList } match={ this.props.match } />
					</div>
				</div>
				<div className="l-box">
					<div className="l-box-hd">
						<h2 className="title">i享系列</h2>
					</div>
					<div className="l-box-bd">
						<Ienjoy data={ ienjoyList } match={ this.props.match } />
					</div>
				</div>

                <ReactLoading style={loadingStyle} type="spin" className="page-loading" />
				<Menu />
			</div>		
		)
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

export default connect(null, mapDispatchToProps)(Invest)