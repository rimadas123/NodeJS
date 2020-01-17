
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
      
    merge(leftArr,rightArr){

        let sortedArr = []; 

            while(leftArr.length && rightArr.length){
                if(leftArr[0]<=rightArr[0]){
                    sortedArr.push(leftArr[0]);
                    leftArr = leftArr.slice(1);
                }
                else{
                    sortedArr.push(rightArr[0]);
                    rightArr = rightArr.slice(1);
                }
            }

            while(leftArr.length){
                sortedArr.push(leftArr.shift());
            }
            while(rightArr.length){
                sortedArr.push(rightArr.shift());
            }
            return sortedArr;
            },

/******************************************************************************************/
        
        //2Dimensional Array
        twoDimensional(rows,cols){
            let initialize_array = [];

            for(let i=0; i<rows; i++){
                initialize_array[i] = [];

                for(let j=0; j<cols; j++){
                    let input = read.question("Enter values: ");
                    initialize_array[i][j] = input;
                }
            }

            for(i=0;i<rows;i++){
                console.log("2D array:" , initialize_array[i].join(" "));
            }

        },

/******************************************************************************************/

//Print harmonic numbers

    harmonicNumber(n){
        try{
            if(n!=0){
                let i;
                let total=0;
                for(i=1; i<=n;i++){ 
                    total = total+1/i;  
                } 
                console.log(total);
            }
            else{
                console.log("please enter greater than '0' number");
            }
        }catch(err){
            return err;
        }
    }

}
