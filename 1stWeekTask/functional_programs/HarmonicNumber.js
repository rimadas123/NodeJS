// Print the harmonic number

const readlineSync = require('readline-sync');

const n = readlineSync.questionInt("Enter number");

const input  = require('../Algorithm_programs/Utility');

const result = input.harmonicNumber(n);

return result;