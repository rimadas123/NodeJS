/*
* @file: Stack.js
* @description: Implementation of Stack with all methods
*               like push,pop,peek
*
* @author: Rima Das
* @version: 1.0
* @date: 18/1/2020
*/ 

// Stack class
class Stack{

    //Array is used to implement stack

    constructor(){
        this.items = [];
        this.count = 0;
    }

    //push function
    push(element)
    {
        //push element into the items
        this.items.push(element);
        this.count++;
    }

    //pop function
    pop()
    {
        //return top most element in the stack and
        // removes it from the stack 
        // Underflow if stack is empty

        if(this.items.length === 0){
            console.log( "underflow");
        }
        this.count--;
    }

    //peek function
    peek()
    {
        //return the top most element from the stack
        //but does'nt delete it.
        return this.items[this.items.length - 1];
    }

    //isEmpty function
    isEmpty()
    {
        // return true if stack is empty
        return this.items.length == 0;
    }

    //print function
    print()
    {
        let str = "";
        for(let i=0; i < this.items.length; i++){
            str += this.items[i] + " ";
           
        }
        return str;
    }

    size()
    {
        return this.items.length;
    }

}

module.exports = {
    Stack
}