// Complete the breakingRecords function below.
function breakingRecords(scores) {

  let highScore = scores[0], lowScore = scores[0], highCount = 0, lowCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      highCount += 1;
    } else if (scores[i] < lowScore) {
      lowScore = scores[i];
      lowCount += 1;
    }
  }

  return [highCount, lowCount];
}