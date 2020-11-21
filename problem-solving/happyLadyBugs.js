function happyLadybugs(b) {
  return (b.includes('_') ? b.split('').sort() : b.split(''))
    .filter((c) => c != '_')
    .every((c, i, a) => c == a[i + 1] || c == a[i - 1])
    ? 'YES'
    : 'NO';
}
