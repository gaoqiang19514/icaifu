import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Jiplan from './jiPlan.js';
import Ienjoy from './ienjoy.js';


// Layout

const LayoutBox = styled.div`
    margin-bottom: 0.2667rem;
    background: #fff;
`;

const LayoutBoxHead = styled.div`
    padding: 0.4rem;
`;

const LayoutBoxBody = styled.div`
	padding: 0 0.4rem;
`;

// Style

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

export default class extends Component {

	constructor(props) {
		super(props);
		this.state = {
			jiplan: [],
			ienjoy: []
		}
	}

	componentWillMount() {
		axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=home_product_list')
		.then((response) => {
			this.setState({
				ienjoy: response.data.list.ienjoy,
				jiplan: response.data.list.jiplan
			});
		})
		.catch((error) => {
		})
		.finally(() => {
		});
	}

	render() {
		const { jiplan, ienjoy } = this.state;
   
		return (
			<div>

				<LayoutBox>
					<LayoutBoxHead>
						<StyleLabel>极计划</StyleLabel>
					</LayoutBoxHead>
					<StyleLine />
					<LayoutBoxBody>
						<Jiplan list={ jiplan } />
					</LayoutBoxBody>
				</LayoutBox>

				<LayoutBox>
					<LayoutBoxHead>
						<StyleLabel>i享系列</StyleLabel>
					</LayoutBoxHead>
					<StyleLine />
					<LayoutBoxBody>
						<Ienjoy list={ ienjoy } />
					</LayoutBoxBody>
				</LayoutBox>

			</div>
		)
	}
}