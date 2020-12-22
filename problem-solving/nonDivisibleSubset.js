function nonDivisibleSubset(k, s) {
  let count = Array.apply(null, Array(k)).map(function (x, i) {
    return 0;
  });

  s.forEach((item) => {
    let remainder = item % k;
    count[remainder]++;
  });

  let ans = Math.min(count[0], 1);

  if (k % 2 == 0) {
    ans += Math.min(count[k / 2], 1);
  }

  for (let i = 1; i < k / 2; i++) {
    if (i != k - i) {
      ans += Math.max(count[i], count[k - i]);
    }
  }

  return ans;
}
