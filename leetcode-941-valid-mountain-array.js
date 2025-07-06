// Given an array of integers arr, return true if and only if it is a valid mountain array.
//
//     Recall that arr is a mountain array if and only if:
//
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
//     arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

function validMountainArray(arr) {
    if (arr.length < 3 || arr[0] > arr[1]) {return false}
    let isTopFound = false;

    for (let i = 0; i < arr.length -1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }

        if (!isTopFound) {
            if (arr[i+1] < arr[i]) {
                isTopFound = true;
            }
        } else {
            if(arr[i+1] > arr[i]) {
                return false;
            }
        }
    }

    return  isTopFound;
}

let arr = [0,3,2,1];
console.log(validMountainArray(arr));
