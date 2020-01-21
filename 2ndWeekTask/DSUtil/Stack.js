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
        this.items[this.count] = element;
        this.count++;
        return element;
    }

    //pop function
    pop()
    {
        //return top most element in the stack and
        // removes it from the stack 
        if(this.items.length === 0){
            console.log( "underflow"); // Underflow if stack is empty
        }
        this.count--;
        let result = this.items[this.count];
        this.items[this.count] = 0;
        return result;
    }

    //peek function
    peek()
    {
        //return the top most element from the stack
        //but does'nt delete it.
        let result = this.items[this.count - 1];
        return result;
    }

    //isEmpty function
    isEmpty()
    {
        // return true if stack is empty
        return this.items.length <= 0;
    }

    //print function
    print()
    {
        // let str = "";
        // for(let i=0; i < this.items.length; i++){
        //     str += this.items[i] + " ";    
        // }
        // return str;

        let newarray = this.items.map((nums)=>{
            return nums;
        })
        return newarray;
    }

    size()
    {
        return this.count;
    }
}

module.exports = {
    Stack
}