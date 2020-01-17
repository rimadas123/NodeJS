//Async example

const greeter = new Promise((res, rej) => {

    setTimeout(()=> res('Hello World!'), 2000);
    });
    async function myFunc(){
        const greeting = await greeter;
        console.log(greeting);
    }
    myFunc();