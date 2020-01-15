// Print the harmonic value

var readlineSync = require('readline-sync');

var n = readlineSync.question("Enter number");

if(n!=0){
    var i;
    var total=0;
    for(i=1; i<=n;i++){ 
        total = total+1/i;  
    } 
    console.log(total);
}
else{
    console.log("please enter greater than '0' number");
}