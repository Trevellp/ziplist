"use strict";
// Function using a loop
function zipList(list1, list2) {
    const zipped = [];
    for (let i = 0; i < list1.length; i++) {
        zipped.push(list1[i], list2[i]);
    }
    return zipped;
}
// Functional version using array methods
function zipListTheFunctionalWay(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Both lists must have the same length');
    }
    return list1.reduce((acc, item, index) => {
        acc.push(item, list2[index]);
        return acc;
    }, []);
}
// Testing the functions
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
