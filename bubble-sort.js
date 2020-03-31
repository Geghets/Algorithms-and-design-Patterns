function bubbleSort(unsortedArray) {
    for (let i = 0; i < unsortedArray.length; i++) {
        for(let j = 0; j < unsortedArray.length - 1; j++) {
            if(unsortedArray[i] < unsortedArray[j]) {
                let box = unsortedArray[j];
                unsortedArray[j] = unsortedArray[i];
                unsortedArray[i] = box;
            }
        }
    }
    console.log(unsortedArray);
}

bubbleSort([1, 5, 3, 4]);