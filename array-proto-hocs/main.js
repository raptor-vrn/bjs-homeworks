'use strict';

function compareArrays(arr1, arr2) {
    return arr1.length != arr2.length ? false : arr1.every((element, index) => element === arr2[index]);
}

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([1, 2, 3], [2, 3, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memoize(fn, limit) {
    const results = [];
    return function() {

        let search = results.find(item => compareArrays(item.args, Array.from(arguments)));

        if(search) {
            return search.result;
        } else {
            if(results.length === limit) {
                results.shift();
            }

            let calculation = fn(...arguments);

            results.push({
                args: Array.from(arguments),
                result: calculation,
            });

            return calculation;
        }
    }
}

const sum = (a, b) => a + b;
const mSum = memoize(sum, 2);

console.log(sum( 3, 4 ));
console.log(mSum(3, 4));