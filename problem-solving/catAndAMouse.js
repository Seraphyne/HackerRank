function catAndMouse(x, y, z) {
  while (true) {
    if (x < z) {
      x += 1;
    } else {
      x -= 1;
    }

    if (y < z) {
      y += 1;
    } else {
      y -= 1;
    }
    if (x === z && y === z) {
      return "Mouse C"
    }
    else if (x === z) {
      return "Cat A";
    } else if (y === z) {
      return "Cat B";
    }
  }
}