function circularArrayRotation(arr, k, queries) {
  const rotated = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    rotated[(i + k) % arr.length] = arr[i];
  }
  const result = [];
  for (let j of queries) {
    result.push(rotated[j]);
  }
  return result;
}