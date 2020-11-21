function stones(n, a, b) {
  let res = [];
  n = n - 1;
  for (let i = 0; i <= n; i++) {
    let num = a * i + b * (n - i);
    if (!res.includes(num)) res.push(num);
  }
  res = res.sort((a, b) => a - b);
  return res;
}
