import rootReducer from './index';

describe('rootReducer', () => {
	it('initializes the default state', () => {
		// a combination of the default states
		expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
	});
});
