function biggerIsGreater(w) {
  let arr = w.split('');
  let peak;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i == 0 && typeof peak === 'undefined') {
      peak = i;
    } else if (arr[i] > arr[i - 1]) {
      peak = i;
      break;
    }
  }

  if (peak == 0) {
    return 'no answer';
  } else if (arr.length <= 2) {
    return arr.reverse().join('');
  }

  let x;

  for (let j = arr.length - 1; j >= peak; j--) {
    if (arr[j] > arr[peak - 1]) {
      x = j;
      break;
    }
  }

  let temp = arr[peak - 1];
  arr[peak - 1] = arr[x];
  arr[x] = temp;

  let right = arr.splice(peak);
  arr = arr.concat(right.reverse());

  return arr.join('');
}
