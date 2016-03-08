/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */



 exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  for (i = 1; i < n; i++){
    if (i % 3 === 0 || i % 5 === 0) {
      // arr2.push(i);
      sum += i;
  }
}
  return sum;
};

 // var arr = [0,1,2,3,4,5,6,7,8,9,10];
  // var arr2 =[0];