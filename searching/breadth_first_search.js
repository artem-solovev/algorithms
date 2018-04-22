const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

/**
 * Checks whether the name contains the required symbol or not
 *
 * @param {string} name
 * @param {string} char
 *
 * @return {boolean}
 */
let personIsSeller = ( name, char ) => {
    return name[name.length - 1] === char;
};

let search = ( graph, name, callback ) => {
    let searchQueue = [].concat( graph[name] );
    let searched = [];

    while ( searchQueue.length ) {
        let person = searchQueue.shift();
        if ( searched.indexOf( person ) === -1 ) {
            if ( callback( person, 'm' ) ) {
                console.log( person + ' is a mango seller.' );
                return true;
            } else {
                searchQueue = searchQueue.concat( graph[person] );
                searched.push( person );
            }
        }
    }

    return false;
};

search( graph, 'you', personIsSeller ); // thom is a mango seller.
