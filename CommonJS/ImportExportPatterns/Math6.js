// same as math5.js instead of using module.exports here only exports is used
// it is recommended to use module.exports instead of exports.
// here revisits the IIFE 
// function that wraps every module recieves 5 parameters - exports,require,module,--filename.--dirname

exports.add = (a,b,c) => {
    return a + b + c;
}

exports.multiply = (a,b) => {
    return a * b;
}