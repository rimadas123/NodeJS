/*
* @file: Apply.js
* @description: Apply() is used to invoke function immediately. difference between caal() and apply() is that the
*              second parameter of the apply() method accepts the argument to the actual function aa an array.
*
* @author: Rima Das
* @version: 1.0
* @date: 31/1/2020
*/

let obj = {name: "rima"}

let greeting = function(a,b,c){
    return `Welcome ${this.name} to ${a} ${b} in ${c}`;
}

let args = ["Newtown","Kolkata","WB"];
console.log(greeting.apply(obj,args));

