/* eslint-disable no-console */
function bonAppetit(bill, k, b) {
    
  bill[k]=0;
  let reducer=(accumulator,currentValue)=> accumulator+currentValue;

  let annaExpectedBill = bill.reduce(reducer)/2;
  if(b == annaExpectedBill){
    console.log('Bon Appetit');
  }
  else{
    console.log(b-annaExpectedBill);
  } 
}