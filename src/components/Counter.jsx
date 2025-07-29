import React, { useState } from 'react';

export function Counter() {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);

	return (
		<div>
			<h1>카운터: {count}</h1>
			<button onClick={increment}>+1</button>
			<button onClick={decrement}>-1</button>
		</div>
	);
}
