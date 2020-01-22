
module.exports = {
    hash(strg){
        var str = Math.floor(strg%11);
        return str;
    }
}