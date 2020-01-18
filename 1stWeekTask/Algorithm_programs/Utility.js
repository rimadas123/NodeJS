
const read = require('readline-sync');

module.exports = {

    //Anagram Program -> to check whether it is anagram or not.(means One string is an anagram of another if the second is simply a
    // rearrangement of the first.)

    anagram(word1,word2){
            try{
                if(word1 === undefined || word2 === undefined) throw "value cannot be undefined"
                if(word1 === "" || word2 === "") throw "value cannot be empty"
                
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
            }catch(err){
                return err
            }
    } ,

/*************************************************************************************************************/

    // To check anagram number

    anagramNum(arr){

       for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){

            }
       }

    },


/*************************************************************************************************************/

    //Palindrome Program -> to check whether it is palindrome or not 
  
    palindrome(num){
        
        let rem, temp, final = 0;
        temp = num;

            while(num>0){
                rem = num % 10;
                num = parseInt (num / 10);
                final = final * 10 + rem;                
            }            
            if(final === temp){

                return true;    
            }else{

                return false;
            }
        },

/************************************************************************************************************/ 
        
    //Bubble sort

    bubbleSort(arr){
        try{
        if(arr>10) throw "size should not exceed more than 10"
        if(arr === " ") throw "value cannot be empty"
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
        }catch(err){
            return err
        } 
    },

/************************************************************************************************/

    //Insertion sort

    insertionSort(arr){
        try{
            len = arr.length - 1;

            for(i=1;i<len;i++){
                let temp = arr[i];
                let j = i - 1;
                while(j >= 0 && arr[j] > temp){
                    arr[j+1] = arr[j];
                    j = j - 1;
                }
                arr[j+1] = temp;
            }
            return arr;
        }catch(err){
            return err;
        }
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
        console.log("Converted temperature in Farenheit: "+celsToFaren+"°F");
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
        try{
        if(arr.length === 1){
            //return once we hit an array with a single item
            return arr;
        }

        var middle = Math.floor(arr.length / 2);
        var left = arr.slice(0,middle);
        var right = arr.slice(middle);

        
        return this.merge(
            this.mergeSort(left),
            this.mergeSort(right)
        )
        }catch(err){
            return err;
        }
    },

    merge(leftArr,rightArr){

    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

        while(indexLeft < leftArr.length && indexRight < rightArr.length){
            if(leftArr[indexLeft] < rightArr[indexRight]){
                result.push(leftArr[indexLeft])
                indexLeft++
            }
            else{
                result.push(rightArr[indexRight])
                indexRight++
            }
        }

      return result.concat(leftArr.slice(indexLeft)).concat(rightArr.slice(indexRight));  

    },
    
    /****************************************************************************************************/
    
    // Find Number

    find(powerOftwo) {
        try {
            var read = require('readline-sync');
 
            var low = 0, high = powerOftwo - 1, mid;
            while (low != high) {
                mid = Math.floor((low + high) / 2);
                console.log("Enter  1 if no is between " + low + " - " + mid + "\n Enter 2 if no is between "
                    + (mid + 1) + " - " + high);
                var answer = read.question();
                mid = Math.floor((low + high) / 2);
                if (answer == 1)
                    high = mid;
                else if(answer == 2){
                    low = mid + 1;
                }
            }
            console.log("Your guessed number", low);
            return low;
        } catch (error) {
            console.log(" error");
        }
    },

    /******************************************************************************************/
    
    //two dimensional array

    twoDimensional(rows,cols){
        try{
            // this will initialize 1D array
            let initialize_array = [];

            // this will initialize 2D array
            for(let i=0;i<rows;i++){
                initialize_array[i] = [];

                // for putting the values according to the 2D array
                for(let j=0;j<cols;j++){

                    // taking input from the user 
                    let input = read.questionInt("Enter values: ");
                    initialize_array[i][j] = input;
                }
            }

            // for printing the values in 2d fashion
            for(let i=0;i<rows;i++){
                console.log("Two dimensional array: ", initialize_array);
            }
        }catch(err){
            return err;
        }

    },
}
