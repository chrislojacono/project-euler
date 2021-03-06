//Naive Verison - nested loops == slowww
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

function averagePair(arr, avg){
    // add whatever parameters you deem necessary - good luck!
        let left = 0;
      let right = arr.length - 1;
      while(left < right){
          let sum = arr[left] + arr[right] / 2;
          console.log(sum)
          if(sum === avg){
              return true;
          }else if(sum > avg){
              right--;
          }else{
              left++
          }
      }
      return false
}

averagePair([1,3,3,5,6,7,10,12,19], 8)


//Checks if the charachters in the first string appear somewhere in the second string without their order changing
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }