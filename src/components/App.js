import React, { Component } from 'react';
import './App.css';
import Wallet from './Wallet';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>Loot Check</h2>
				<hr />
				<Wallet />
			</div>
		);
	}
}

export default App;
