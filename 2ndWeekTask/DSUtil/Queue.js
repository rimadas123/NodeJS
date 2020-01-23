/*
* @file: LinkedList.js
* @description: Implementation of Queue with all methods
*               like queue, enqueue, dequeue, isEmpty, size
*
* @author: Rima Das
* @version: 1.0
* @date: 20/1/2020
*/

class Node {
    constructor(element){
        this.front = null;
        this.rear = null;
    }
}

class Queue{
    constructor(){
       this.count = 0;
       this.lowestCount = 0;
       this.items = {};
    }

    /**
    * @description this method is for adding the elements
    * @param string ,numbers
    * @returns string ,numbers
    */
    enqueue(element)
    {
       // creates a new node
       let node = new Node(element);

        //if queue is initially empty
        if(this.front == null) {
            this.front = node;
            this.rear = node;
        } else {
            //add from node in front
            this.front.next = node;
            this.front = node;
        }
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
        if(this.isEmpty()){
            return undefined;
        } 

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
    * @description this method will return item from the front of the queue.
    * @returns string ,numbers
    */
    front()
    {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
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
        return this.count - this.lowestCount == 0;
    }

    size()
    {
        return this.count - this.lowestCount;
    }
}

module.exports = {
    Queue
}