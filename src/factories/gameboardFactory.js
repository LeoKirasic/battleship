import { shipFactory } from './shipFactory';

const gameboardFactory = () => {
  const shipArray = [];
  const missedCoordinates = [];

  const createBoard = (rows, cols, defaultValue) => {
    const arr = [];

    for (let i = 0; i < rows; i++) {
      arr.push([]);
      arr[i].push(new Array(cols));
      for (let j = 0; j < cols; j++) {
        arr[i][j] = defaultValue;
      }
    }

    return arr;
  };
  const board = createBoard(10, 10, '');

  const addShipToBoard = (ship) => {
    for (let i = 0; i < ship.longCoords.length; i++) {
      board[ship.longCoords[0][0]].splice(ship.longCoords[i][1], 1, 'X');
    }
  };
  const placeShip = (length, coordinates) => {
    const ship = shipFactory(length, coordinates);
    ship.place(length, coordinates);
    addShipToBoard(ship);
    shipArray.push(ship);
  };

  const receiveAttack = (coordinates) => {
    for (let i = 0; i < shipArray.length; i++) {
      if (
        shipArray[i].getCoordinates()[0] === coordinates[0] &&
        shipArray[i].getCoordinates()[1] === coordinates[1]
      ) {
        shipArray[i].hit();
      } else {
        missedCoordinates.push(coordinates);
      }
    }
  };
  const areAllShipsSunk = () => {
    const sunk = (ship) => ship.isSunk() !== true;
    if (shipArray.every(sunk)) {
      return false;
    }
    return true;
  };
  return {
    placeShip,
    shipArray,
    receiveAttack,
    missedCoordinates,
    areAllShipsSunk,
    board,
  };
};

export { gameboardFactory };
