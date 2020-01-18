const assert = require('chai').assert;
const app = require('../2D_Array');
const utility = require('../../Algorithm_programs/Utility')
describe('Anagram',function(){
    it('should not return undefined value', function(){
        let result = utility.anagram(undefined, undefined);
        assert.equal(result,'value cannot be undefined')
        done();
    });
    it('should not return empty value', function(){
        let result = utility.anagram(" ", " ");
        assert.equal(result,'value cannot be empty')
        done();
    });
});