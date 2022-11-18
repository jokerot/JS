import { realInput, sampleInput } from "./input.js"

const checkSum = (arr, n) => {
    for (let i = 0; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++) {
            if (+arr[i] + Number(arr[j]) == +n && arr[i] != arr[j]) return true
        }
    return false
}

const contigousList = (arr, n) => {
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++) {
            if (arr.slice(i, j).reduce((sum, x) => sum + x, 0) == n) return arr.slice(i, j)
        }
    return [];
}

const sol1 = (arr) => {
    for (let i = 0; i < arr.length; i++)
        if (!checkSum(arr.slice(i, i + 25), arr[i + 25])) return arr[i + 25];
    return 0
}

const sol2 = (arr) => {
    let list = []
    for (let i = 0; i < arr.length; i++)
        if (!checkSum(arr.slice(i, i + 25), arr[i + 25])) {
            list = contigousList(arr.slice(0, i + 25), arr[i + 25])
            return Math.max(...list) + Math.min(...list)
        }
    return 0
}


// const part1 = sol1(realInput.split('\n'))
const part2 = sol2(realInput.split('\n').map(x=> Number(x)))

// console.log(part1)
console.log(part2)
