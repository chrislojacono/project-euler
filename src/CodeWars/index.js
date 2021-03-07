//strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

function longestConsec(strarr, k) {
    let longString = ""
    if(k > strarr.length || k <= 0){
      return ""
    }

    for(let i = 0; i < strarr.length - (k - 1); i++){
        let currentString = ""
        currentString += strarr[i] 
      for(let j = 1; j <= (k - 1); j++){
        currentString += strarr[i + j]
      }
      if(currentString.length > longString.length){
        longString = currentString
      }
    }
  return longString
}


//This was the top answer 0(n)
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}



function partlist(arr) {
  let newArray = [];
  let startSlicer = 1;
  let endSlicer = arr.length
  let splicedPart = arr.slice(startSlicer, endSlicer).join(" ");
  let tempArray = [arr[0], splicedPart]
  newArray.push(tempArray)
  
  for(let i = 2; i < endSlicer; i++){
    let loopSPlice = [arr.slice(0, [i]).join(" "), arr.slice(i, endSlicer).join(" ")]
     newArray.push(loopSPlice)
  }


  console.log(newArray)
}

partlist(["I", "wish", "I", "hadn't", "come"]) 

//The job was to split the items by 8 and reverse the bits of data

function dataReverse(data) {
  let finalArray = [];
  let divisor = 8;
  const result = new Array(Math.ceil(data.length / divisor))
  .fill()
  .map(item => data.splice(0, divisor))
  
  result.slice(0).reverse().map((item) => finalArray.push(...item))

  
  return finalArray
}

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
  let uniqueChars = [...new Set(values)];
  let newArray = [];
  for(let i = 0;uniqueChars.length != 0; i++){
    let smallestNumber = Math.min(...uniqueChars);
    newArray.push(smallestNumber)
    let index = uniqueChars.indexOf(smallestNumber)
    uniqueChars.splice(index, 1)
    
  }
    return Number(newArray.join(""))
}
//The mexican wave challenge 

function wave(str){
  if(str === ""){
    return [];
  }
    let returnArray = [];
    for(let i = 0; i < str.length; i++){
      let loopString = str.split("");
      if(loopString[i] !== " "){
      let joinedString =  loopString.join("");
      returnArray.push(joinedString.slice(0, i) + joinedString.charAt(i).toUpperCase() + joinedString.slice(i + 1, joinedString.length))
      }

    }
    return returnArray
}


function evaporator(content, evap_per_day, threshold){ 
  let threshHoldInMl =content * (threshold / 100)
  let theAmount = content
  let dayCount = 0
  for(let i = 1; i < 1000; i++){
      let amountEvaporated = content * (evap_per_day / 100)
      theAmount -= amountEvaporated
      dayCount++
      if(theAmount <= threshHoldInMl){
         
          break;
      }
  }
return dayCount
}
evaporator(10,10,10)


// This challenge was to flatten a two dimensional array and sort it
function flattenAndSort(array) {
  return array.reduce((acc, val) => acc.concat(val), []).sort((a, b) => a - b);
}

// solution("camelCasing")  ==  "camel Casing"
function solution(string) {
  return string.split(/(?=[A-Z])/).join(" "); 
}


// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
function highestRank(arr){
  let collection = {}
  for(let val in arr){
    collection[arr[val]] = (collection[arr[val]] || 0) + 1
  }
  let highestKey = 0
  let highestValue = 0
  for(let value in collection){
      if(collection[value] >= highestValue && parseInt(value, 10) >= highestKey){
        highestKey = parseInt(value, 10)
        highestValue = collection[value]
        console.log(parseInt(value, 10))
      }
  }
  console.log(collection)
  return highestKey
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr)

function flattenAndSort(array) {
  return array.reduce((acc, val) => acc.concat(val), []).sort((a, b) => a - b);
}

function solution(nums){
  if(nums == null || nums.length == 0){
    return []
  }
  let finalArray = [];
  for(let i = 0;nums.length !== 0; i++){
    let smallestNumber = Math.min(...nums)
    let index = nums.indexOf(smallestNumber)
    finalArray.push(smallestNumber)
    nums.splice(index, 1)
  }
  return finalArray
}

function solve(s){
  let uppercaseCount = 0;
  let lowercaseCount = 0;
for(let i = 0; i < s.length; i ++){
  if (s[i] == s[i].toUpperCase()) {
     uppercaseCount++;
  }
  if (s[i] == s[i].toLowerCase()){
   lowercaseCount++
  }
}
if(uppercaseCount > lowercaseCount){
  return s.toUpperCase()
}
else{
  return s.toLowerCase()
}
}

function count (string) {  
  // The function code should be here
  if(string.length == 0){
    return {};
  }
   let collection = {};
   for(let val in string){
      collection[string[val]] = (collection[string[val]] || 0) + 1
    }
  return collection
}