/** @format */

import styled from '@emotion/styled';

export const Para = styled.p`
	font-size: ${(props) => (props.size ? props.size : '16px')};
	color: ${(props) => (props.color ? props.color : 'inherit')};
	text-align: ${(props) => (props.align ? props.align : 'inherit')};
	font-family: ${(props) => (props.family ? props.family : 'inherit')};
	font-weight: ${(props) => (props.weight ? props.weight : 'inherit')};
`;
