
const str = "BlahBlahBlah"

//compare strings (for sort or similar functions)
str.sort((a,b) => a.localeCompare(b));

//create array with prefilled spots
new Array(n).fill('#')

//multidimesional Array
const newArr = Array.from(Array(sArr.length), () => {
  return new Array(sArr[0].length).fill(".")
})

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

//two arrays intersection
const intersection = (array1, array2) => array1.filter(value => array2.includes(value))

//check if character is a number
function isNumber(char) {
  if (typeof char !== 'string') {
      return false;
  }

  if (char.trim() === '') {
      return false;
  }

  return !isNaN(char);
}

//string is from unique chars
const isUnique = m => ([...new Set(m.split(''))].join('') === m) // probably split is not needed cause string is iterable by default

isNaN //is not a number
//transpose
transpose = m => m[0].map((x,i) => m.map(x => x[i]))


//NEW TIPS from lessons


str.length  ///predefined property
str.toLowerCase()  //method
str.at(-1)   //character at index, can receive negative values
str.substring(1,4) //new method, replaces deprecated "substr"

let nb = 1_000_000; // the "_" is taken out when calculating

const alphabet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getPositionOfLetter(letter) {
    return alphabet.indexOf(letter);
}

const firstHalf = alphabet.substring(0, alphabet.length/2).split('');
const secondHalf = alphabet.substring(alphabet.length/2).split('');