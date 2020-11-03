function permutationEquation(p) {
  const arr=[];
  for (let i = 1; i <= p.length; i++) {
    arr.push(p.indexOf(p.indexOf(i)+1)+1);   
  }
  return arr;
}