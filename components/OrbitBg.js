/** @format */

import styled from '@emotion/styled';
import React from 'react';
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import {
	DiAndroid,
	DiAngularSimple,
	DiApple,
	DiAws,
	DiChrome,
	DiCodeigniter,
	DiDrupal,
	DiGoogleCloudPlatform,
	DiJsBadge,
	DiRedis,
	DiRubyRough,
	DiSwift,
	DiTerminal,
	DiUbuntu,
	DiWindows,
	DiWordpress,
} from 'react-icons/di';
import { Container, FlexDiv } from './Containers';

const Orbit = styled.ul`
	border: solid 2.5px #000;
	position: relative;
	padding: 0;
	border-radius: 50%;
	list-style: none;
	box-sizing: border-box;
	width: ${(prop) => (prop.size ? `${prop.size}px` : '')};
	height: ${(prop) => (prop.size ? `${prop.size}px` : '')};
	margin: 0px auto;
	animation: ${(props) =>
		props.anim == 'clockwise'
			? `counterClockwiseRotate ${props.size / 10 - 20}s linear infinite`
			: `clockwiseRotate ${props.size / 10 - 20}s linear infinite`};
	opacity: 0.19;

	li {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		margin: -25px;
	}

	& > *:nth-of-type(1) {
		transform: ${(prop) =>
			prop.size
				? `rotate(98deg) translate(${prop.size / 2}px) rotate(-98deg)`
				: ''};
	}
	& > *:nth-of-type(2) {
		transform: ${(prop) =>
			prop.size
				? `rotate(190deg) translate(${prop.size / 2}px) rotate(-190deg)`
				: ''};
	}
	& > *:nth-of-type(3) {
		transform: ${(prop) =>
			prop.size
				? `rotate(285deg) translate(${prop.size / 2}px) rotate(-285deg)`
				: ''};
	}

	& > *:nth-of-type(4) {
		transform: ${(prop) =>
			prop.size
				? `rotate(380deg) translate(${prop.size / 2}px) rotate(-380deg)`
				: ''};
	}

	& > li > div {
		animation: ${(props) =>
			props.anim == 'clockwise'
				? `clockwiseRotate ${props.size / 10 - 20}s linear infinite`
				: `counterClockwiseRotate ${
						props.size / 10 - 20
				  }s linear infinite`};
	}
`;

const Icon = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	width: 60px;
	background-color: #fff;
	/* border: solid 1px #a5a5a5; */
	border-radius: 50px;
	padding: 0px;
	overflow: hidden;
`;

function OrbitBg() {
	return (
		<Container
			position='absolute'
			height='100vh'
			width='100vw'
			overflow='hidden'>
			<FlexDiv alignItem='center' justifyContent='center'>
				<Container position='absolute'>
					<Orbit size='500' anim='clockwise'>
						<li>
							<Icon>
								<FaReact size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<FaHtml5 size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiJsBadge size='35px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<FaCss3Alt size='40px' />
							</Icon>
						</li>
					</Orbit>
				</Container>
				<Container position='absolute'>
					<Orbit size='800'>
						<li>
							<Icon>
								<FaGithub size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiAndroid size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiApple size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiChrome size='40px' />
							</Icon>
						</li>
					</Orbit>
				</Container>
				<Container position='absolute'>
					<Orbit size='1100' anim='clockwise'>
						<li>
							<Icon>
								<DiAws size='50px' />
							</Icon>
						</li>

						<li>
							<Icon>
								<DiTerminal size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiUbuntu size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiGoogleCloudPlatform size='40px' />
							</Icon>
						</li>
					</Orbit>
				</Container>
				<Container position='absolute'>
					<Orbit size='1400'>
						<li>
							<Icon>
								<DiSwift size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiRubyRough size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiRedis size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiAngularSimple size='40px' />
							</Icon>
						</li>
					</Orbit>
				</Container>
				<Container position='absolute'>
					<Orbit size='1700' anim='clockwise'>
						<li>
							<Icon>
								<DiCodeigniter size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiDrupal size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiWordpress size='40px' />
							</Icon>
						</li>
						<li>
							<Icon>
								<DiWindows size='40px' />
							</Icon>
						</li>
					</Orbit>
				</Container>
			</FlexDiv>
		</Container>
	);
}

export default OrbitBg;
