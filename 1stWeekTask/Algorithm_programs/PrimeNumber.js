//Find prime Number from a rang 0 - 1000

var input = require('./Utility');

var range = 1000;

for(i=0;i<range;i++){
    var resultPrime = input.primeNumber(i);
    if(resultPrime){
        console.log(`Prime Numbers=> ${i}`);
    }
}
    // let resultAnagram = input.anagram(resultPrime);
    // console.log(`Anagram Numbers: ${resultAnagram}`);
    let resultPalindrome = input.palindrome(resultPrime);

    if(resultPalindrome){
    console.log(`Palindrome Numbers=> ${resultPalindrome}`);
    
}

