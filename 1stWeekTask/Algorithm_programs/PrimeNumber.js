//Find prime Number from a rang 0 - 1000

var input = require('./Utility');

var range = 1000;

for(i=0;i<range;i++){
    var result = input.primeNumber(i);
    if(result){
        console.log(i);
    }
}

