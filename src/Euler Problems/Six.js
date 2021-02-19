function sumSquareDifference(n) {
    //Find the sum of the squares
    let sumOfSquares = 0
    for(let i = 1; i <= n; i++){
      let squaredI = i^2;
      sumOfSquares += squaredI;
    }
    //Find the square of the sum
    let sumOfNaturalNumbers = 0
    for(let j = 1; j <= n; j++){
      sumOfNaturalNumbers += j;
    }
    let squaredSum = sumOfNaturalNumbers^2
    
    //find the difference
      return squaredSum - sumOfSquares;
    }
    
    sumSquareDifference(100);