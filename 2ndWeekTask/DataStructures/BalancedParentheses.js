/*
* @file: BalancedParentheses.js
* @description: Read in arithmetic expression and write a stack class 
*            to push open parentheses '{' and pop closed parentheses '}'
*
* @author: Rima Das
* @version: 1.0
* @date: 20/1/2020
*/ 
const Stk = require('../DSUtil/Stack');
const stack = new Stk.Stack;

function balancedParentheses(){
    let str = '(5+6)*(7+8)/(4+3)(5+6)*(7+8)/(4+3)';
    console.log(str);

    for(let i=0; i<str.length ;i++){
        if(str[i]== '{' || str[i] == '(' || str[i] == '['){
            stack.push(str[i]);
            
        }
        else if(str[i] == '}' || str[i] == ')' || str[i] == ']'){
            stack.pop(str[i]);
        }
    }
    console.log(stack);
    stack.size();
    stack.print();
}

balancedParentheses();