const balance = (state = 0, action) => {
	switch (action.type) {
		case 'SET_BALANCE':
			return action.balance;
		case 'DEPOSIT':
			return state + action.deposit;
		case 'WITHDRAW':
			return state - action.withdraw;
		default:
			return state;
	}
};

export default balance;

// you're here.  state isn't making it to the App file
