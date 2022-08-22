/** @format */
/* eslint-disable @next/next/no-page-custom-font */

import styled from '@emotion/styled';
import Head from 'next/head';
import { Container, FlexDiv } from '../components/Containers';
import Header from '../components/Header';
import OrbitBg from '../components/OrbitBg';
import { BiSearchAlt } from 'react-icons/bi';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { Para } from '../components/Typography';
import { FaGlobe } from 'react-icons/fa';
import Lottie from 'lottie-react';
import searchingAnimation from '../lottie/41252-searching-radius.json';

const SearchContainer = styled.div`
	display: flex;
	gap: 10px;
	border: solid 2.5px #ddd;
	border-radius: 5px;
	align-items: center;
	padding: 10px;
	backdrop-filter: blur(3px);
	z-index: 999;
	background-color: rgba(0, 255, 255, 0.2);
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
	width: ${(props) => (props.active ? '40vw;' : '20vw')};
	height: 40px;
	font-size: 22px;
	border: none;
	background: none;
	transition: 0.3s ease;
	padding: 0 10px 0 0;
	:focus-visible {
		outline: none;
		width: 40vw;
	}
`;

export default function Home() {
	const [url, setUrl] = useState('');
	const [result, setResult] = useState(false);
	const [invalidUrl, setInvalidUrl] = useState(false);
	const [data, setData] = useState('');

	function removeHttp(url) {
		return url
			.replace(/(^\w+:|^)\/\//, '')
			.replace(/\?.*/, '')
			.replace(/\/$/, '');
	}
	function isValidURL(string) {
		var res = string.match(
			/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
		);
		return res !== null;
	}

	const getWebsiteDetail = async (e) => {
		e.preventDefault();
		const sanitizedUrl = removeHttp(url);
		console.log(sanitizedUrl);
		if (isValidURL(`https://${sanitizedUrl}`)) {
			setResult(`https://${sanitizedUrl}`);
			const req = await fetch(`/api/url?url=https://${sanitizedUrl}`);
			const res = await req.json();
			if (res.status === 200) {
				let temp = [];
				res.technologies.map((technologie) =>
					technologie.categories.map((categorie) => temp.push(categorie))
				);
				console.log(temp);
				let uniqueObjArray = [
					...new Map(temp.map((item) => [item['slug'], item])).values(),
				];
				let groupedData = uniqueObjArray.map((categorie) => {
					return {
						name: categorie.name,
						slug: categorie.slug,
						technologies: res.technologies.filter((technologies) => {
							let tempData = technologies.categories.map(
								(technologie) => technologie.slug === categorie.slug
							);
							return tempData.includes(true);
						}),
					};
				});
				setData(groupedData);
				console.log('uniqueObjArray', groupedData);

				// setData(res);
			} else {
				console.log(res);
			}
		} else {
			setInvalidUrl(true);
		}
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
				<Container height='100vh' overflow='hidden'>
					<OrbitBg />
					{!result && (
						<Container
							position='absolute'
							top='50%'
							left='50%'
							style={{ transform: 'translate(-50%,-50%)' }}>
							<form onSubmit={getWebsiteDetail}>
								<SearchContainer>
									<BiSearchAlt size='30px' color='#a5a5a5' />
									<SearchInput
										active={url}
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
								{invalidUrl && (
									<FlexDiv alignItem='center'>
										<MdClose size='30px' color='#e62114' />
										<Para size='20px' padding='5px' color='#e62114'>
											Invalid URL
										</Para>
									</FlexDiv>
								)}
							</form>
						</Container>
					)}
					{result && (
						<Container
							maxWidth='1600px'
							padding='100px 100px 0'
							margin='0 auto'
							maxHeight='calc(100vh - 100px)'>
							<FlexDiv gap='10px' justifyContent='center'>
								<FaGlobe size='25px' />
								<Para size='20px' family="'Silkscreen', cursive">
									{result}
								</Para>
							</FlexDiv>
							<FlexDiv justifyContent='center' padding='60px'>
								<Lottie
									animationData={searchingAnimation}
									loop={true}
								/>
							</FlexDiv>
						</Container>
					)}
				</Container>
			</Container>
		</>
	);
}
