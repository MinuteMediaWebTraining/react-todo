import React, {  } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Main from './components/Main';
import AppBar from './components/AppBar';

const App: React.FC = () => {
	return (
		<Main>
			<AppBar />
			<Outlet />
		</Main>
	);
};

export default App;
