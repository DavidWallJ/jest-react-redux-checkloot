import * as actions from './balance';

it('creates an action to set the balance', () => {
	const balance = 0;

	const expectedAction = { type: 'SET_BALANCE', balance };

	expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
	const deposit = 10;

	const expectedAction = { type: 'DEPOSIT', deposit };

	expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
	const withdraw = 10;

	const expectedAction = { type: 'WITHDRAW', withdraw };

	expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});
