// Detail.jsx
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export function Detail() {
	const { id } = useParams();
	const { state } = useLocation();
	return (
		<div>
			<h1>상세 페이지</h1>
			<p>선택한 아이템의 ID: {id}</p>
			<p>이전 페이지: {state?.from}</p>
		</div>
	);
}
