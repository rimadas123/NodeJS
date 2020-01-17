//Read in a list of words from file -> Merge Sort

const arr = ['hello','world','test','todolist'];
const input = require("./Utility");

// let sortedArray = input.mergeSort(arr);
// console.log(sortedArray);

<<<<<<< HEAD
console.log(sortedArray);
=======
let sortedArray = (arr) => {
            
    if(arr.length < 2){
        return arr;
    }
    else{
        var midpoint = parseInt(arr.length);

        var leftArr = arr.slice(0,midpoint);

        var rightArr = arr.slice(midpoint,arr.length);

        return merge(this.sortedArra(leftArr),sortedArra(rightArr));
    }
}

let result = input.merge(sortedArray);

>>>>>>> adda60db4e7a3e67c5a37e5d4ddc146b4fbf4fee
