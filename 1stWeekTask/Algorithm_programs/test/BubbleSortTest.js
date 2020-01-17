const assert = require('chai').assert;
const utility = require('../Utility')
describe('Sorting numbers using Bubble sort',function(){
    it('should not exceed size more than 10', function(){
        let arr=[0, 2, 4, 6, 6, 6, 7, 7, 9, 9];
        let result = utility.bubbleSort(arr);
        assert.equal(result,'size should not exceed more than 10')
    });
    it('should not return undefined value', function(){
        let result = utility.anagram(undefined);
        assert.equal(result,'value cannot be undefined')
        done();
    });
});