/** @format */

import styled from '@emotion/styled';

export const Container = styled.div`
	margin: ${(props) => (props.margin ? props.margin : 'initial')};
	padding: ${(props) => (props.padding ? props.padding : 'initial')};
	background: ${(props) => (props.bg ? props.bg : 'initial')};
	width: ${(props) => (props.width ? props.width : 'initial')};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'initial')};
	height: ${(props) => (props.height ? props.height : 'initial')};
	max-height: ${(props) => (props.maxHeight ? props.maxHeight : 'initial')};
	gap: ${(props) => (props.gap ? props.gap : 'initial')};
	direction: ${(props) => (props.direction ? props.direction : 'initial')};
	align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'initial')};
	justify-self: ${(props) =>
		props.justifySelf ? props.justifySelf : 'initial'};
	border-bottom: ${(props) =>
		props.borderBottom ? props.borderBottom : 'none'};
	border-top: ${(props) => (props.borderTop ? props.borderTop : 'none')};
	border-left: ${(props) => (props.borderLeft ? props.borderLeft : 'none')};
	border-right: ${(props) => (props.borderRight ? props.borderRight : 'none')};
	box-shadow: ${(props) => (props.shadow ? props.shadow : 'none')};
	position: ${(props) => (props.position ? props.position : 'initial')};
	top: ${(props) => (props.top ? props.top : 'initial')};
	bottom: ${(props) => (props.bottom ? props.bottom : 'initial')};
	right: ${(props) => (props.right ? props.right : 'initial')};
	left: ${(props) => (props.left ? props.left : 'initial')};
	z-index: ${(props) => (props.zIndex ? props.zIndex : 'initial')};
	overflow: ${(props) => (props.overflow ? props.overflow : '')};
`;

export const FlexDiv = styled.div`
	display: flex;
	margin: ${(props) => (props.margin ? props.margin : 'initial')};
	padding: ${(props) => (props.padding ? props.padding : 'initial')};
	background: ${(props) => (props.bg ? props.bg : 'initial')};
	width: ${(props) => (props.width ? props.width : 'initial')};
	gap: ${(props) => (props.gap ? props.gap : 'initial')};
	direction: ${(props) => (props.direction ? props.direction : 'initial')};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'initial'};
	align-items: ${(props) => (props.alignItem ? props.alignItem : 'initial')};
	align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'initial')};
	justify-self: ${(props) =>
		props.justifySelf ? props.justifySelf : 'initial'};
	border-bottom: ${(props) =>
		props.borderBottom ? props.borderBottom : 'none'};
	border-top: ${(props) => (props.borderTop ? props.borderTop : 'none')};
	border-left: ${(props) => (props.borderLeft ? props.borderLeft : 'none')};
	border-right: ${(props) => (props.borderRight ? props.borderRight : 'none')};
`;
export const GridDiv = styled.div`
	display: Grid;
	margin: ${(props) => (props.margin ? props.margin : 'initial')};
	padding: ${(props) => (props.padding ? props.padding : 'initial')};
	background: ${(props) => (props.bg ? props.bg : 'initial')};
	width: ${(props) => (props.width ? props.width : 'initial')};
	grid-template-columns: ${(props) => (props.cols ? props.cols : '1fr')};
	gap: ${(props) => (props.gap ? props.gap : 'initial')};
	direction: ${(props) => (props.direction ? props.direction : 'initial')};
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : 'initial'};
	align-items: ${(props) => (props.alignItem ? props.alignItem : 'initial')};
	align-self: ${(props) => (props.alignSelf ? props.alignSelf : 'initial')};
	justify-self: ${(props) =>
		props.justifySelf ? props.justifySelf : 'initial'};
	border-bottom: ${(props) =>
		props.borderBottom ? props.borderBottom : 'none'};
	border-top: ${(props) => (props.borderTop ? props.borderTop : 'none')};
	border-left: ${(props) => (props.borderLeft ? props.borderLeft : 'none')};
	border-right: ${(props) => (props.borderRight ? props.borderRight : 'none')};
`;
