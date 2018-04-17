/**
 * Finds smallest element of an aray
 * @param {Array} arr array for searching
 * @return {number} index of the smallest element in array
 */
const findSmallest = ( arr ) => {
    let smallest = arr[0];
    let smallestIndex = 0;
    let arrLen = arr.length;

    for ( let i = 0; i < arrLen; i++ ) {
        if ( arr[i] < smallest ) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
};

/**
 * Sorts an array of numbers
 * @param {Array} arr An array of numbers
 * @return {Array} New sorted array
 */
const selectionSort = ( arr ) => {
    let arrCopy = arr.slice( arr );
    let arrNew = [];
    let arrLen = arrCopy.length;

    for ( let i = 0; i < arrLen; i++ ) {
        smallestIndex = findSmallest( arrCopy );
        arrNew.push( arrCopy.splice( smallestIndex, 1 )[0] );
    }

    return arrNew;
};

let arr = [5, 3, 6, 2, 10];

console.log( selectionSort(arr) );
