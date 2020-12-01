function minimumNumber(n, password) {
  let c = 0;
  c += (password.match(/[0-9]/) || []).length;
  c += (password.match(/[a-z]/) || []).length;
  c += (password.match(/[A-Z]/) || []).length;
  c += (password.match(/[\!@#\$%^&\*\(\)\-\+]/) || []).length;
  return Math.max(4 - c, 6 - n);
}
