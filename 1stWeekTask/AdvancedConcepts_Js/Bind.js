/*
* @file: Bind.js
* @description: Bind() can be used when the function needs to be called later in certain events when its useful.
*
* @author: Rima Das
* @version: 1.0
* @date: 31/1/2020
*/

let obj = {name:"rima"}

let greeting = function(a,b,c){
    return `Welcome ${this.name} to ${a} ${b} in ${c}`;
}

let bound = greeting.bind(obj);
console.log(bound);
console.log(bound("Newtown","Kolkata","WB"));