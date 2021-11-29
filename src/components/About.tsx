import React from 'react';
import Main from './Main';
import AppBar from './AppBar';

const About: React.FC = () => {
	return (
		<Main>
			<AppBar />
			<h2>About ToDo App</h2>
			<p>This is a ToDo App</p>
			<p>You can load initial todo list from file and manipulate them</p>
			<p>Use the navigation bar to change page</p>
		</Main>
	);
};

export default About;
