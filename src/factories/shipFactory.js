const shipFactory = (length, coordinates) => {
  const getLength = () => length;
  const getCoordinates = () => coordinates;
  const hitCoordinatesArray = [];
  const isHit = (coordinate) => {
    hitCoordinatesArray.push(coordinate);
  };

  const isSunk = (length) => {
    if (length === hitCoordinatesArray.length) {
      return true;
    }
    return false;
  };
  return { isHit, isSunk };
};

export { shipFactory };
