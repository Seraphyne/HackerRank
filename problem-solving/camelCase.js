function camelcase(s) {
  return s.split('').filter((v) => v.charCodeAt(0) < 97).length + 1;
}
