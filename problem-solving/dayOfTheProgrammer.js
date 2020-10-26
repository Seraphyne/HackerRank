function dayOfProgrammer(year) {
  let isLeefYeer = (year % 4 === 0)
    ? ((year % 100 === 0) ? ((year < 1918 || (year % 400 === 0)) ? true : false) : true)
    : false;

  return `${year === 1918 ? 26 : (isLeefYeer ? 12 : 13)}.09.${year}`;
}