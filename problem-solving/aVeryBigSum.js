function aVeryBigSum(ar) {
  let totalSum = 0;
  
  for (let i = 0; i < ar.length; i++) {
    totalSum += ar[i];
  }    
  return totalSum;
}