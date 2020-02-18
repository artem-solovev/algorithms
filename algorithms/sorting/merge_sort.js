let unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

/**
 * Returns merged sorted array
 *
 * @param {Array} a first array
 * @param {Array} b second array
 *
 * @return {Array} merged sorted array
 */
let merge = ( a, b ) => {
	let sorted = [];

	while ( a.length && b.length ) {
		if ( a[0] <= b[0] ) {
			sorted.push( a[0] );
			a = a.slice( 1 );
		} else {
			sorted.push( b[0] );
			b = b.slice( 1 );
		}
	}

	while ( a.length ) {
		let shift = a.shift();
		sorted.push( shift );
	}

	while ( b.length ) {
		let shift = b.shift();
		sorted.push( shift );
	}

	return sorted;
};

/**
 * Main point for algorihm (recursive)
 * Splits array and then call merge function where they will be sorted
 *
 * @param {Array} arr
 *
 * @return {Array} merged sorted array
 */
let sort = ( arr ) => {
	if ( arr.length < 2 ) return arr;

	let midpoint = parseInt( arr.length / 2 );
	let a = arr.slice( 0, midpoint );
	let b = arr.slice( midpoint, arr.length );

	return merge( sort( a ), sort( b ) );
};

console.log( mergesort( unsortedArr ) );
