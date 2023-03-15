const board = document.querySelector('.board');
const size = document.querySelector('#size');
const generateButton = document.querySelector('#generate-button');
const solveButton = document.querySelector('#solve-button');

let currentSize = parseInt(size.value);
let puzzle = generatePuzzle(currentSize);

generateButton.addEventListener('click', () => {
  puzzle = generatePuzzle(currentSize);
  renderBoard(puzzle);
  solveButton.disabled = false;
});

solveButton.addEventListener('click', () => {
  const solution = solveP
