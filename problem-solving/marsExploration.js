function marsExploration(s) {
  var n = s.length;
  var r = "SOS".repeat(n / 3);
  var t = 0;

  for (var i = 0; i < n; i++) {
    if (s[i] !== r[i]) {
      t++;
    }
  }

  return t;
}
