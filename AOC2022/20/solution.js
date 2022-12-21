import { realInput, sampleInput } from "./input.js";
console.time()

const startArray = realInput.split('\n').map(x => parseInt(x))
const arrLength = startArray.length

const moveNumber = (arr, n) => {

    let oldPos = arr.indexOf(n);
    let newPos = n < 0 ? (oldPos + n + arrLength - 1) % arrLength : (oldPos + n) % arrLength
    if (n > 0){
    newPos += Math.floor((oldPos + n) / arrLength)
    }
    // if (n < 0){
    // newPos += Math.floor((oldPos + n) / arrLength) + 1
    // }
    if (oldPos > newPos) {
            arr.splice(oldPos, 1)
            arr.splice(newPos, 0, n)
        } else {
            arr.splice(newPos + 1, 0, n)
            arr.splice(oldPos, 1)

        }
}

const rearrange = arr => {
    for (let i = 0; i < arrLength; i++) {
        moveNumber(arr, startArray[i])
        // console.log(startArray[i], arr);
    }
    return arr;
}

const newArray = [...startArray]

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