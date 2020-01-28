/*
* @file: AddressBook.js
* @description: The software to be designed is a program that can be used to maintain an address book. An address book
*             holds a collection of entries, each recording a person's first and last names, address, city, state, zip, and
*             phone number.
*
* @author: Rima Das
* @version: 1.0
* @date: 28/1/2020
*/

class Address {
    constructor(address,city,state,zip){
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    set Address(address){
        this.address = address;
    }
    get Address(){
        return this.address;
    }
    set City(city){
        this.city = city;
    }
    get City(){
        return this.city;
    }
    set State(state){
        this.state = state;
    }
    get State(){
        return this.State;
    }
    set ZipCode(zipcode){
        this.zip = zipcode;
    }
    get ZipCode(){
        return this.zip;
    }

    getDetails() {
         return (`${this.address} ${this.city} ${this.state} ${this.zip}`);
    }
}

class Person extends Address {
    constructor(firstname,lastname,mobilenum,address,city,state,zip){
        super(address,city,state,zip);
        this.firstname = firstname;
        this.lastname = lastname;
        this.mobilenum = mobilenum;    
    }

    set FirstName(firstname) {
        this.firstname = firstname;
    }
    get FirstName(){
        return this.firstname;
    }
    set LastName(lastname) {
        this.lastname = lastname;
    }
    get LastName(){
        return this.lastname;
    }
    set MobileNum(mobilenum) {
        this.mobilenum = mobilenum;
    }
    get MobileNum(){
        return this.MobileNum;
    }

    getDetails() {
        return (`${this.firstname} ${this.lastname} ${this.mobilenum} ${super.getDetails()}`)
    }
    
}


let obj = new Person("Rima","das",89283237834,"govandi","mumbai","mh",212123);
console.log(obj.getDetails());

module.exports = new Person();