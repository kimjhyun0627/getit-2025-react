// SayHello.jsx
import React from 'react';

export function SayHello({ isLoggedIn }) {
	return <div>{isLoggedIn && <p>환영합니다!</p>}</div>;
}
