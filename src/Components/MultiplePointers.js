//Naive Verison
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])
//O(n^2) checks first then loops through all others --- Only works on linear arrays/sorted

function sumZeroBetter(array){
    let left = 0;
    let right = array.length - 1;
    //failsafe so you dont get 0-0 which would be a false positive
    while(left < right){
        let sum = array[left] + array[right];
        if(sum === 0){
            return [array[lerft], array[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++
        }
    }
}

//My attempt
function countUniqueValues(array){
    let counter = [];
    for(let i = 0; i < array.length; i++){
    counter[array[i]] ? counter[array[i]] + 0 : counter.push(array[i])
    }
    return counter.length
}


//My Solution to the Unique values array countUniqueValues([1,1,1,1,1,2]) => 2
function countUniqueValues(array){
    let j = 1;
    let i = 0;
    while(j < array.length){
        if(array[i] === array[j]){
            j++;
        }
        else{
            i++
            array[i] = array[j]    
        }
    }
    let numberOfUnique = i + 1
    return numberOfUnique
}

////SLIDING WINDOW PATTERN
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  maxSubarraySum([2,6,9,2,1,8,5,6,3],3)