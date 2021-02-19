//Only works on sorted arrays, you pick a value and decide if the one you are looking for is greater or smaller than the one you are looking for and move from there


// Binary Search
function search(array, val){
    let min = 0;
    let max = array.length - 1;

    while (min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        } else{
            return middle;
        }
    }
    return - 1;
}