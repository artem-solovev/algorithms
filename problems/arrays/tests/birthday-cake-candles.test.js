import each from 'jest-each';

import countBiggestCandles from '../birthday-cake-candles';

const data = {
	valid: [
		[
			[1, 2, 2, 4], 1,
		],
	],
};

describe('problems.arrays.countBiggestCandles', () => {
	each(data.valid).test(
		'should pass %o and gives us %s',
		(_input, _expected) => {
			expect(String(countBiggestCandles(_input))).toMatch(String(_expected));
		},
	);
});
