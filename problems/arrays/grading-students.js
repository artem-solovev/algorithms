// https://www.hackerrank.com/challenges/grading/problem

/**
 * Rounding grades
 * @param {Array<int>} grades
 * @return {Array<int>}
 */
export default function(grades) {
	const FAILING_GRADE = 40;
	const LOWEST_POSSIBLE_GRADE = 38;
	const ACCEPTABLE_OFFSET = 3;
	const MULTIPLIER = 5;

	const roundTo = (target, num) => Math.ceil(num / target) * target;

	return grades.map((currentGrade) => {
		if (currentGrade < LOWEST_POSSIBLE_GRADE) {
			return currentGrade;
		}

		if (currentGrade < FAILING_GRADE) {
			return FAILING_GRADE;
		}

		const nextMultipleOfTarget = roundTo(MULTIPLIER, currentGrade);
		const currentOffset = nextMultipleOfTarget - currentGrade;

		if (currentOffset < ACCEPTABLE_OFFSET) {
			return nextMultipleOfTarget;
		} else {
			return currentGrade;
		}
	});
};
