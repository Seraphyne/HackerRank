function beautifulDays(i, j, k) {
  let count=0;   
  for(let x=i; x<=j; x++){
    let y = x.toString().split('').reverse().join('');
    let sol = Math.abs((x-y)/k);

    if(Number.isInteger(sol)){
      count+=1;
    }
  }
  return count;
}