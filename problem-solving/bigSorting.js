function bigSorting(unsorted) {
  return unsorted.sort(function (a, b) {
    return a.length == b.length ? (a > b ? 1 : -1) : a.length - b.length;
  });
}
