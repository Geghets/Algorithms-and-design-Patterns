let arr = [1, 8, 2, 6, 7, 9, 5, 4];

let neededNumber = 5;

arr = arr.sort();

console.log(arr);

let begin = 0;

let end = arr.length - 1;

console.log(end);

let foo = true;


while (foo === true) {
  let halfLength = Math.floor((end + begin) / 2);

  if (arr[halfLength] > neededNumber) {
      end = halfLength;
  } else if (arr[halfLength] < neededNumber) {
      begin = halfLength
  }
  else {
      foo = false;
      console.log('index of ' + neededNumber + ' is ' + halfLength);
  }
}
