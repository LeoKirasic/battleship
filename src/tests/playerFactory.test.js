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

  expect(ship.isSunk(3)).toBe(true);
});

test('isSunk negative test', () => {
  const ship = shipFactory(4);
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);

  expect(ship.isSunk(4)).toBe(false);
});
