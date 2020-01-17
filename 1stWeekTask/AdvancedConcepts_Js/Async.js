
async function add(a,b){
     setTimeout(function(){
        let c =  a + b;
        console.log(c);
    },1000);
}

add(5,6);