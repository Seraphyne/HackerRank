/* eslint-disable no-unused-vars */
function surfaceArea(A) {
  let S = 0;
  let kf = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      kf =
        (j > 0 && A[i][j - 1]
          ? A[i][j] > A[i][j - 1]
            ? A[i][j - 1]
            : A[i][j]
          : 0) +
        (i > 0 && A[i - 1][j]
          ? A[i][j] > A[i - 1][j]
            ? A[i - 1][j]
            : A[i][j]
          : 0);
      S += 4 * A[i][j] + 2 - 2 * kf;
    }
  }
  return S;
}
