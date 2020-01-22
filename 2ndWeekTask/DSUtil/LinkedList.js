/*
* @file: LinkedList.js
* @description: Implementation of linked list with all methods
*               like add,removeFrom,removeElement,addAtfirst,size
*
* @author: Rima Das
* @version: 1.0
* @date: 18/1/2020
*/ 

//User defined class node
class Node{         
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
    
    /**
    * @description this method is for adding the elements
    * @param string, numbers
    * @returns string ,numbers
    */
    add(element) 
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

    /**
    * @description this method is for inserting element at the position index of the list
    * @param string ,numbers
    * @returns string ,numbers
    */
    insertAt(element,index)
    {   
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

    /**
    * @description this method is for removing a given element from the list
    * @param string, number
    * @returns string ,number
    */
    removeElement(element){      
        let current = this.head;
        let prev = current;

        if(current.data == element){
            let temp = this.head;
            this.head = this.head.next;
            return;
        }

        //iterate over the list
        while(current != null){
            // comparing element with current element if found 
            // then remove and return true

            if(current.data == element){
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

    /**
    * @description this method is for searching the element in the list 
    * @param string, number
    * @returns string ,number
    */
    search(element)
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

    /**
    * @description this method is for printing the list items
    * @param 
    * @returns string ,numbers
    */
    show() 
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

    /**
    * @description this method is to get the data and store it
    * @param 
    * @returns string ,numbers
    */
    getData()
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

    /**
    * @description this method is to get the data and store it
    * @param 
    * @returns boolean
    */
    isEmpty()
    // checks the list for empty
    {
        return this.size = 0;
    }

    /**
    * @description this method is for returning size of the elements
    * @param 
    * @returns number
    */
    sizeOf()
    //gives the size of the list
    {
        console.log(this.size);
    }

}
 
module.exports = {
    LinkedList
}