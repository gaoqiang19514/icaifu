import React, { Component } from 'react';
import styled from 'styled-components';

import JiPlan from './jiplan.js';
import Ienjoy from './ienjoy.js';
import Menu from '@/common/menu/';

import { LayoutPrimaryBox, LayoutSecondBox, LayoutBoxBet, LayoutBoxWrap, StyleBg } from '@/common/commonStyled';

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

const StyleItem = styled.div`
    color: #9299a4;
    font-size: 0.3467rem;
    text-align: center;
    flex: 1;
    height: 1.1733rem;
    line-height: 1.1733rem;
`;


export default () => {
	return (
		<div>
			<LayoutBoxWrap>

				<StyleBg>
					<LayoutBoxBet>
						<StyleItem>默认</StyleItem>
						<StyleItem>收益率</StyleItem>
						<StyleItem>期限</StyleItem>
					</LayoutBoxBet>
				</StyleBg>

			</LayoutBoxWrap>

			<LayoutBoxWrap>

				<StyleBg>
					<LayoutPrimaryBox>
						<StyleLabel>极计划</StyleLabel>
					</LayoutPrimaryBox>
					<StyleLine />
					<LayoutSecondBox>
						<JiPlan />
					</LayoutSecondBox>
				</StyleBg>

			</LayoutBoxWrap>

			<LayoutBoxWrap>

				<StyleBg>
					<LayoutPrimaryBox>
						<StyleLabel>i享系列</StyleLabel>
					</LayoutPrimaryBox>
					<StyleLine />
					<LayoutSecondBox>
						<Ienjoy />
					</LayoutSecondBox>
				</StyleBg>
				
			</LayoutBoxWrap>

			<Menu />
		</div>		
	)
}