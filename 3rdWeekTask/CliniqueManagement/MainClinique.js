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
       this.patientfile = util.fileRead('Patient.json');
       this.doctorfile = util.fileRead('Doctor.json');
    }

    mainMenu() {
        let menu = read.questionInt(`Enter 1 to to add details to take appointment \n Enter 2 to list out the doctors \n Enter 3 to list out the patients \n Enter 4 to search doctor \n Enter 5 to search patient \n Enter 6 to save \n Enter 7 to delete \n Enter 8 to exit`)
        
        switch(menu) {
            case 1: 
                   util.addAppointment(this.patientfile);
                   return this.mainMenu();
            case 2:
                   util.listDoctor(this.doctorfile);
                   return this.mainMenu();
            case 3:
                   util.listPatient(this.patientfile);
                   return this.mainMenu();
            case 4:
                   util.searchDoctor(this.doctorfile);
                   return this.mainMenu();
            case 5:
                    util.searchPatient(this.patientfile);
                    return this.mainMenu();       
            case 6:fibofibofibo
                   util.save(this.doctorfile,this.patientfile);
                   return this.mainMenu();
            case 7:
                   util.delete(this.doctorfile,this.patientfile);
                   return this.mainMenu();
            case 8:
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