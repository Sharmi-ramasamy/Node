const SuperHero = require('./SuperHero')

console.log(SuperHero.getName());
SuperHero.setName('SuperMan');
console.log('SuperHero:' + SuperHero.getName());

const newSuperHero = require('./SuperHero');               // another new instance of superhero
console.log('NewSuperHero:' + newSuperHero.getName());