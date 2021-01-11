function gridSearch(G, P) {
  for (const [rIndex, row] of G.entries()) {
    if (G.length - rIndex < P.length) break;
    for (const [cIndex, col] of [...row].entries()) {
      if (G[0].length - cIndex < P[0].length) break;
      if (col != P[0][0]) continue;
      if (compare(G, P, rIndex, cIndex)) return 'YES';
    }
  }
  return 'NO';
}

function compare(G, P, r, c) {
  for (const [rIndex, row] of P.entries()) {
    for (const [cIndex, col] of [...row].entries()) {
      if (col != G[r + rIndex][c + cIndex]) return false;
    }
  }
  return true;
}
