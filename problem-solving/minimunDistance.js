function minimumDistances(a) {
  let lastSeen = {};
  let dist = -1;
  [...a].forEach((v, i) => {
    if (lastSeen.hasOwnProperty(v)) {
      let thisDist = i - lastSeen[v];
      dist = Math.min(thisDist, (dist === -1 ? thisDist : dist));
    }
    lastSeen[v] = i;
  });
  return dist;
}