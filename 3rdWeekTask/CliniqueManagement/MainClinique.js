/*
* @file: MainClinique.js
* @description: This programme is used to manage a list of Doctors associated with the Clinique and list of patients who use the
*               clinique. So from here the main execution takes place
*
* @author: Rima Das
* @version: 1.0
* @date: 30/1/2020
*/

const read = require('readline-sync');
const util = require('./Utility');

class Main{
    constructor() {

    }

    mainMenu() {
        let menu = read.questionInt(`Enter 1 to add details for patient \n Enter 2 to add details for doctor \n Enter 3 to search doctor availability \n Enter 4 to search person \n Enter 5 to save \n Enter 6 to display \n Enter 7 to exit`)
        
        switch(menu) {
            case 1: 
                   util.addAppointment();
                   return this.mainMenu();
            case 2:
                   util.addDoctor();
                   return this.mainMenu();
            case 3:
                   util.searchDoctor();
                   return this.mainMenu();
            case 4:
                    util.searchPatient();
                    return this.mainMenu();       
            case 5:
                   util.save();
                   return this.mainMenu();
            case 6:
                   util.display();
                   return this.mainMenu();
            case 7:
                   console.log("Exit");
                   return 0;
            default:
                   console.log("wrong input");
                   return this.Mainmenu();

        }
    }
}

let obj = new Main();
obj.mainMenu();