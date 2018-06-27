import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

import Sort from './sort.js';
import JiPlan from './jiplan.js';
import Ienjoy from './ienjoy.js';
import Menu from '@/common/menu/';
import { view as Skeleton } from '@/common/skeleton';


// Layout

const LayoutBox = styled.div`
	margin-bottom: 0.2667rem;
`;

const LayoutBoxHead = styled.div`
    padding: 0.4rem;
`;

const LayoutBoxBody = styled.div`
	padding: 0 0.4rem;
`;


// Style

const StyleBox = styled.div`
	background: #fff;
`;

const StyleLabel = styled.label`
	color: #fff;
	display: inline-block;
	font-size: 0.3467rem;
	padding: 0.1067rem 0.6rem;
	transform: skewX(-15deg);
	border-radius: 3px;
	background-image: linear-gradient(90deg, #fb7850 0%, #ff5b33 100%), linear-gradient( #ff5b33, #ff5b33);
	box-shadow: 0rem 0.04rem 0.1067rem 0rem rgba(255, 91, 51, 0.75);
`;

const StyleLine = styled.div`
	height: 1px;
	background: #eaeaea;
	transform: scaleY(.5);
`;

const StyleReactLoading = styled(ReactLoading)`
    margin: auto;
    width: 30px;
    height: 30px;
    margin-bottom: 20px;
`;

let page = 1;
let flag = true;

export default class extends Component {

	constructor(props) {
		super(props);

		this.state = {
			_loading: false,
			jiplanReady: false,
			ienjoyReady: false,
			ienjoyList: [],
			jiPlanList: []
		}
	}

	componentWillMount() {
		this.loadIenjoy();
        this.loadJiPlanList();
    }
    
    componentDidMount() {
		window.addEventListener('scroll', this.scrollCheck);
    }
    
	componentWillUnmount  = () => {
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
        flag = false;
        this.setState({
            _loading: true
        });
        axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=product_ienjoy')
        .then((response) => {
				let arr = [];
                arr = this.state.ienjoyList.concat(response.data.list);
                page++;
				this.setState({
					ienjoyReady: true,
					ienjoyList: arr
				});
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
		axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=product_jiplan')
        .then((response) => {
			this.setState({
				jiplanReady: true,
				jiPlanList: response.data.list
			})
        })
        .catch((error) => {
		})
		.finally(() => {
		});
    }
    
	render = () => {

        const { jiplanReady, ienjoyReady, jiPlanList, ienjoyList, _loading } = this.state;

        let  loadingStyle  = {display: 'none'};
        if(_loading){
             loadingStyle  = {display: 'block'};
        }

		return (
			<div>

				<LayoutBox>
					<StyleBox>
						<Sort />
					</StyleBox>
				</LayoutBox>

				<LayoutBox>
					<StyleBox>

						<LayoutBoxHead>
							<StyleLabel>极计划</StyleLabel>
						</LayoutBoxHead>

						<StyleLine />

						<LayoutBoxBody>
							<Skeleton count={3} ready={jiplanReady}>
								<JiPlan data={ jiPlanList } match={ this.props.match } />
							</Skeleton>
						</LayoutBoxBody>

					</StyleBox>
				</LayoutBox>

				<LayoutBox>
					<StyleBox>

						<LayoutBoxHead>
							<StyleLabel>i享系列</StyleLabel>
						</LayoutBoxHead>

						<StyleLine />

						<LayoutBoxBody>
							<Skeleton count={4} ready={ienjoyReady}>
								<Ienjoy data={ ienjoyList } match={ this.props.match } />
							</Skeleton>
						</LayoutBoxBody>

					</StyleBox>
				</LayoutBox>

                <StyleReactLoading style={ loadingStyle } type="spin" />

				<Menu />
			</div>		
		)
	}
}