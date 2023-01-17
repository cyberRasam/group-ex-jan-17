let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

console.log(data);

//1st
function sorter(arr) {
  let sortedArr = [...arr];
  sortedArr.sort((a, b) => a - b);
  console.log('sorted Array');
  return sortedArr;
}

console.log(sorter(data));

//2nd
function totalOfArr(arr) {
  return arr.reduce((sum, acc) => sum + acc, 0);
}

console.log('total of the array', totalOfArr(data));

//3rd

function oddOrEven(arr) {
  return totalOfArr(arr) % 2 == 0;
}

if (oddOrEven(data)) {
  console.log(oddOrEven(data));
  console.log('Total of Array is Even');
} else {
  console.log(oddOrEven(data));
  console.log('Total of Array is Odd');
}

//4th

const oddAndEvenNumbers = (arr) => {
  let odds = [],
    evens = [];
  arr.forEach((element) => {
    element % 2 != 0 ? odds.push(element) : evens.push(element);
  });
  return [odds, evens];
};

console.log(oddAndEvenNumbers(data));

//5th

function greatestArray(arr) {
  let oddsSum = oddAndEvenNumbers(arr)[0].reduce((sum, acc) => sum + acc, 0);
  let evensSum = oddAndEvenNumbers(arr)[1].reduce((sum, acc) => sum + acc, 0);
  console.log('greatest array is: ');
  return oddsSum > evensSum
    ? oddAndEvenNumbers(arr)[0]
    : oddAndEvenNumbers(arr)[1];
}

console.log(greatestArray(data));

//Optional

const optionalCallback = (x) => {
  return x * 2;
};

console.log('this is the data', data);

/*
When I use data in the lastExc function it doesn't work fine,
I got a print of the data array in the last line and it seems its not mutated 
but still getting some strange output
*/

let arr2 = [5, 10, 20, 30];
function lastExc(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let counter = arr[i];
    result.push(callback(counter));
  }
  console.log(result);
}

lastExc(arr2, optionalCallback);
