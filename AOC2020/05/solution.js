import { realInput, sampleInput } from "./input.js";


const chooseHalf = (arr, direction) => direction == "D" ? arr.slice(arr.length / 2) : arr.slice(0, arr.length / 2)
const startingRows = [...Array(128).keys()]
const startingColumns = [...Array(8).keys()]

const findRow = str => {
    let tempArr = startingRows
    for (let i = 0; i <= 6; i++) {
        tempArr = chooseHalf(tempArr, str[i] == "B" ? "D" : "U")
    }
    return tempArr[0];
}

const findColumn = str => {
    let tempArr = startingColumns
    for (let i = 0; i <= 2; i++) {
        tempArr = chooseHalf(tempArr, str[i] == "R" ? "D" : "U")
    }
    return tempArr[0];
}

const sol1 = input => input.split('\n')
    .map(x => findRow(x.slice(0, 7)) * 8 + findColumn(x.slice(7)))


const part1 = sol1(realInput)
const temp = part1.sort((a,b)=> a-b)
const part2 = part1.sort((a,b)=> a-b).slice(7, -8).filter((x, i, arr) => x + 1 != arr[i+1] )[0] + 1

console.log(Math.max(...part1))
console.log(part2)