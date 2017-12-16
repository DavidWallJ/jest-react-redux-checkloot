import React from 'react';
import './App.css';
import Wallet from './Wallet';
import Loot from './Loot';

const App = () => {
	return (
		<div className="App">
			<h2>Wallet</h2>
			<hr />
			<Wallet />
			<hr />
			<Loot />
			<p className="jestCoverage">
				* Fully Jest tested to a coverage of %95.12
			</p>
			<a
				className="githubLink"
				href="https://github.com/DavidWallJ/jest-react-redux-checkloot"
				target="_blank"
			>
				View the code on Github
			</a>
		</div>
	);
};

export default App;
