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

    validZipCode(zp) {
        try {
            let zipcode = /^[1-9][0-9]{6}$/;
            if (zp.match(mobilenum)) {
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


    fileWrite(filePath,data) {
        try {
            let fs = require('fs');
            let obj = fs.readFileSync(filePath,data)
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