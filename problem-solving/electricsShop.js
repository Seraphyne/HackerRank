function getMoneySpent(keyboards, drives, s){
  let max = -1;

  for(let i = 0; i < keyboards.length; i++){
    var temp = 0;
    for(let j = 0; j < drives.length; j++){
      if(keyboards[i] + drives[j] <= s){
        temp = keyboards[i] + drives[j];
        max = temp > max ? temp : max;
      }
    }
  }
  return max;
}