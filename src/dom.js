import { game } from '.';
import { gameboardFactory } from './factories/gameboardFactory';

const createDom = () => {
  const container = document.getElementById('container');

  const boardsContainer = document.createElement('div');
  boardsContainer.id = 'boards-container';
  container.appendChild(boardsContainer);

  const playerBoard = document.createElement('div');
  playerBoard.id = 'player-board';
  playerBoard.classList = 'board';

  const computerBoard = document.createElement('div');
  computerBoard.id = 'computer-board';
  computerBoard.classList = 'board';

  boardsContainer.appendChild(playerBoard);
  boardsContainer.appendChild(computerBoard);

  return { playerBoard, computerBoard };
};
const renderPlayerBoard = (arr) => {
  const playerBoard = document.getElementById('player-board');

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const box = document.createElement('div');
      box.textContent = arr[i][j];
      box.classList = 'box';
      playerBoard.appendChild(box);
    }
  }
};
const renderComputerBoard = (arr) => {
  const computerBoard = document.getElementById('computer-board');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const box = document.createElement('div');
      box.textContent = arr[i][j];
      box.classList = 'box';
      computerBoard.appendChild(box);
    }
  }
};
export { renderPlayerBoard, createDom, renderComputerBoard };
