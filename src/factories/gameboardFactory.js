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
      if (shipArray[i].coordinates !== coordinates) {
        missedCoordinates.push(coordinates);
      } else {
        shipArray[i].hit();
      }
    }
  };
  return { placeShip, shipArray, receiveAttack };
};
