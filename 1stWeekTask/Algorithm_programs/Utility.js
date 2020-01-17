
const read = require('readline-sync');

module.exports = {

    //Anagram Program -> to check whether it is anagram or not.(means One string is an anagram of another if the second is simply a
    // rearrangement of the first.)

    anagram(word1,word2){

        if(word1.length !== word2.length){
            return false;
        }
    
        let lowerCaseWord1 = word1.toLowerCase();
        let lowerCaseWord2 = word2.toLowerCase();
    
        if(lowerCaseWord1===lowerCaseWord2){
            return false;
        }
            let resWord1 = lowerCaseWord1.split('').sort().join('');
        
            let resWord2 = lowerCaseWord2.split('').sort().join('');
            
            
            if(resWord1===resWord2){
                return true;
            }      
            else{
                
                return false;
            }
    } ,
/*************************************************************************************************************/

    //Palindrome Program -> to check whether it is palindrome or not 
  
    palindrome(num){

            let rem, temp, final = 0;
            temp = num;

            while(num>0){
                rem = num % 10;
                final = final * 10 + rem;
                console.log(final);
                num = num / 10;
            }
            if(final === temp){
                return true;
            }else{
                return false;
            }
        },

/*************************************************************************************/ 
        
    //Bubble sort

    bubbleSort(arr){
        origArr = arr.slice();
            var len = arr.length - 1;
            do{
                var swapped = false;
                for(var i=0;i<len;i++){
                    if(origArr[i] > origArr[i+1]){
                        var temp;
                        temp = origArr[i];
                        origArr[i] = origArr[i+1];
                        origArr[i+1] = temp;
                        swapped=true; 
                    }   
                }        
            }
        while(swapped===true);
            return origArr;
    },

/************************************************************************************************/

    //Insertion sort

    insertionSort(arr){
        len = arr.length - 1;

        for(i=0;i<len;i++){
            let temp = arr[i];
            let j = i - 1;
            while(j > 0 && arr[j] > temp){
                arr[j+1] = arr[j];
                j = j - 1;
            }
            arr[j+1] = temp;
        }
        return arr;
    },

/*************************************************************************************/

    //dayOfWeek

    dayOfWeek(month,date,year){
        // console.log("month: "+m+"day: "+d+"year: "+y);

        var a = Math.floor((14 - month) / 12);
        var y0 = year - a;
        var m0 = month + 12 * a - 2;
        var x = (y0 + Math.floor(y0 / 4 - y0 / 100) + Math.floor(y0 / 400));
        var day =Math.floor((date + x + Math.floor((31 * m0) / 12)) % 7);

        return day;
    },

/**************************************************************************************************/ 

// Calculate temperature in celsius and farenheit

    temperatureConversion(temp){

        if(temp==1){
        var temp1 = read.question("enter tempertaure in celsius: ");
        var celsToFaren = (temp1 * 9/5) + 32;
        console.log("Cpnverted temperature in Farenheit: "+celsToFaren+"°F");
        }
        else if(temp==2){
        var temp2 = read.question("Enter temperature in farenheit: ");
        var farenToCels = (temp2 - 32) * 5/9;
        var res = farenToCels.toFixed(2);
        console.log("Temperature in Celsius: "+res+"°C");
        }
    },

/***********************************************************************************************/

//Calculate Monthly Payment

    monthlyPayment(year,principal,rateOfInterest){
            
        var n = 12 * year;
        var r = rateOfInterest / (12 * 100);

        var divisor = 1 - Math.floor(Math.pow((1+r),(-n)));
        var payment = principal * r / divisor;

        return payment;
    },

/***********************************************************************************************/

//Binary Search

    binarySearch(items,values){
        
        let startIndex = 0;
        let stopIndex = items.length - 1;
        let middle = Math.floor((startIndex+stopIndex)/2);
        

        while(items[middle] != values && startIndex < stopIndex){

            if(values < items[middle]){
                stopIndex = middle - 1;
            }
            else if(values > items[middle]){
                startIndex = middle + 1;
            }

            middle = Math.floor((stopIndex + startIndex)/2);
        }
        return (items[middle] != values) ? -1 : middle;
    },

/**********************************************************************************************/

//Find Prime Numbers between 0 - 1000

    primeNumber(num){
        if(num === 1 ){
            return false;
        }
        else if(num === 2){
            return true;
        }
        else{
            for(var i = 2;i < num;i++){
                if(num % i === 0){
                    return false;
                }
            }
            return true;
        }  
    },

/*******************************************************************************************/ 

// Merge Sort

    //Split the array into two halves and merge them recursively

    mergeSort(arr) {
        if(arr.length === 1){
            //return once we hit an arra with a single item
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0,middle);
        const right = arr.slice(middle);

        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    },

    merge(leftArr,rightArr){

    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

        while(indexLeft < left.length && indexRight < rightArr.length){
            if(leftArr[indexLeft] < rightArr[indexRight]){
                result.push(left[indexLeft])
                indexLeft++
            }
            else{
                result.push(right[indexRight])
                indexRight++
            }
        }

      return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));  

    },
    
}

