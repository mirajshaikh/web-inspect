/** @format */
/* eslint-disable @next/next/no-page-custom-font */

import styled from '@emotion/styled';
import Head from 'next/head';
import { Container } from '../components/Containers';
import Header from '../components/Header';
import OrbitBg from '../components/OrbitBg';
import { BiSearchAlt } from 'react-icons/bi';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { useState } from 'react';

const SearchContainer = styled.div`
	display: flex;
	gap: 10px;
	border: solid 2.5px #ddd;
	border-radius: 5px;
	align-items: center;
	padding: 10px;
	backdrop-filter: blur(5px);
	z-index: 999;
	box-shadow: rgba(0, 0, 0, 0.1) 5px 5px 10px -3px,
		rgba(0, 0, 0, 0.05) 5px 5px 6px -2px;

	button {
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
	}
`;
const SearchInput = styled.input`
	width: 15vw;
	height: 40px;
	font-size: 22px;
	border: none;
	background: none;
	transition: 0.3s ease;
	padding: 0 10px 0 0;
	:focus-visible {
		outline: none;
		width: 30vw;
	}
`;

export default function Home() {
	const [url, setUrl] = useState('');
	const getWebsiteDetail = async (e) => {
		e.preventDefault();
		alert(url);
		const req = await fetch(`/api/url?url=${url}`);
		const res = await req.json();
		console.log(res);
	};
	return (
		<>
			<Head>
				<title>Web Inspect</title>
				<meta
					name='description'
					content='Web Inspector - Analayze web technologies'
				/>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Silkscreen&display=swap'
					rel='stylesheet'></link>
			</Head>
			<Header />
			<Container>
				<Container height='100vh'>
					<OrbitBg />
					<Container
						position='absolute'
						top='50%'
						left='50%'
						style={{ transform: 'translate(-50%,-50%)' }}>
						<form onSubmit={getWebsiteDetail}>
							<SearchContainer>
								<BiSearchAlt size='30px' color='#a5a5a5' />
								<SearchInput
									type='text'
									placeholder='Enter Website URL'
									onChange={(e) => setUrl(e.target.value)}
								/>
								{url && (
									<button type='submit'>
										<BsArrowRightSquareFill
											size='35px'
											color='#000'
										/>
									</button>
								)}
							</SearchContainer>
						</form>
					</Container>
				</Container>
			</Container>
		</>
	);
}
