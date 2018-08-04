import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { fetchProductAsync } from '../actions';

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

class List extends Component {
	componentDidMount() {
		this.props.onFetchProductAsync();
	}

	render() {
		const { status, jiplan, ienjoy, ready } = this.props;

		return (
			<div>

				<LayoutBox>
					<LayoutBoxHead>
						<StyleLabel>极计划</StyleLabel>
					</LayoutBoxHead>
					<StyleLine />
					<LayoutBoxBody>
						<Jiplan ready={ ready } list={ jiplan } />
					</LayoutBoxBody>
				</LayoutBox>

				<LayoutBox>
					<LayoutBoxHead>
						<StyleLabel>i享系列</StyleLabel>
					</LayoutBoxHead>
					<StyleLine />
					<LayoutBoxBody>
						<Ienjoy ready={ ready } list={ ienjoy } />
					</LayoutBoxBody>
				</LayoutBox>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		ready: state.home.product.ready,
		status: state.home.product.status,
		ienjoy: state.home.product.list.ienjoy,
		jiplan: state.home.product.list.jiplan
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchProductAsync: () => {
			dispatch(fetchProductAsync());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(List);