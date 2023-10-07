const arr = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
];

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
