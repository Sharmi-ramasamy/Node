console.log("2+2");                   // consider as String
// "2+2"

console.log(eval("2+2"));             // eval does not consider it as String
// 4

console.log(eval(new String ("2+2")));      // new String consider as String
// "String: 2+2"

console.log((eval("2+2") === eval("4")));
// true

console.log((eval("2+2") === eval(new String("2+2"))));
// false


const value = new String("2+2");
console.log(value)
// [String: '2+2']
console.log(eval(value))
// [String: '2+2']
console.log(eval(String(value)))
// 4



function test() {
    const x = 2;
    const y = 4;
    // Direct call, uses local scope
    console.log(eval("x + y")); // Result is 6
    console.log(eval?.("x + y")); // Uses global scope, throws because x is undefined
  }
  test()