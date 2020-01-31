/*
* @file: Currying.js
* @description: Currying is a technique of evaluating multiple aruguments into a sequence of function with single argument.
*
* @author: Rima Das
* @version: 1.0
* @date: 31/1/2020
*/

let animals = function(a) {
    return function(b) {
        let result = `i love ${a} and ${b}`;
        console.log(result);
    }
}

let babykoala = animals('koalas');
babykoala('elephants');
babykoala('flamingo');
babykoala('kangaroo'); 