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