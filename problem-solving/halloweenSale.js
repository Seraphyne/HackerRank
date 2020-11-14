function howManyGames(p, d, m, s) {
  let totalPurchase=p;
  let gameCount=1;
  let currentPrice;
  if(s<p)
    return 0;
  while(1)
  {
    currentPrice=p-gameCount*d;
    currentPrice=currentPrice<m?m:currentPrice;
    totalPurchase+=currentPrice;
    if(totalPurchase>s){
      break;
    }
    gameCount++;
  }
  return gameCount;
}