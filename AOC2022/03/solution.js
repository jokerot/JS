import { realInput, sampleInput } from "./input.js";
const start = Date.now();

const chars = "#abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

const intersection = (array1, array2) => array1.filter(x => array2.includes(x))

const findBoth = (str) => {
    let arr = str.split('')
    const firstHalf = arr.splice(0, arr.length / 2)
    return intersection(firstHalf, arr)[0]
}

const sol1 = realInput.split('\n').map(x => chars.indexOf(findBoth(x))).reduce((s, y) => s + y, 0)

const sol2 = (input) => {
    const arr = []
    for (let i = 0; i < input.length; i += 3) {
        arr.push(intersection(input[i].split(''), intersection(input[i + 1].split(''), input[i + 2].split('')))[0]);
    }
    return arr.reduce((s, x) => s + chars.indexOf(x), 0)
}

console.log("Part 1: ", sol1);
console.log("Part 2: ", sol2(realInput.split('\n')));

console.log("Time spent: ", Date.now() - start, " ms")