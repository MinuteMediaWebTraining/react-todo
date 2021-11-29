import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import TodoDashboard from './components/TodoDashboard';
import TodoDetails from './components/TodoDetails';
import { Provider } from 'react-redux';
import store from './store';
import { fetchTodoCollectionAsync } from './store/todoSlice';
import { useAppDispatch } from './store/hooks';
import { ThemeContext, themes } from './theme';

const AppWithRouting: React.FC = () => {
	const [theme, setTheme] = useState(themes.dark);
	const toggleTheme = () =>
		theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTodoCollectionAsync());
	}, [dispatch]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<BrowserRouter>
				<Routes>
					<Route path="about" element={<About />} />
					<Route path="todo" element={<App />}>
						<Route index element={<TodoDashboard />} />
						<Route path=":id" element={<TodoDetails />} />
					</Route>
					<Route path="/" element={<Navigate to="todo" />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<AppWithRouting />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
