const arr = [
  [10, 2, 3],
  [3, 9, 5],
  [7, 7, 8],
];

// for loop method

let mainDiagonal = [];
let secondaryDiagonal = [];

for (let i = 0; i < arr.length; i++) {
  mainDiagonal.push(arr[i][i]);
  secondaryDiagonal.push(arr[i][arr.length - 1 - i]);
}

const sumMainDiagonal = mainDiagonal.reduce((acc, curr) => acc + curr, 0);
const sumSecondaryDiagonal = secondaryDiagonal.reduce(
  (acc, curr) => acc + curr,
  0
);

const diagonalDiff = Math.abs(sumMainDiagonal - sumSecondaryDiagonal);
console.log(diagonalDiff);

// forEach method

let sum1 = 0;
let sum2 = 0;

arr.forEach((row, i) => {
  //current row being processed = an array that contains the elements of the row
  sum1 += row[i];
  sum2 += row[arr.length - 1 - i];
});

const diagonalDiffForEach = Math.abs(sum1 - sum2);
console.log(diagonalDiffForEach);

// reduce method

const firstDiagonalSum = arr.reduce((acc, row, i) => acc + row[i], 0);

const secondDiagonalSum = arr.reduce(
  (acc, row, i) => acc + row[arr.length - 1 - i],
  0
);

const diagonalDiffReduce = Math.abs(firstDiagonalSum - secondDiagonalSum);
console.log(diagonalDiffReduce);

// map method

const sumOneMap = arr.map((row, i) => row[i]).reduce((acc, curr) => acc + curr);
const sumTwoMap = arr
  .map((row, i) => row[arr.length - 1 - i])
  .reduce((acc, curr) => acc + curr);

const diagonalDiffMap = Math.abs(sumOneMap - sumTwoMap);
console.log(diagonalDiffMap);
