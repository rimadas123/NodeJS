/*
* @file: Call.js
* @description: Call() is used to invoke function immediately.
*
* @author: Rima Das
* @version: 1.0
* @date: 31/1/2020
*/

let obj = { name: 'rima'}

let greeting = function(a,b,c) {
    return `welcome ${this.name} to ${a} ${b} in ${c}`;
};

console.log(greeting.call(obj,"Newtown","Kolkata","WB"));