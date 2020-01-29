/*
* @file: AddressBook.js
* @description: The software to be designed is a program that can be used to maintain an address book. An address book
*             holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
*             phone number.
*
* @author: Rima Das
* @version: 1.0
* @date: 29/1/2020
*/
const read = require('readline-sync');
const util = require('./Utility')

class Main{
    constructor(){
          this.file = util.fileRead('AddressBook.json');
    }
    
    Mainmenu(){
        
        let menu = read.questionInt(`Enter 1 to add details in address book \n Enter 2 to edit details \n Enter 3 to delete details \n Enter 4 to sortbyname \n Enter 5 to sortbyzip \n Enter 6 to save \n Enter 7 to display \n Enter 8 to exit `);

        switch(menu) {
            case 1: 
                util.addPerson(this.file);      
                return this.Mainmenu();
            case 2:
                util.editPerson(this.file);
                return this.Mainmenu();
            case 3:
                util.deletePerson(this.file);
                return this.Mainmenu();
            case 4: 
                util.sortByName(this.file);
                return this.Mainmenu();
            case 5 : 
                util.sortByZip(this.file);
                return this.Mainmenu();
            case 6 :
                util.save(this.file);
                return this.Mainmenu();
            case 7 :
                util.display(this.file);
                return this.Mainmenu();
            case 8 :
                console.log("Exit");
                return 0;
            default :
                console.log("wrong input");
                return this.Mainmenu();
        }
    }
}

let obj = new Main();
obj.Mainmenu();


    