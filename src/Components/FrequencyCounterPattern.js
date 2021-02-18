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

same("anagram", "nagarama");