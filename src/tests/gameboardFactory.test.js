import { gameboardFactory } from '../factories/gameboardFactory';

test('placeShip adds one ship', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(3, [1, 1]);

  expect(gameboard.shipArray.length).toBe(1);
});

test('ship attack gets added to hitArray', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(3, [1, 1]);

  gameboard.receiveAttack([1, 1]);

  const array = [0];

  expect(gameboard.shipArray[0].hitArray).toEqual(array);
});

test('ship attack missed coords do not get added to hit array', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(3, [1, 1]);

  gameboard.receiveAttack([1, 1]);

  const array = [0];

  expect(gameboard.shipArray[0].hitArray).toEqual(array);
});

test('ship attack missed coords get added to missedCoordinates array', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(3, [1, 1]);

  gameboard.receiveAttack([1, 2]);

  const array = [[1, 2]];
  expect(gameboard.missedCoordinates).toEqual(array);
});

test('areAllShipsSunk correct ', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(1, [1, 1]);

  gameboard.receiveAttack([1, 1]);

  expect(gameboard.areAllShipsSunk()).toBe(true);
});

test('areAllShipsSunk does not only return true', () => {
  const gameboard = gameboardFactory();
  gameboard.placeShip(3, [1, 1]);

  gameboard.receiveAttack([3, 3]);

  expect(gameboard.areAllShipsSunk()).toBe(false);
});
