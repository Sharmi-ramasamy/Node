// Zero delay

//If you specify the timeout delay to 0, 
// the callback function will be executed as soon as possible, 
// but after the current function execution:

setTimeout(() => {
    console.log('after ');
  }, 0);
  
  console.log(' before ');


  // before 
  // after 

  // output occurs without any delay