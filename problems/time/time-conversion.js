// https://www.hackerrank.com/challenges/time-conversion/problem

/**
 * Converts am/pm time to military time
 * @param {String} incomingString - am/pm time
 * @return {String} military time
 */
export default function(incomingString) {
	const incomingStringLength = incomingString.length;

	const period = incomingString.substring(incomingStringLength - 2, incomingStringLength);
	const time = incomingString.substring(0, incomingStringLength - 2);
	const parts = time.split(':');
	const hours = parts[0];
	let militaryHours = 0;

	switch (period) {
		case 'AM':
			militaryHours = parts[0];

			if (hours === '12') {
				militaryHours = '00';
			}

			return `${militaryHours}:${parts[1]}:${parts[2]}`;
		case 'PM':
			if (hours === '12') {
				militaryHours = '12';
			} else {
				militaryHours = Number(parts[0]) + 12;
			}

			return `${militaryHours}:${parts[1]}:${parts[2]}`;
		default: return '';
	}
}
