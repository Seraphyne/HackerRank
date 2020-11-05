function squares(a, b) {
  let square = 0, i = 1, count = 0;
  while (square <= b) {
    square = i * i;
    if (square >= a && square <= b) {
      count += 1;
    }
    i += 1;
  }
  return count;
}