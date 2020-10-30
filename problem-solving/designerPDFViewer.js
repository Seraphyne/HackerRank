function designerPdfViewer(h, word) {
  const alphabetKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
  let values = h,
    associated = alphabetKeys.reduce((previous, key, index) => {
      previous[key] = values[index];
      return previous;
    }, {});
      
  let alphaValues = [];
  word.split('').map((alphabet) => {
    if(associated.hasOwnProperty(alphabet)){
      alphaValues.push(associated[alphabet]);
    }
  });
    
  let max = Math.max.apply(null, alphaValues);
  let length = alphaValues.length;
      
  return max*length;     
}