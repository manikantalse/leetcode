/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var str = [];
    for(var i=1; i<=n; i++){
         if(i % 3 && i % 5){
            str.push(i.toString());
         } else if(i % 15 == 0 ){
            str.push("FizzBuzz");
         } else if(i % 3 == 0){
            str.push("Fizz");
         } else {
             str.push("Buzz");
         } 
    }
    return str;
};