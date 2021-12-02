const shipFactory = (length, coordinates) => {
  const getLength = () => length;
  const getCoordinates = () => coordinates;

  const longCoords = [];
  const place = (length, coordinates) => {
    let counter = 0;
    for (let i = 0; i < length; i++) {
      counter = coordinates[1] + i;
      longCoords.push([coordinates[0], counter]);
      counter++;
    }
  };

  const hitArray = [];
  const coords = coordinates;
  let hitCounter = 0;
  const hit = () => {
    hitArray.push(hitCounter);
    hitCounter++;
  };

  const isSunk = () => {
    if (getLength() === hitArray.length) {
      return true;
    }
    return false;
  };
  return {
    hit,
    isSunk,
    hitArray,
    getLength,
    getCoordinates,
    coords,
    place,
    longCoords,
  };
};

export { shipFactory };
