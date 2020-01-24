/*
* @file: BalancedParentheses.js
* @description: Read in arithmetic expression and write a stack class 
*            to push open parentheses '{' and pop closed parentheses '}'
*
* @author: Rima Das
* @version: 1.0
* @date: 20/1/2020
*/ 
var Stk = require('../DSUtil/Stack');
var stack = new Stk.Stack;
var read = require('readline-sync');
var str = read.question("Enter a character including parenthese, brackets, curly braces: ");

 let isMatchingBrackets = function (str) {
    try {
    stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0; i < str.length; i++) {

        // If character is an opening brace add it to a stack
        if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
            stack.push(str[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return [stack.length,true];

    
    } catch (error) {
        return error;
    }
 }

 console.log(isMatchingBrackets(str));
