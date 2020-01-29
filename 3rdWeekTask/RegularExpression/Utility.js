
class Utility {
    validName(n) {
        try {
            let name = /^[a-zA-Z]+$/;
            if (n.match(name)) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }
    validFullName(fn) {
        try {
            let name = /^[a-zA-Z]+ [a-zA-Z]+$/;
            if (fn.match(name)) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }

    validMobileNum(mn) {
        try {
            let mobilenum = /^((\+)?(\d{2}[-])?(\d{10}){1})?(\d{11}){0,1}?$/;
            if (mn.match(mobilenum)) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            return error;
        }
    }

    fileRead(filePath) {
        try {
            let fs = require('fs');
            let obj = fs.readFileSync(filePath, 'utf-8')
                if (obj) { 
                    return obj
                 }
                else {
                    return false;
                }
        } catch (error) {
            return error;
        }
    }

}
module.exports = { 
    Utility 
}
