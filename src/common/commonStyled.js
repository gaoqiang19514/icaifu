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

export const LayoutFixedTop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;

export const LayoutFixedSibling = styled.div`
	height: 1.3333rem;
`;

export const LayoutFixedSiblingDouble = styled.div`
	height: 2.6666rem;
`;

// Style

export const StyleBg = styled.div`
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