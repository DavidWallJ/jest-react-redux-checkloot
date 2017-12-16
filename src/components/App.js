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
		</div>
	);
};

export default App;
