// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function About() {
	return (
		<div>
			<h1>소개 페이지입니다!</h1>
			<Link to="/">Link 태그로 홈 화면으로 이동</Link>
			<br />
			<a href="/">a 태그로 홈 화면으로 이동</a>
		</div>
	);
}
