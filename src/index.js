import css from './style.css';
import * as dom from './dom';
import { gameboardFactory } from './factories/gameboardFactory';
import { shipFactory } from './factories/shipFactory';

const game = () => {
  const player = gameboardFactory();
  const computer = gameboardFactory();

  player.placeShip(5, [8, 2]);
  player.placeShip(4, [1, 6]);
  player.placeShip(3, [5, 3]);
  player.placeShip(2, [3, 2]);
  player.placeShip(1, [4, 0]);

  computer.placeShip(5, [0, 0]);
  computer.placeShip(4, [1, 0]);
  computer.placeShip(3, [2, 0]);
  computer.placeShip(2, [3, 0]);
  computer.placeShip(1, [4, 0]);

  console.log(player.board);
  console.log(computer.board);

  dom.createDom();
  dom.renderPlayerBoard(player.board);
  dom.renderComputerBoard(computer.board);
};

game();

export { game };
