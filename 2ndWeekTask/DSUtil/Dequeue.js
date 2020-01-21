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

class Dequeue
{
    constructor(){
        this.items = [];
        this.addfront = 0;
        this.addrear = 0;
        this.removefront = 0;
        this.removerear = 0;
    }

    addfront(element)
    {
        this.items[this.addfront] = element;
        return this.items[this.addfront];
    }

    addrear(element)
    {
        this.items[this.addrear] = element;
        this.addrear = this.addrear + 1;
        this.size = this.size + 1;
    }
}