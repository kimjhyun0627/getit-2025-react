import React from 'react';
import './App.css';
import { ProfileCard } from './components/ProfileCard';
import { FavoriteFood } from './components/FavoriteFood';
import { Counter } from './components/Counter';
import { TextSaver } from './components/TextSaver';

function App() {
	return (
		<div>
			<Counter />
			<TextSaver />
		</div>
	);
}

export default App;
