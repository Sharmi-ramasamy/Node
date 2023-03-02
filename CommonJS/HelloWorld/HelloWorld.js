require('./Add')   // require function loads the Add.js module into HelloWorld.js
// passing path to the require() function as string

console.log("Hello World");

const multiply = (m,n) => { 
    return (m*n)
}
const result = multiply(20,30);
console.log("Multiplication:" + result)

