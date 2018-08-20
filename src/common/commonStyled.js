import React from 'react'
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import 'boxicons'

// Layout

export const LayoutFlexBox = styled.div`
	display: flex;
`;

export const LayoutBoxBet = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LayoutBoxBetCenter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LayoutBoxCenter = styled.div`
    display: flex;
    justify-content: center;
`;

export const LayoutBoxVerticalCenter = styled.div`
    display: flex;
    align-items: center;
`;

export const LayoutBoxVerticalEnd = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const LayoutFixedTop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;

export const LayoutFixedBottom = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const LayoutFixedSibling = styled.div`
	height: 1.3333rem;
`;

export const LayoutFixedSiblingDouble = styled.div`
	height: 2.6666rem;
`;

export const LayoutTittleBox = styled.div`
    padding: 0.7333rem 0.5333rem 0.7333rem 0.5333rem;
`;

export const LayoutPrimaryBox = styled.div`
    padding: 0.4rem;
`;

export const LayoutSecondBox = styled.div`
    padding: 0 0.4rem;
`;

export const LayoutThirdBox = styled.div`
    padding: 0.4rem 0;
`;

export const LayoutBoxWrap = styled.div`
    margin-bottom: 0.2667rem;
`;

export const LayoutBoxWrapSec = styled.div`
    margin-bottom: .4rem;
`;

export const LayoutCellFirst = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 50%;
`;

export const LayoutCellSecond = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 35%;
`;

export const LayoutCellThird = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 15%;
`;

// Style

export const StyleBg = styled.div`
	background: #fff;
`;

export const StyleBgShadow = styled.div`
	background: #fff;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const StylePlaceHolder = styled.div`
	margin: 0.4rem;
	padding: 70px;
	background: #fff;
`;

export const StyleReactLoading = styled(ReactLoading)`
    margin: 0.4rem auto;
`;

export const StylePrimaryButton = styled.button`
    outline: none;
    width: 100%;
    border: 0;
    color: #fff;
    padding: 0;
    font-size: 0.4267rem;
    height: 1.3333rem;
    line-height: 1.3333rem;
    border-radius: 3px;
    font-weight: bold;
    letter-spacing: .2em;

    background-image: ${ props => props.primary ? 'linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #f7645b, #f7645b)' : 'gray' };
    box-shadow: ${ props => props.primary ? '0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75)' : 'none' };
`;

export const input = styled.input`
    border: 0;
    outline: 0;
    padding: 0;
    background: transparent;
`;


// base tag

export const button = styled.button`
    border: 0;
    outline: 0;
    padding: 0;
    background: transparent;
`;

export const Checkbox = ({ flag }) => (
    flag ? <box-icon name='checkbox'></box-icon> : <box-icon name='checkbox-checked'></box-icon>
)