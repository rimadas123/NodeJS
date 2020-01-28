const fs = require('fs');
const person = require('./AddressBook');


let obj = {
    Book : []
};


fs.existsSync('Address.json','utf-8', function(exists) {
    if(exists) {
        console.log("File exists");
        fs.readFileSync('Address.json', function callback(err, data) {
            if(err) {
                console.log(err);
            } else {
                obj = JSON.parse(data);
                console.log(obj);    

            }
        })
    } else {
        console.log("File does not exists");
    }
})