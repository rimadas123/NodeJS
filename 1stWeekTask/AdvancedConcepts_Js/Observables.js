const {Observable} = require("rxjs-observable");

//Observables example


const greetingLady = new Observable(observer => {
    observer.next('Hello! I am glad to get to know you.');
    observer.complete();
});

console.log('Before calling subscribe on Obsevable');

greetingLady.subscribe({
    next: console.log,
    complete: () => console.log('End of conversation with preety lady')   
});

console.log('After calling subscribe on Observable');

