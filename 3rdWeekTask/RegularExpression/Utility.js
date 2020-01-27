
module.exports = {
    validName(n) {
        let name = /^[a-zA-Z ]{2,30}$/;
        if(n.match(name) == null) {
            console.log("Enter a valid name with minimum 2 characters and maximum 30 characters");
        }
        else{
            return true;
        }
    },
    
    validFullName(fn) {
        let fullname = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(fn.match(fullname) == null) {
            console.log("Enter a valid name with proper format firstname and lastname");
        }
        else {
            return true;
        }
    },
    
    validMobileNum(mn) {
        let mobilenum = /^((\+)?(\d{2}[-])?(\d{10}){1})?(\d{11}){0,1}?$/;
        if(mn.match(mobilenum) == null){
            console.log("Enter a 10 digit mobile number");
        }
        else {
            return true;
        }
    },
    
    validDate(d) {
        let date = /^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/;
        if(d.match(date) == null) {
            console.log("Enter a 10 digit mobile number");
        }
        else {
            return true;
        }
    }
}
