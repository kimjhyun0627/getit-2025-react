import { useEffect, useState } from 'react';

export function Timer() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// 안전한 업데이트: 이전 값을 기반으로 계산
			setSeconds((prev) => prev + 1);
		}, 1000);

		// 정리 함수: 컴포넌트가 사라지거나 다음 이펙트 전 실행
		return () => {
			clearInterval(interval);
		};
	}, []); // 처음 한 번만 실행

	return (
		<div>
			<h2>⏰ 경과 시간: {seconds}초</h2>
		</div>
	);
}
