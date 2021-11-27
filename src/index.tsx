import React from 'react';
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
import { fetchTodoCollection } from './store/todo.thunk';

// do on init
store.dispatch(fetchTodoCollection() as any);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
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
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
