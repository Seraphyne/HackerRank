function fairRations(B) {
  var loavesCount = 0;
  for (var i = 0; i < B.length - 1; i++) {
    if (B[i] % 2 === 1) {
      B[i]++;
      B[i+1]++;
      loavesCount += 2;
    }      
    if(i === B.length - 2 && B[B.length - 1] % 2 === 1) {
      return 'NO';
    }
  }
  return loavesCount;
}