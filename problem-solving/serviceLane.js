function serviceLane(width, cases) {

  const theResult = [];

  for (let c of cases) {
    const slicedArr = width.slice(c[0], c[1] + 1);
    const min = Math.min(...slicedArr);
    theResult.push(min);
  }
  return theResult;
}

//Had to modify the main function in order to pass. Bug code! No width passed on the original main
//Add this part as well

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nt = readLine().split(' ');

  const n = parseInt(nt[0], 10);

  const t = parseInt(nt[1], 10);

  const width = readLine().split(' ').map(widthTemp => parseInt(widthTemp, 10));

  let cases = Array(t);

  for (let i = 0; i < t; i++) {
    cases[i] = readLine().split(' ').map(casesTemp => parseInt(casesTemp, 10));
  }

  let result = serviceLane(width, cases);

  ws.write(result.join('\n') + '\n');

  ws.end();
}