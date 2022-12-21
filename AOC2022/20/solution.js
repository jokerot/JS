import { realInput, sampleInput } from "./input.js";
console.time()

const startArray = realInput.split('\n').reduce((obj, x, i) => ({...obj, [i]: parseInt(x)}), {})
const arrLength = 5000

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

const moveNumber = (arr, i) => {
    const n = startArray[i];
    let oldPos = arr.indexOf(i);
    let newPos = n < 0 ? (oldPos + n + arrLength - 1) % arrLength : (oldPos + n) % arrLength
    if (n > 0){
    newPos += Math.floor((oldPos + n) / arrLength)
    }
    // if (n < 0){
    // newPos += Math.floor((oldPos + n) / arrLength) + 1
    // }
    if (oldPos > newPos) {
            arr.splice(oldPos, 1)
            arr.splice(newPos, 0, i)
        } else {
            arr.splice(newPos + 1, 0, i)
            arr.splice(oldPos, 1)

        }
}

const rearrange = arr => {
    for (let i = 0; i < arrLength; i++) {
        moveNumber(arr, i)
        // console.log(startArray[i], arr);
    }
    return arr;
}

const newArray = [...Array(arrLength).keys()]

rearrange(newArray)

const sol1 = () => 1
const sol2 = () => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()