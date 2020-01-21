/*
* @file: LinkedList.js
* @description: Implementation of Queue with all methods
*               like queue, enqueue, dequeue, isEmpty, size
*
* @author: Rima Das
* @version: 1.0
* @date: 20/1/2020
*/

class Queue{
    constructor(){
        this.items = [];
        this.size = 0;
        this.front = 0;
        this.rear = 0;
    }

    /**
    * @description this method is for adding the elements
    * @param string ,numbers
    * @returns string ,numbers
    */
    enqueue(element)
    {
        this.items[this.rear] = element;
        this.rear = this.rear + 1;
        this.size = this.size + 1;
        return this.items;
    }

    /**
    * @description this method is for printing the elements
    * @param string ,numbers
    * @returns string ,numbers
    */
    deQueue()
    {
        //removing the element from the queue returns underflow
        // when called on empty queue
        if(this.items.length === 0){
            return "undefined";
        } 
        this.size = this.size - 1;
        let result = this.items.shift();
        return result;
    }

    front()
    {
        let temp = this.items[this.front];
        console.log(temp[0]);
    }

    rear()
    {
        let temp = this.items[this.rear];
        console.log(temp[temp.length - 1]);
    }

    peek()
    {
        return this.items[this.rear - 1];
    }

    /**
    * @description this method is for printing the elements
    * @param string ,numbers
    * @returns string ,numbers
    */
    show()
    {
        let output = this.items.map((nums)=>{
            return nums;
        })
        console.log(output);
    }

    isEmpty()
    {
        return this.items.length === 0;
    }

    size()
    {
        return this.size.length;
    }
}

module.exports = {
    Queue
}