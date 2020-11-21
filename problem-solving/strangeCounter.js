function strangeCounter(t) {
  const startValue = (column) => 3 * 2 ** column;
  const startTime = (column) => 3 * 2 ** column - 2;
  let column = 0;

  while (startTime(column) + startValue(column) - 1 < t) {
    column++;
  }
  return startValue(column) + startTime(column) - t;
}
