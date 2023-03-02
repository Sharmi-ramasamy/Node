function greet(name) {
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callback) {        // function accepts another function as an argument - call back function
    const name="aspire"            // function which accepts another function as arguments/ returns function - higher order function
    callback(name)
}
higherOrderFunction(greet)