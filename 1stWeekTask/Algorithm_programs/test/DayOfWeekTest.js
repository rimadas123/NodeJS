/*
* @file: DayOfWeekTest.js
* @description: To validate all possibilities 
* @author: Rima Das <rdas5969@gmail.com>
* @version: 1.0
* @date: 18/1/2020
*/

const assert = require('chai').assert;
var result = require('../DayOfWeek');

    describe('DayOfWeek Negative testing', function () {
        /*
        * @description This Method Test date is valid or not  
        * @returns true or false 
        */

    it('date is Not Valid  ', function () {

        var date = result[0];
        assert.isTrue(date < 0 && date > 31, ' Date is  Valid it is between 1 to 31');
    });
        /*
        * @description This Method Test Array size is valid or not 
        * @returns true or false 
        */

    it('Month is Not valid ', function () {
        var month = result[1];
        assert.isTrue(month < 0 && month > 13, 'Month is valid it is in between 1 to 12')
    });
        /*
        * @description This Method Test Array size is valid or not 
        * @returns true or false 
        */

    it('Year is not valid ', function () {
        var year = result[2];
        assert.isTrue(year < 999 && year > 99999, ' year is should have only 4 digits  ')
    });

    });


    describe('DayOfWeek Positive testing', function () {
        /*
        * @description This Method Test date is valid or not  
        * @returns true or false 
        */
        it('date is Valid  ', function () {
            var date = result[0];
            assert.isTrue(date > 0 && date < 32, ' Date is not Valid it is should be between 1 to 31');
        });
        /*
        * @description This Method Test Array size is valid or not 
        * @returns true or false 
        */

        it('Month is valid ', function () {
            var month = result[1];
            assert.isTrue(month > 0 && month < 13, 'Month is Not valid it is should be between 1 to 12')
        });
        /*
        * @description This Method Test Array size is valid or not 
        * @returns true or false 
        */

        it('Year is valid ', function () {
            var year = result[2];
            assert.isTrue(year > 999 && year < 9999, ' year should be 4 digits only ')
        });
        /*
        * @description This Method Test Array size is valid or not 
        * @returns true or false 
        */

        it('Day value is valid ', function () {
            var day = result[3];
            assert.isTrue(day >= 0 && day <= 6, ' Day value shold be between 0 to 6 ');
        });
    });




