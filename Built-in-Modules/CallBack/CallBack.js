function greet(name) {
    console.log(`Hello ${name}`)
}

function greets(greeting) {
    const name="aspire"
    greeting(name)
}
greets(greet)