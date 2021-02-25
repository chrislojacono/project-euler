// NAIVE APPROACH
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])

// Counter approach

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])


///My version of the anagram one
function validAnagram(string1, string2){
    if(string1.length !== string2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let char of string1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of string2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    console.log(frequencyCounter2);
    console.log(frequencyCounter1);
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        console.log("freq2",frequencyCounter2[key]);
        console.log("key.value", frequencyCounter1[key])
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

validAnagram("anagram", "nagarama");

// His answer to the anagram problem
function validAnagram2(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram2('anagrams', 'nagaramm')

  function sameFrequency(number1, number2){
    if(number1.length !== number2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let char of number1.toString()){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
    }
    for (let char of number2.toString()){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }
    console.log(frequencyCounter2);
    console.log(frequencyCounter1);
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        console.log("freq2",frequencyCounter2[key]);
        console.log("key.value", frequencyCounter1[key])
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

//ARE THERE DUPLICATES EXERCISE
//IMplement a function that checks whether there are any duplicates in an array
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }