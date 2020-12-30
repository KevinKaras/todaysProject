/***********************************************************************
The `setSecondsTimeout` you wrote was cool, but it's missing some functionality.

1. The built-in `setTimeout` can also accept any additional number of arguments 
that will be passed to the callback.


1. Write a function `setSecondsTimeoutArgs` 

2. That accepts a callback, a delay in seconds, and any number of additional arguments.

3. The function should call the callback with the additional arguments after the specified delay.



In addition to Mocha, we recommend that you test your code manually using node
with the examples below.

Examples:

function printSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
setSecondsTimeoutArgs(printSum, 0.25, 5, 1, 4); // should print '10' after 250ms

setSecondsTimeoutArgs(function(arg1, arg2) {
    console.log(arg1 + '-' + arg2);
}, 0.7, 'hello', 'world'); // should print 'hello-world' after 700ms
***********************************************************************/
// printSum(arg1, arg2){
//   console.log(arg1, arg2);
// }


// setTimeout(callback, timer, arg1, arg2)

function setSecondsTimeoutArgs(callback, delay, ...args){
  setTimeout(function() {callback(...args)}, delay * 1000)
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = setSecondsTimeoutArgs;
} catch {
  module.exports = null;
}
