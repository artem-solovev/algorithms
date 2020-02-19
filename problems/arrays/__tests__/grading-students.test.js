import expect from 'expect';
import each from 'jest-each';

import gradeStudents from '../grading-students';

const data = {
	valid: [
		[
			[73, 67, 38, 33], [75, 67, 40, 33],
			[73, 65, 38, 33], [75, 65, 40, 33],
			[99, 65, 38, 21], [100, 65, 40, 21],
		],
	],
};

describe('problems.arrays.gradeStudents', () => {
	each(data.valid).test(
		'should pass %o and gives us %s',
		(_input, _expected) => {
			expect(String(gradeStudents(_input))).toContain(String(_expected));
		},
	);
});
