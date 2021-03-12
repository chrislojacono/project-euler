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

//MARCH 9TH
function iqTest(numbers){
  let arrayOfNumbers = numbers.split(" ").map((num) => parseInt(num, 10))
  let odd = 0;
  let even = 0;
  let unique = 0;
  for(let i = 0; i < arrayOfNumbers.length; i++){
    arrayOfNumbers[i] & 1 ? odd++ : even++ 
  }
  if(even > odd){
    for(let j = 0; j < arrayOfNumbers.length; j++){
      if(arrayOfNumbers[j] % 2 !== 0){
        unique = arrayOfNumbers[j]
      }
    }
  }
    if(odd > even){
    for(let k = 0; k < arrayOfNumbers.length; k++){
      if(arrayOfNumbers[k] % 2 == 0){
        unique = arrayOfNumbers[k]
      }
    }
  }
  return arrayOfNumbers.indexOf(unique) + 1
}

iqTest("2 4 7 8 10")


//Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
  if(str == ' ' || str == '   '){
    return ''
  }
  let splitArray = str.split(" ")
  let newArray = []
  for(let i = 0; i < splitArray.length; i ++){
    if( i % 2 !== 0 ){
      newArray.push(splitArray[i].split('').reverse().join('') )
    }
   else{
     newArray.push(splitArray[i])
   }
  }
 return newArray.join(" ")
}



/*
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(str) {
  let newArray = [];
for(let i = 0; i < str.length; i++){
  if(str[i] == str[i].toUpperCase() && isNaN(str[i]) && i !== 0 && str[i] !== '-'){
      newArray.push("-")
      newArray.push(str[i].toLowerCase())
  }
 else if(/^-?\d+$/.test(str[i]) == false && str[i] !== '-'){
      newArray.push(str[i].toLowerCase())
  }
}
let finalString = newArray.join("")
if(finalString[0] == '-'){
  finalString.shift()
}
return finalString
}
 /*
 Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?

If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".
 */


function balance(left,right){
  let leftScore = 0
  let rightScore = 0
  for(let i = 0; i < left.length; i++){
    left[i] == '?' ? leftScore += 3 : leftScore += 2
  }
  for(let j = 0; j < right.length; j++){
    right[j] == '?' ? rightScore += 3 : rightScore += 2
  }
  if(rightScore > leftScore){
    return 'Right'
  }
  if(rightScore < leftScore){
    return 'Left'
  }
  else{
    return 'Balance'
  }
}

function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}