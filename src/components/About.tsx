import React from 'react';
import Main from './Main';
import NavBar from './NavBar';

const About: React.FC = () => {
	return (
		<Main>
			<NavBar />
			<h2>About ToDo App</h2>
			<p>This is a ToDo App</p>
			<p>You can load initial todo list from file and manipulate them</p>
			<p>Use the navigation bar to change page</p>
		</Main>
	);
};

export default About;
