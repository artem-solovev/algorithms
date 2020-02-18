import expect from 'expect';
import each from 'jest-each';

import timeConversion from '../time-conversion';

const data = {
	valid: [
		[
			'07:05:45PM', '19:05:45',
		],
		[
			'12:05:45PM', '12:05:45',
		],
		[
			'04:05:45PM', '16:05:45',
		],
		[
			'00:05:45AM', '00:05:45',
		],
		[
			'12:05:45AM', '00:05:45',
		],
		[
			'12:05:45AM', '00:05:45',
		],
	],
};

describe('problems.time.timeConversion', () => {
	each(data.valid).test(
		'should pass %o and gives us %s',
		(_input, _expected) => {
			expect(String(timeConversion(_input))).toMatch(String(_expected));
		},
	);
});
