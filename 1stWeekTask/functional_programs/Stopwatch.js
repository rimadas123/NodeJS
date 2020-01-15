//Measure lapsed time between start and end time

var read = require("readline-sync");

var start = read.question("Enter 1 to start the timer: ");


// console.log(start);
// console.log(stop);

    if(start==1){
        var start_time = new Date().getMilliseconds();
        console.log(start_time);
    }
    
    var stop = read.question("Enter 2 to stop the timer: ");

    if(stop==2){
        var stop_time = new Date().getMilliseconds();
        console.log(stop_time);
    }

    var lapsed = stop_time - start_time;

    console.log("Lapsed time in ms: ",lapsed);