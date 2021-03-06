import { read_cookie, bake_cookie } from 'sfcookies';

const balance = (state = 0, action) => {
	let balance;

	switch (action.type) {
		case 'SET_BALANCE':
			balance = action.balance;
			break;
		case 'DEPOSIT':
			balance = state + action.deposit;
			break;
		case 'WITHDRAW':
			balance = state - action.withdraw;
			break;
		default:
			balance = parseInt(read_cookie('BALANCE_COOKIE'), 10) || state;
	}

	bake_cookie('BALANCE_COOKIE', balance);

	return balance;
};

export default balance;
