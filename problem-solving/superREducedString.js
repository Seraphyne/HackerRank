function superReducedString(s) {
  let arr = s.split('');
  let replaced = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      replaced = true;
      arr.splice(i, 2);
      i = i - 1;
    }
  }
  if (replaced == false) {
    return arr.length > 0 ? arr.join('') : 'Empty String';
  }
  return superReducedString(arr.join(''));
}
