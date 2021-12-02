const { shipFactory } = require('../factories/shipFactory');

test('hit function pushes one value to array', () => {
  const ship = shipFactory(5);

  ship.hit(0);
  expect(ship.hitArray.length).toBe(1);
});

test('hit function pushes multiple values to array', () => {
  const ship = shipFactory(5);

  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  expect(ship.hitArray.length).toBe(3);
});

test('hit function pushes values in correct order', () => {
  const ship = shipFactory(5);

  const expectedArray = [0, 1, 2];
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);

  expect(ship.hitArray).toEqual(expectedArray);
});

test('isSunk positive test', () => {
  const ship = shipFactory(3);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);

  expect(ship.isSunk()).toBe(true);
});

test('isSunk negative test', () => {
  const ship = shipFactory(4);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);

  expect(ship.isSunk()).toBe(false);
});

test('Ship coordinates are placed properly', () => {
  const ship = shipFactory(3);

  const expectedArray = [
    [0, 0],
    [0, 1],
    [0, 2],
  ];
  ship.place(3, [0, 0]);
  expect(ship.longCoords).toEqual(expectedArray);
});

test('ship coordinates placed properly with long ship', () => {
  const ship = shipFactory(5);

  const expectedArray = [
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
  ];
  ship.place(5, [5, 5]);

  expect(ship.longCoords).toEqual(expectedArray);
});
