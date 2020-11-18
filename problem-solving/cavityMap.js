function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.slice(0, index) + chr + str.slice(index + 1);
}

function cavityMap(grid) {
  const len = grid.length;
  for (let x = 1; x < len - 1; x++) {
    for (let y = 1; y < len - 1; y++) {
      let curr = grid[x].charAt(y);
      let compare = [];
      compare.push(grid[x - 1].charAt(y));
      compare.push(grid[x + 1].charAt(y));
      compare.push(grid[x].charAt(y-1));
      compare.push(grid[x].charAt(y + 1));
      if (compare.every(v => v !== 'X' && v < curr)) {
        grid[x] = setCharAt(grid[x], y, 'X');
      }
    }
  }
  return grid;
}