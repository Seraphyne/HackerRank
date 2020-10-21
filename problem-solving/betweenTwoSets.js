function getTotalX(a, b) {
  // Write your code here
  const lowLimit = a[a.length - 1];
  const highLimit = b[0];
  let consideredMultiples = [];

  for (let i = lowLimit; i <= highLimit; i += lowLimit){    
    consideredMultiples.push(i);}
  consideredMultiples = consideredMultiples.filter(multiple => 
    a.reduce((shouldFilter, val) => 
      (multiple % val !== 0)? false : (shouldFilter)? true: null , true));
  consideredMultiples = consideredMultiples.filter(multiple => 
    b.reduce((shouldFilter, val) => 
      (val % multiple !== 0)? false : (shouldFilter)? true: null , true));
        
  return consideredMultiples.length;
}