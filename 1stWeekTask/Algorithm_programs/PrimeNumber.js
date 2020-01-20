//Find prime Number from a rang 0 - 1000

const input = require('./Utility');

const range = 1000;
const arr = [];
const arr1 = [];

for(let i=0;i<range;i++){
    var resultPrime = input.primeNumber(i);
    if(resultPrime){
        arr.push(i); 
    }
}

    console.log(`Prime Numbers: ${arr}`);

    for(let i=0;i<arr.length;i++){
        let resultPalindrome = input.palindrome(arr[i]);
        if(resultPalindrome){
            arr1.push(arr[i]);
        }  
    }
    console.log(`Palindrome Numbers: ${arr1}`);


    let resultAnagram = input.anagramNum(arr1);

    // for(let i=0;i<arr1.length;i++){
    //         let resultAnagram = input.anagramNum(arr1[i]);
    //         if(resultPalindrome){
    //             console.log("Palindrome result=> ",arr1[i]);
    //             arr2.push(arr1[i]);
    //         }  
    //     }
    // console.log(`Anagram Numbers: ${arr2}`);

