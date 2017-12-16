import balanceReducer from './balance';
import balanceReducer2 from './balance';

describe('balanceReducer', () => {
	describe('when initializing', () => {
		const balance = 10;
		it('sets a balance', () => {
			expect(
				balanceReducer(undefined, { type: 'SET_BALANCE', balance })
			).toEqual(balance);
		});

		describe('then re-initializes', () => {
			it('reads the balance from cookies', () => {
				expect(balanceReducer2(undefined, {})).toEqual(balance);
			});
		});
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
