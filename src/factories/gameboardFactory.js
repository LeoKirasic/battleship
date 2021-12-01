import { shipFactory } from './shipFactory';

const gameboardFactory = () => {
  const shipArray = [];
  const missedCoordinates = [];

  const placeShip = (length, coordinates) => {
    const ship = shipFactory(length, coordinates);
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
  };
};

export { gameboardFactory };
