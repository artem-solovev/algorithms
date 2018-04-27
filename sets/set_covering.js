let statesNeeded = new Set( ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'] );

const stations = {};
stations['kone'] = new Set( ['id', 'nv', 'ut'] );
stations['ktwo'] = new Set( ['wa', 'id', 'mt'] );
stations['kthree'] = new Set( ['or', 'nv', 'ca'] );
stations['kfour'] = new Set( ['nv', 'ut'] );
stations['kfive'] = new Set( ['ca', 'az'] );

const finalStations = new Set();

while ( statesNeeded.size ) {
	let bestStation = null;
	let statesCovered = new Set();

	for ( let station in stations ) {
		let states = stations[station];

		let covered = new Set( [...statesNeeded].filter( ( el ) => {
			return states.has( el );
		}));

		if ( covered.size > statesCovered.size ) {
			bestStation = station;
			statesCovered = covered;
		}
	}

	// Remove covered stations from list of needed stations
	statesNeeded = new Set(
		[...statesNeeded].filter( ( el ) => {
			return !statesCovered.has( el );
		} )
	);

	finalStations.add( bestStation );
}

console.log( finalStations ); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }/*  */
