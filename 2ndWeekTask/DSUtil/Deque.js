/*
* @file: Deque.js
* @description: Implementation of Deque with all methods
*               like deque, addfront, addback, removefront, removeback
*
* @author: Rima Das
* @version: 1.0
* @date: 22/1/2020
*/

class Node {
    constructor(element){
        this.value = element;
        this.next = null;
    }
}

class Deque
{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    /**
    * @description this method is for adding the elements from front
    * @param {*} element : data to add
    */
    addfront(element)
    {
        // creates a new node
        let node = new Node(element);
        
        //if deque is initially empty
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
    * @description this method is for adding the elements from back
    * @param {*} element : data to add
    */
    addBack(element) 
    {
        // creates a new node
        let node = new Node(element);

        //if deque is initially empty
        if(this.front == null) {
            this.front = node;
            this.rear = node;
        } else {
            node.next = this.rear;
            this.rear = node;
        }
    }

    /**
    * @description this method is for removing the elements from front
    * @returns string ,numbers
    */
    removeFront()
    {
        //deque is initially empty
        if(this.front == null) {
            return false;
        }
        //check if the last element is removed or not
        if(this.rear == this.front) {
            let data = this.rear.data;
            this.rear = null;
            this.front = null;
            return data;
        }
    }

    /**
    * @description this method is for removing the elements from back
    * @returns string ,numbers
    */
    removeBack()
    {
        // if deque is empty
        if(this.rear == null) {
            return false;
        }
        // if last element in deque is to removed
        if(this.rear == this.front) {
            let data = this.rear.value;
            this.rear = null;
            this.front = null;
            return data;
        }
        //remove from rear
        else {
            let data = this.rear.value;
            this.rear = this.rear.next;
            return data;
        }
    }

    /**
    * @description this method is for checking the queue is empty or not
    * @returns boolean
    */
    isEmpty()
    {
        if(this.front == this.rear == null) {
            return true;
        }
        return false;
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
        let temp = this.rear;
        while(temp != null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }
}

module.exports = {
    Deque
}