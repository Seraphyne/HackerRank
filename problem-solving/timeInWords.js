function timeInWords(h, m) {
  const number = [
    null,
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  let res = '';
  if (m == 0) res = number[h] + ' o\' clock';
  if (m % 15 == 0) {
    if (m == 15) res = 'quarter past ' + number[h];
    if (m == 30) res = 'half past ' + number[h];
    if (m == 45) res = 'quarter to ' + number[h + 1];
  } else {
    if (m < 30) {
      res =
        (m <= 20 ? number[m] : 'twenty ' + number[m - 20]) +
        (m == 1 ? ' minute' : ' minutes') +
        ' past ' +
        number[h];
    } else {
      m = 60 - m;
      res =
        (m <= 20 ? number[m] : 'twenty ' + number[m - 20]) +
        (m == 1 ? ' minute' : ' minutes') +
        ' to ' +
        number[h + 1];
    }
  }

  return res;
}
