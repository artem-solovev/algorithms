const quickSort = ( arr ) => {
    if ( arr.length < 2 ) return arr;

    let pivot = arr[0];

    let smallerPart = arr.slice( 1 ).filter( ( el ) => { return el <= pivot } );

    let biggerPart = arr.slice( 1 ).filter( ( el ) => { return el > pivot } );

    return quickSort( smallerPart ).concat( [pivot], quickSort( biggerPart ) );
};


let arr = [5, 3, 6, 2, 10];

console.log( quickSort(arr) );
