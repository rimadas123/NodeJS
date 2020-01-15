var read = require('readline-sync');
var width = Number(read.question("Enter width: "));
var height = Number(read.question("Enter height: "));

var arr = new Array(height);

for (var i =0; i < height; i++){
    arr[i] = new Array(width);
}

arr[0][0] = 'foo';

console.log('arr[0][0] = ' + arr[0][0]);

arr = void(0);