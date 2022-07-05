const GRID_WIDTH = 8;
const GRID_SIZE = GRID_WIDTH ** 2;
const TOTAL_COLORS = 7;

const sequenceExists = (grid, color, index) => {
  return (grid[color][index - 2] && grid[color][index - 1])
      || (grid[color][index - 8] && grid[color][index - 16]);
};

const randomColor = () => Math.floor(Math.random() * TOTAL_COLORS ** 2) % TOTAL_COLORS;

const emptyGrid = () => new Array(TOTAL_COLORS)
  .fill(null)
  .map(() => new Array(GRID_SIZE));

const randomGrid = () => {
  let color;
  const grid = emptyGrid();

  for (let i = 0; i < GRID_SIZE; i++) {
    do {
      color = randomColor();
    } while (sequenceExists(grid, color, i));

    grid[color][i] = true;
  }

  return grid;
};

export { randomGrid, GRID_SIZE, TOTAL_COLORS };
