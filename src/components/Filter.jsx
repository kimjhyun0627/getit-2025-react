// Filter.jsx
import React, { useState } from 'react';

export function Filter() {
	const [query, setQuery] = useState('');
	const items = ['React', 'Vue', 'Angular'];

	const filteredItems = items.filter((item) =>
		item.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div>
			<input
				placeholder="검색어 입력"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<ul>
				{filteredItems.map((item, idx) => (
					<li key={idx}>{item}</li>
				))}
			</ul>
		</div>
	);
}
