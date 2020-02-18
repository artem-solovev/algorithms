// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

/**
 * Counts biggest candles on the cake
 * @param {Array} candles
 * @return {int} count of biggest candles
 */
export default function(candles) {
	const candlesAtAll = candles.length;

	let sizeOfBiggestCandle = 0;
	let biggestCandlesAtAll = 0;

	for (let i = 0; i < candlesAtAll; i++) {
		const currentCandleSize = candles[i];

		// first iteration handling
		if (i === 0) {
			sizeOfBiggestCandle = currentCandleSize;
			++biggestCandlesAtAll;

			continue;
		}

		if (currentCandleSize > sizeOfBiggestCandle) {
			sizeOfBiggestCandle = currentCandleSize;
			biggestCandlesAtAll = 0;
			++biggestCandlesAtAll;

			continue;
		}

		if (currentCandleSize === sizeOfBiggestCandle) {
			++biggestCandlesAtAll;
		}
	}

	return biggestCandlesAtAll;
}
