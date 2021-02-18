
function isPrime(num) {
    if ( num === 0 || num === 1 ) {
            return false;
        }
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
}
function nthPrime(n) {
//list prime numbers 
let primeArray = [2];
for(let i = 3; primeArray.length <= n; i + 2){
  if(isPrime(i)){
    primeArray.push(i)
  }
}
//console.log(primeArray)
const finalAnswer = primeArray[n - 1];
//return the nth one
console.log(finalAnswer)
  return finalAnswer
}
nthPrime(10001);




  //BAILEY'S WAY


function nthPrime(number) {
  let primes = [2];
  let higherDivisorLimit; //dec
  let isPrime; //bool
  
  for(let i = 3; primes.length < number; i+=2) {
    higherDivisorLimit = Math.sqrt(i) + 1;
    isPrime = true;
    for(let j = 0; primes[j] < higherDivisorLimit; j++) {
      if(i % primes[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) primes.push(i);
  }
  return primes[primes.length - 1];
}
nthPrime(6);


