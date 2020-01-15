// 2D Array

var read = require('readline-sync');

var rows = Number(read.question("Enter the rows: "));
var cols = Number(read.question("Enter the columns: "));

var initialize_array = [];

var i,j;

for(i=0;i<rows;i++){

    initialize_array[i]=[];

    for(j=0;j<cols;j++){ 

        var input2 = Number(read.question("enter value: "));
        initialize_array[i][j]=input2;
    }
}

for(i=0;i<rows;i++){

        console.log("2D array: "+ initialize_array[i].join(" "));
}













































































