import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ProfileCard } from './components/ProfileCard';
import { FavoriteFood } from './components/FavoriteFood';

function App() {
	const title = '첫 번째 React 앱';
	return (
		<div>
			<FavoriteFood rank={1} food="김치찌개" />
		</div>
	);
}

export default App;
