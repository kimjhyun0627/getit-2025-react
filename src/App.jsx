import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const title = '첫 번째 React 앱';
	return (
		<div>
			<h1>안녕하세요, {title}입니다!</h1>
			<p>이건 JSX 문법으로 만든 문장이에요.</p>
		</div>
	);
}

export default App;
