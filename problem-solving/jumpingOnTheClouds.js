function jumpingOnClouds(c, k) {
  let j = 100,i = 0;
  do {
    j -= (c[i] == 1) ? 3 : 1;
    i = (i + k) % c.length;
  }
  while(i != 0);
  return j;
}