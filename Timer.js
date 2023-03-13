// setInterval(()=> console.log("Hi"),1000)
// setTimeout(()=>console.log("hi"),2000)

// var a=0;
// setInterval(()=> {
//     a++;
//     console.log(a)
// },1000)


// var recursive = function () {  
//     console.log("Hey! 1000 millisecond completed!..");   
//     setTimeout(recursive,1000);  
// }  
// recursive();   

// ---------------------------------------------------------------------------------------------------------

// clearTimeout & clearInterval

const str = () => {
    console.log("Mix")
}

var id1 = setTimeout(str,1000)
var id2 = setInterval(str,1000)
clearInterval(id2)
                                           // OR

// function welcome () {  
//     console.log("Welcome!");  
//   }  
//   var id1 = setTimeout(welcome,1000);  
//   var id2 = setInterval(welcome,1000);  
//   clearTimeout(id1);  
  //clearInterval(id2);  


  // -------------------------------------------------------------------------------------

  const str1 = () => {
    console.log("Mix")
}

var id1 = setTimeout(str1,1000)
var id2 = setInterval(str1,1000)
clearTimeout()