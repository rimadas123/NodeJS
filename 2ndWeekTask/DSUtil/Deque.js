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
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Deque
{
    constructor(){
        this.items = [];
        this.count = 0;
        this.lowestCount = 0;
    }

    /**
    * @description this method is for adding the elements from front
    * @param string, numbers
    * @returns string ,numbers
    */
    addfront(element)
    {
        // creates a new node
        let node = new Node();
        node.data = element;

        if(this.isEmpty()) 
        {
            this.addBack(element);
        } else if(this.lowestCount > 0) {
            this.lowestCount --;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count; i > 0 ; i--) {
                this.items[i] = this.items[i-1];
            }
            this.count ++;
            this.items[0] = element;
        }
        return true;
        
    }

    /**
    * @description this method is for adding the elements from back
    * @param string, numbers
    * @returns string ,numbers
    */
    addBack(element) //similar to enqueue method
    {
        this.items[this.count] = element;
        this.count++;
    }

    /**
    * @description this method is for removing the elements from front
    * @returns string ,numbers
    */
    removeFront()
    {
        if(this.isEmpty()){
            return undefined;
        }

        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
    * @description this method is for removing the elements from back
    * @returns string ,numbers
    */
    removeBack()
    {
        if(this.isEmpty()){
            return undefined;
        }
        let result = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return result;
    }

    /**
    * @description this method is for checking the queue is empty or not
    * @returns boolean
    */
    isEmpty()
    {
        return this.count - this.lowestCount == 0;
    }

    /**
    * @description this method is for returning the size of the queue
    * @returns number
    */
    size()
    {
        return this.count - this.lowestCount;
    }

    show()
    {
        let output = this.items.map((nums)=>{
            return nums;
        })
        console.log(output);
    }
}

module.exports = {
    Deque
}