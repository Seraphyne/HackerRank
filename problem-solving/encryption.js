function encryption(s) {
  const str = s.replace(/\s+/g, '');
  const l = Math.sqrt(str.length);

  let i = Math.floor(l);
  let j = Math.ceil(l);
  if (i * j < str.length) {
    i++;
  }
  let res = '';
  for (let k = 0; k < j; k++) {
    for (let k2 = 0; k2 < i; k2++) {
      if (k + k2 * j < str.length) {
        res += str.charAt(k + k2 * j);
      }
    }
    res += ' ';
  }
  return res;
}
