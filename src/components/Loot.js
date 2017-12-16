import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
	componentDidMount() {
		this.props.fetchBitcoin();
	}

	computeBitcoin() {
		const { bitcoin } = this.props;
		// if the length of the object keys is 0, we know it's empty
		if (Object.keys(bitcoin).length === 0) return '';

		return (
			// make it a number and remove all commas
			Math.round(
				this.props.balance /
					parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10) *
					10000000
			) / 10000000
		);
	}
	render() {
		return (
			<p className="bitcoin">
				Bitcoin balance: {this.computeBitcoin()}
			</p>
		);
	}
}

export default connect(state => state, { fetchBitcoin })(Loot);
