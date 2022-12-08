import { realInput, sampleInput } from "./input.js"

const startArray = sampleInput.split('\n').map(x => x.split(''))
const expandArray = arr => {
    const newArray = startArray.map(x => [...x, x[0]])
    newArray.push(startArray[0])
    return newArray
}

const moveFish = (sArr, eArr) => {
    const newArr = Array.from(Array(sArr.length + 1), () => {
        return new Array(sArr[0].length + 1).fill(".")
    })

    for (let i = 0; i < sArr.length; i++) {
        for (let j = 0; j < sArr[0].length; j++) {
            const pi = 3.14
            if (sArr[i][j] == 'v') {
                if (eArr[i + 1][j] == '.') {
                    newArr[i + 1][j] = 'v'
                } else {
                    newArr[i][j] = 'v'
                }
            } else if (sArr[i][j] == '>') {
                if (eArr[i][j + 1] == '.') {
                    newArr[i][j + 1] = '>'
                } else {
                    newArr[i][j] = '>'
                }
            }
        }
    }

    for (let k = 0; k < sArr.length; k++) {
        newArr[k][0] = newArr[k][sArr.length];
        newArr[k].pop()
    }
    for (let k = 0; k < sArr.length[0]; k++) {
        newArr[0][k] = newArr[k][sArr.length];
    }
    newArr.pop()

    return newArr
}

const moveDown = (sArr, eArr) => {
    const newArr = Array.from(Array(sArr.length + 1), () => {
        return new Array(sArr[0].length + 1).fill(".")
    })

    for (let i = 0; i < sArr.length; i++) {
        for (let j = 0; j < sArr[0].length; j++) {
            const pi = 3.14
            if (sArr[i][j] == 'v') {
                if (eArr[i + 1][j] == '.') {
                    newArr[i + 1][j] = 'v'
                } else {
                    newArr[i][j] = 'v'
                }
            } else if (sArr[i][j] == '>') {
                newArr[i][j] = '>'
            }
        }
    }

    for (let k = 0; k < sArr.length; k++) {
        newArr[k][0] = newArr[k][sArr.length];
        newArr[k].pop()
    }
    for (let k = 0; k < sArr.length[0]; k++) {
        newArr[0][k] = newArr[k][sArr.length];
    }
    newArr.pop()

    return newArr
}

const moveRight = (sArr, eArr) => {
    const newArr = Array.from(Array(sArr.length + 1), () => {
        return new Array(sArr[0].length + 1).fill(".")
    })

    for (let i = 0; i < sArr.length; i++) {
        for (let j = 0; j < sArr[0].length; j++) {
            if (sArr[i][j] == '>') {
                if (eArr[i][j + 1] == '.') {
                    newArr[i][j + 1] = '>'
                } else {
                    newArr[i][j] = '>'
                }
            } else if (sArr[i][j] == 'v') {
                newArr[i][j] = 'v'
            }
        }
    }

    for (let k = 0; k < sArr.length; k++) {
        newArr[k][0] = newArr[k][sArr.length];
        newArr[k].pop()
    }
    for (let k = 0; k < sArr.length[0]; k++) {
        newArr[0][k] = newArr[k][sArr.length];
    }
    newArr.pop()

    return newArr
}
let nextMove1 = moveRight(startArray, expandArray(startArray))
let nextMove2 = moveDown(nextMove1, expandArray(nextMove1))
const sol1 = input => 1

console.time()
console.log(sol1(realInput))
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");