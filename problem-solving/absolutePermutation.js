// eslint-disable-next-line no-unused-vars
function absolutePermutation(n, k) {
  let answer = new Map();
  for (let i = 1; i <= n; i++) {
    let value = i <= k ? i + k : i - k;
    if (value > n) {
      return [-1];
    }
    if (answer.get(value)) {
      value = i + k;
      if (value > n) {
        return [-1];
      }
    }
    answer.set(value, 1);
  }
  return Array.from(answer.keys());
}
