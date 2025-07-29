import React, { useState } from 'react';

export function TextSaver() {
	const [input, setInput] = useState('');
	const [saved, setSaved] = useState('');

	const handleSave = () => setSaved(input);

	return (
		<div>
			<input
				type="text"
				placeholder="이름을 입력하세요"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleSave}>저장</button>
			{saved && <p>안녕하세요, 저는 {saved}입니다!</p>}
		</div>
	);
}
