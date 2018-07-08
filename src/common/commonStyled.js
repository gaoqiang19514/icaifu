import styled from 'styled-components';
import ReactLoading from 'react-loading';

// Layout

export const LayoutFlexBox = styled.div`
	display: flex;
`;

export const LayoutBoxBet = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LayoutBoxVerticalCenter = styled.div`
    display: flex;
    align-items: center;
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

export const LayoutBoxWrap = styled.div`
    margin-bottom: 0.2667rem;
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
    background-image: linear-gradient(90deg, #f94c50 0%, #f77366 100%), linear-gradient( #f7645b, #f7645b);
    border-radius: 0.6667rem;
    box-shadow: 0rem 0.0267rem 0.1067rem 0rem rgba(249,82,83,0.75);
`;

export const Input = styled.input`
    border: 0;
    outline: 0;
    padding: 0;
`;