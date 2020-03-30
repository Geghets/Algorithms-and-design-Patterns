function binarySearch (sortedArray, searchValue) {

    let start = 0;

    let end = arr.length - 1;

    let foo = true;

    while (foo === true) {
        let halfLength = Math.floor((end + start) / 2);

        if(sortedArray[halfLength] > searchValue) {
            end = halfLength - 1;
        } else if (sortedArray[halfLength] < searchValue) {
            start = halfLength + 1;
        }
        else {
            foo = false;
            console.log('index of ' + searchValue + ' is ' + halfLength);
        }
    }

}

let arr = [1, 8, 2, 6, 7, 9, 5, 4];

arr = arr.sort();

binarySearch(arr, 5);