import { littleInput, realInput, sampleInput } from "./input.js"

const startArray = realInput.split('\n').map(x => x.split(''))
let changed = false;
const moveDown = (sArr) => {
    const newArr = Array.from(Array(sArr.length), () => {
        return new Array(sArr[0].length).fill(".")
    })

    for (let i = 0; i < sArr.length - 1; i++) {
        for (let j = 0; j < sArr[0].length; j++) {
            if (sArr[i][j] == 'v') {
                if (sArr[i + 1][j] == '.') {
                    newArr[i + 1][j] = 'v'
                    changed = true;
                } else {
                    newArr[i][j] = 'v'
                }
            }
            if (sArr[i][j] == '>') {
                newArr[i][j] = '>'
            }
        }
    }
    for (let j = 0; j < sArr[0].length; j++) {
        if (sArr[sArr.length - 1][j] == 'v') {
            if (sArr[0][j] == '.') {
                newArr[0][j] = 'v'
                changed = true;
            } else {
                newArr[sArr.length - 1][j] = 'v'
            }
        }
        if (sArr[sArr.length - 1][j] == '>') {
            newArr[sArr.length - 1][j] = '>'
        }
    }

    return newArr
}

const moveRight = (sArr) => {
    const newArr = Array.from(Array(sArr.length), () => {
        return new Array(sArr[0].length).fill(".")
    })

    for (let i = 0; i < sArr.length; i++) {
        for (let j = 0; j < sArr[0].length - 1; j++) {
            if (sArr[i][j] == '>') {
                if (sArr[i][j + 1] == '.') {
                    newArr[i][j + 1] = '>'
                    changed = true;
                } else {
                    newArr[i][j] = '>'
                }
            }
            if (sArr[i][j] == 'v') {
                newArr[i][j] = 'v'
            }
        }
        if (sArr[i][sArr[0].length - 1] == '>') {
            if (sArr[i][0] == '.') {
                newArr[i][0] = '>'
                changed = true;
            } else {
                newArr[i][sArr[0].length - 1] = '>'
            }
        }
        if (sArr[i][sArr[0].length - 1] == 'v') {
            newArr[i][sArr[0].length - 1] = 'v'
        }
    }

    return newArr
}
let nextMove1 = moveRight(startArray)
let nextMove2 = moveDown(nextMove1)
const sol1 = inputArr => {
    let counter = 0
    while (changed == true) {
        changed = false
        inputArr = moveDown(moveRight(inputArr))
        counter++
    }
    return counter
}


console.time()
let look = sol1(startArray)
console.log(look)
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");