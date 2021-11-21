import React, {  } from 'react';
import { Outlet } from 'react-router';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';

const App: React.FC = () => {
	return (
		<Main>
			<NavBar />
			<Outlet />
		</Main>
	);
};

export default App;
