const graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

// The costs table
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

// the parents table
const parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

let processed = [];

/**
 * Looking for node with lowest cost
 *
 * @param {Array} costs Array with costs
 *
 * @return {string} key of the node with lowest cost
 */
function findLowestCostNode( costs ) {
	let lowestCost = Infinity;
	let lowestCostNode = null;

	for ( let node in costs ) {
		let cost = costs[node];

		if ( cost < lowestCost && ( processed.indexOf( node ) === -1 ) ) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}

	return lowestCostNode;
}

let node = findLowestCostNode( costs );

while ( node !== null ) {
	let cost = costs[node];

	let neighbors = graph[node];

	Object.keys( neighbors ).forEach( function( n ) {
		let newCost = cost + neighbors[n];

		if ( costs[n] > newCost) {
			costs[n] = newCost;
			parents[n] = node;
		}
	});

	processed = processed.concat( node );

	node = findLowestCostNode( costs );
}

console.log( 'Cost from the start to each node:' );
console.log( costs ); // { a: 5, b: 2, fin: 6 }
