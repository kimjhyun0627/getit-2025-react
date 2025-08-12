import React from 'react';
import { useState, useEffect } from 'react';

export function RandomWord() {
	const [word, setWord] = useState('');
	const [author, setAuthor] = useState('');
	const [authorProfile, setAuthorProfile] = useState('');

	useEffect(() => {
		async function load() {
			try {
				const res = await fetch(
					'https://korean-advice-open-api.vercel.app/api/advice'
				);
				const data = await res.json();
				setWord(data.message);
				setAuthor(data.author);
				setAuthorProfile(data.authorProfile || '');
			} catch (e) {
				console.error(e);
			}
		}
		load();
	}, []);

	return (
		<div>
			<h1>🃏 랜덤 명언</h1>
			<h2>{word}</h2>
			<p>
				{author} ({authorProfile})
			</p>
		</div>
	);
}
