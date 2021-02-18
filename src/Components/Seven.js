function largeSum(arr) {
    let accumulator = 0;
  for(let string of arr){
    let number = parseInt(string, 10);
    accumulator += parseFloat(number)
  }
    let sumString = accumulator.toString().split('.').join("");
    let splicedNum = sumString.slice(0, 10);
    return parseFloat(splicedNum);
  }
  
  // Only change code above this line
  
  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
  