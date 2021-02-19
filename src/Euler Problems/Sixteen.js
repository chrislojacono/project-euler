function powerDigitSum(exponent) {
    let sum = Math.pow(2, exponent);
    let sumString = BigInt(sum).toString().toString();
    let numberArray = [];
    for( var number of sumString){
      numberArray.push(parseInt(number))
    }
    let answer = numberArray.reduce((a, b) => a + b);
    
      return answer
    }
    
    powerDigitSum(15);