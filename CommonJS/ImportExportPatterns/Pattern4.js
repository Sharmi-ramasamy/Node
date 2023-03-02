// same as pattern3 but destructuring is done 
                                                                            // patttern3 
// const calc = require('./Math4');

// console.log(calc.add(20,12));
// console.log(calc.subtract(90,20));                


// here instead of calc. , destructuring them into a variable

const calc = require('./Math4')
const {add,subtract} = calc;
console.log(add(20,50));
console.log(subtract(40,50))