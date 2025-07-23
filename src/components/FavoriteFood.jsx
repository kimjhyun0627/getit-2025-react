// FavoriteFood.jsx
import React from 'react';

export function FavoriteFood(props) {
	return (
		<div>
			<p>
				제가 {props.rank}번째로 좋아하는 음식은 {props.food}입니다!
			</p>
		</div>
	);
}
