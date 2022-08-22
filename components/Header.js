/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { RiSearchEyeLine } from 'react-icons/ri';
import { Para } from './Typography';
import { Container, FlexDiv } from './Containers';

const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1600px;
	margin: 0 auto;
	padding: 15px 20px;
	background-color: rgba(0, 255, 255, 0.2);
	backdrop-filter: blur(3px);
	font-family: 'Silkscreen', cursive;
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	gap: 30px;
`;
const MenuItem = styled.li`
	list-style: none;
	position: relative;
	transition: 0.5s ease-in-out;
	cursor: pointer;
	::before {
		content: '';
		width: 0%;
		height: 4px;
		transition: 0.5s ease-in-out;
		border-bottom: 4px dotted #000;
		bottom: -5px;
	}
	&.active {
		::before {
			content: '';
			width: 100%;
			height: 4px;
			position: absolute;
			bottom: -5px;
			left: 0px;
			border-bottom: 4px dotted #000;
		}
	}

	:hover {
		::before {
			content: '';
			width: 100%;
			height: 4px;
			position: absolute;
			bottom: 0px;
			left: 0px;
			bottom: -5px;
			border-bottom: 4px dotted #000;
			transition: 0.3s ease-in-out;
		}
	}
`;

function Header() {
	return (
		<Container
			position='sticky'
			top='0px'
			zIndex='100'
			margin='-70px 0 0'
			shadow='rgba(0, 0, 0, 0.1) 0px 5px 10px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;'>
			<HeaderContainer>
				<div>
					<FlexDiv alignItem='center' gap='10px'>
						<RiSearchEyeLine size='40px' />{' '}
						<Para size='25px'>WEB INSPECT</Para>
					</FlexDiv>
				</div>
				<div>
					<Menu>
						<MenuItem className='active'>
							<Para size='20px'>HOME</Para>
						</MenuItem>
						<MenuItem>
							<Para size='20px'>ABOUT</Para>
						</MenuItem>
						<MenuItem>
							<Para size='20px'>THANKS</Para>
						</MenuItem>
					</Menu>
				</div>
			</HeaderContainer>
		</Container>
	);
}

export default Header;
