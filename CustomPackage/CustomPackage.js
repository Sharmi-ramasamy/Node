const upperCase = require("upper-case").upperCase;

function greet (name) {
    console.log(upperCase(`Hello ${name}, Welcome...!!`));
}
greet("node")
module.exports = greet;