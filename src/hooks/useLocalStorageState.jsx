import { useState, useEffect } from "react";

export default function UseLocalStorageState(key, defaultVal) {
	// make piece of state, based off of value in localstorage (or default)
	const [state, setState] = useState(() => {
		let val;
		try {
			val = JSON.parse(
				window.localStorage.getItem(key) || String(defaultVal)
			);
		} catch (e) {
			val = defaultVal;
		}
		return val;
	});

	// use useEffect to update localstorage when state changes
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state]);

	return [state, setState];
}

// use case:
// const [todos, setTodos] = useLocalStorageState('todos', []);
