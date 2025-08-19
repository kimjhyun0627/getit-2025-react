// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
	const number = 2;
	return (
		<>
			<h1>홈 화면입니다!</h1>
			<Link to={`/about`}>Link 태그로 소개 페이지로 이동</Link>
			<br />
			<Link to={`/post/${number}`} state={{ from: 'home' }}>
				{number}번 글 보기
			</Link>
		</>
	);
}
