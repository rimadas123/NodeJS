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
    * @param number
    * @returns number 
    */
    hash(strg){
        var str = Math.floor(strg%11);
        return str;
    },

     /**
    * @description this method is to find the factorial for binary tree
    * @param number
    * @returns number
    */
   factorial(num) {
    let fact = 1;

    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
    },
    /**
    * @description this method is to calculate binary trees
    * @param number
    * @returns number 
    */
    binaryTree(nodes) {
        if (nodes >= 1 && nodes <= 85) {
            let no_of_tree = Math.floor((this.factorial(2 * nodes)) / (this.factorial(nodes + 1) *
                this.factorial(nodes)));
            console.log(no_of_tree);
        } else {
            console.log(" number should be between 1 to 1000");

        }

        return no_of_tree;
    },

    calendar(month,year) {

        
    }
}