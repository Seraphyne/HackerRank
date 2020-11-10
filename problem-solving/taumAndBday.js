function taumBday(b, w, bc, wc, z) {
  return BigInt(b) * BigInt(Math.min(bc, wc+z)) + BigInt(w) * BigInt(Math.min(wc, bc+z));
}