/*
* @file: LinkedList.js
* @description: Implementation of linked list with all methods
*               like add,removeFrom,removeElement,addAtfirst,size,
*
* @author: Rima Das
* @version: 1.0
* @date: 18/1/2020
*/ 


class Node{         //User defined class node
    //constructor
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Linkedlist class
class LinkedList{
    constructor()
    {
        this.head = null;
        this.size = 0;    
    }
    
    add(element) //adds an element at the end of the list
    {
        //creates a new node
        let node = new Node();
        node.data = element;


        //to store current node
        let current;

        //if list is Empty add the element and make it head
        if(this.head == null){
            this.head = node;
            this.size++;
            return
        }else{
            current = this.head;

            //iterate to the end of the list
            while(current.next != null){
                current = current.next;
            }

            //add node
            this.size++;
            current.next =node;
        }
    
    }

    
    insertAt(element,index){   // insert element at the position index of the list
        if(index > 0 && index > this.size)
            return false;
        else {
            //creates a new node
            let node = new Node(element);
            let curr, prev;

            curr = this.head;

            //add the element to the first index
            if(index == 0){
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;

                //iterate over the list to find the position to insert
                while(it < index){
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                //adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeElement(element){      // removes a given element from the list
        let current = this.head;
        let prev = null;

        //iterate over the list
        while(current != null){
            // comparing element with current element if found 
            // then remove and return true

            if(current.data === element){
                if(prev == null){
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    search(element)
    // searches for the element in the list 
    {
        let current = this.head;
                   
            while(current != null){
                if(current.data == element){
                    return true;
                }
               current = current.next;
            }
        return false;
    }


    show() 
     //prints the list items
    {
        let curr = this.head;
        let str = "";
        while (curr) {
        str = str + curr.data + " ";
        if (curr.next != null) {
            str = str + " ";
        }
        curr = curr.next;
        }
        return str;    
    }

    getData()
    // get all the data
    {
        let curr = this.head;
        let str = "";
        while (curr) {
        str = str + curr.data ;
        if (curr.next != null) {
            str = str + " ";
        }
        curr = curr.next;
        }
        return str;
    }

    isEmpty()
    // checks the list for empty
    {
        return this.size = 0;
    }

    size_list()
    //gives the size of the list
    {
        console.log(this.size);
    }
}
 
module.exports = {
    LinkedList
}