//create array with prefilled spots

new Array(n).fill('#')

function createBinaryString (nMask) {
    // nMask must be between -2147483648 and 2147483647
    for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32;
         nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    return sMask;
  }

  //bin to hexa
const hexa = n => parseInt(n, 2).toString(16).toUpperCase();
//hexa to bin one digit
const tobin = n => parseInt(n, 16).toString(2).padStart(4, '0');
//hexa to bin long
const convertToBin = str => str.split('')
.reduce((hex, x)=> hex + tobin(x), '' )