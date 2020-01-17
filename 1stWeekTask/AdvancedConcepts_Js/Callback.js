//Callbacks

// function add(a,b,callback){
//     console.log(`Addition of these two numbers ${a} and ${b} are ${a+b}`);
//     callback();
// }

// function display(){
//     console.log("This must be printed after addition");
// }

// add(5,6,display);


function first(callback){
    console.log("first");
    setTimeout(function(){
          callback("rima");
    },1000);
    
}

function second(hhhh){
    console.log("second",hhhh);
}

first(second);
