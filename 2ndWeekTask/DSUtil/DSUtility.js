/*
* @file: DSUtility.js
* @description: created small functions which has been export to use.
*
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 22/1/2020
*/

module.exports = {
    /**
    * @description this method is used to return hash number
    * @param Integer number
    * @returns factorialnumber 
    */
    hash(strg){
        var str = Math.floor(strg%11);
        return str;
    },

     /**
    * @description this method is for find the facttorials fopr binary tree
    * @param Integer number
    * @returns factorialnumber 
    */
   factorial(num) {
    let fact = 1;;

    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
    },
    /**
    * @description this method is for binary trees
    * @param Integer number
    * @returns number of binary trees
    */
    binaryTree(nodes) {
        if (nodes >= 1 && nodes <= 85) {
            var no_of_trees = Math.floor((this.factorial(2 * nodes)) / (this.factorial(nodes + 1) *
                this.factorial(nodes)));
            console.log(no_of_trees);
        } else {
            console.log(" number should be between 1 to 1000");

        }

        return no_of_trees;
    },
}