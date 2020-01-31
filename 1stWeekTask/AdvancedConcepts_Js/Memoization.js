/*
* @file: Memoization.js
* @description: Memoization is a programming technique which attempts to increase a function's 
*              performance by caching its performance from previously computed results.
*
* @author: Rima Das
* @version: 1.0
* @date: 31/1/2020
*/

let fibo = (function(){
    let memo = {};
    function fi(n) {
        if(n < 0) { return -1 } else {
            let value = (n in memo) ? memo[n] : (!n || n === 1) ? 1 : fi(n-1) + fi(n - 2);
            memo[n] = value;
            return value;
        }
    }
    return fi;
})();
fibo()