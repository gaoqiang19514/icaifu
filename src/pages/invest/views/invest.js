import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ReactLoading from 'react-loading';

import style from './style.scss'
import {buildPublicSign} from '@/api/api.js'
import {actions as loadingActions} from '@/common/loading'

import Sort from './sort.js'
import JiPlan from './jiplan.js'
import Ienjoy from './ienjoy.js'
import Menu from '@/common/menu/'
import { view as Skeleton } from '@/common/skeleton';

let page = 1;
let flag = true;

class Invest extends Component {

	constructor(props) {
		super(props)

		this.state = {
			_loading: false,
			jiplanReady: false,
			ienjoyReady: false,
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
		const keyStr = buildPublicSign(page);

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
					ienjoyReady: true,
					ienjoyList: arr
				})
			}
        })
        .catch((error) => {
		})
		.finally(() => {
            flag = true;
            this.setState({
                _loading: false
            });
		});	
	}

	loadJiPlanList() {
		const keyStr = buildPublicSign()

		axios.get('/product/p2p_data_info?' + keyStr)
        .then((response) => {
            if(response.status === 200){
				if(!this.loadFlag){return}
				this.setState({
					jiplanReady: true,
					jiPlanList: response.data.items
				})
            }
        })
        .catch((error) => {
        })	
    }
    
	render = () => {

        const { jiplanReady, ienjoyReady, jiPlanList, ienjoyList, _loading } = this.state;

        let loadingStyle = {display: 'none'};
        if(_loading){
            loadingStyle = {display: 'block'};
        }

		return (
			<div>

				
				<div className={style.l_b}>
					<Sort />
				</div>

				<div className={style.l_b}>
					<div className={style.l_b_h}>
						<h2 className="label">极计划</h2>
					</div>
					<div className={style.l_b_b}>
						<Skeleton count={3} ready={jiplanReady}>
							<JiPlan data={ jiPlanList } match={ this.props.match } />
						</Skeleton>
					</div>
				</div>

				<div className={style.l_b}>
					<div className={style.l_b_h}>
						<h2 className="label">i享系列</h2>
					</div>
					<div className={style.l_b_b}>
						<Skeleton count={4} ready={ienjoyReady}>
							<Ienjoy data={ ienjoyList } match={ this.props.match } />
						</Skeleton>
					</div>
				</div>

                <ReactLoading style={loadingStyle} type="spin" className={style.loading} />

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