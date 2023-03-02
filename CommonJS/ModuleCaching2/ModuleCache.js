const SuperHero = require('./SuperHero')

const batman = new SuperHero("Batman")
console.log(batman.getName());
batman.setName("Bruce");
console.log(batman.getName())

const superman = new SuperHero('SuperMan')
console.log(superman.getName())