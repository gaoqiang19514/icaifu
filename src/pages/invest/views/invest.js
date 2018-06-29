import React, {Component} from 'react';
import styled from 'styled-components';

import Sort from './sort.js';
import JiPlan from './jiplan.js';
import Ienjoy from './ienjoy.js';
import Menu from '@/common/menu/';


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

export default () => {
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
						<JiPlan />
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
						<Ienjoy />
					</LayoutBoxBody>
				</StyleBox>
			</LayoutBox>

			<Menu />
		</div>		
	)
}