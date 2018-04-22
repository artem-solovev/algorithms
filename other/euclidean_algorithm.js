/**
 * Recursive function of Euclidean algorithm
 *
 * @param {number} a first number
 * @param {number} b second number
 *
 * @return {number} GCD (greatest common divisor)
 */
let getGCD = ( a, b ) => {
    if ( a === 0 ) {
        return b;
    } else if ( b === 0 ) {
        return a;
    } else {
        let remainder = a % b;
        return getGCD( b, remainder );
    }
};

const a = 1680;
const b = 640;

console.log( getGCD( a, b ) ); // 80
