module.exports = function getSeason(date = null) {
  if(arguments.length == 0) return 'Unable to determine the time of year!'; 
  if(typeof date === 'function') date();
  if(!(date instanceof Date)) throw Error(); 

  let monthNumber = date.getUTCMonth();
  switch(monthNumber) {
    case 11:
    case 0:
    case 1: return 'winter';
    case 2:
    case 3:
    case 4: return 'spring';
    case 5:
    case 6:
    case 7: return 'summer';
    case 8:
    case 9:
    case 10: return 'autumn'
    default: throw Error();
  }
};
