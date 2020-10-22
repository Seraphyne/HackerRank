function sockMerchant(n, ar) {
  let res = 0;
  ar.sort();
  for(let i=0; i<n;i++){
    if(ar[i] == ar[i+1]){
      i++;
      res++;
    }
  }
  return res;
}