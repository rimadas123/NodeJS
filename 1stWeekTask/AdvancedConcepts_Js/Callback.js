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
    setTimeout(function(){
        console.log("first")  
    },1000);
    callback();
}

function second(){
    console.log("second");
}

first(second);
