import balanceReducer from './balance';

describe('balanceReducer', () => {
	it('sets a balance', () => {
		const balance = 10;

		expect(balanceReducer(undefined, { type: 'SET_BALANCE', balance })).toEqual(
			balance
		);
	});

	it('deposits into the balance', () => {
		const deposit = 10;
		const initialState = 5;

		expect(balanceReducer(initialState, { type: 'DEPOSIT', deposit })).toEqual(
			initialState + deposit
		);
	});

	it('withdraws money from balance', () => {
		const withdraw = 5;
		const initialState = 10;

		expect(
			balanceReducer(initialState, { type: 'WITHDRAW', withdraw })
		).toEqual(initialState - withdraw);
	});
});
