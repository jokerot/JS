import { realInput, sampleInput } from "./input.js";

console.time()

const elevation = "abcdefghijklmnopqrstuvwxyz"

const start = [20, 0]
const [eX, eY] = [20, 68]
// const start = [0, 0]
// const [eX, eY] = [2, 5]

const matrix = realInput.split('\n').map(x => x.split('').map(y => elevation.indexOf(y)))
const rows = matrix.length
const cols = matrix[0].length
const trajectories = []

const valuesArray = Array.from(Array(rows), () => {
    return new Array(cols).fill(-1)
})
valuesArray[20][0] = 0
let changed = true

const populate = (x, y, value, valuesArray) => {
    let ch = false
    if (x > 0 && matrix[x - 1][y] <= matrix[x][y] + 1 ) {
        if (valuesArray[x - 1][y] > value || !(valuesArray[x - 1][y] >= 0)) {
            valuesArray[x - 1][y] = value
            ch = true
        }
    }
    if (x < rows - 1 && matrix[x + 1][y] <= matrix[x][y] + 1 ) {
        if (valuesArray[x + 1][y] > value || !(valuesArray[x + 1][y] >= 0)) {
            valuesArray[x + 1][y] = value
            ch = true
        }
    }
    if (y > 0 && matrix[x][y - 1] <= matrix[x][y]+ 1 ) {
        if (valuesArray[x][y - 1] > value || !(valuesArray[x][y - 1] >= 0)) {
            valuesArray[x][y - 1] = value
            ch = true
        }
    }
    if (y < cols - 1 && matrix[x][y + 1] <= matrix[x][y] + 1 ) {
        if (valuesArray[x][y + 1] > value || !(valuesArray[x][y + 1] >= 0)) {
            valuesArray[x][y + 1] = value
            ch = true
        }
    }
    if (ch) changed = true
    return
}


const sol1 = () => {

    while (changed) {
        changed = false
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (valuesArray[i][j] >= 0) {
                    populate(i, j, valuesArray[i][j] + 1)
                }

            }

        }
    }
    return valuesArray[eX][eY]
}

const solT = (s1, s2) => {
    const valuesArray2 = Array.from(Array(rows), () => {
        return new Array(cols).fill(-1)
    })
    valuesArray2[s1][s2] = 0
    while (changed) {
        changed = false
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (valuesArray2[i][j] >= 0) {
                    populate(i, j, valuesArray2[i][j] + 1, valuesArray2)
                }

            }

        }
    }
    return valuesArray2[eX][eY]
}

const sol2 = () => {
    let min = 20000
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            changed = true
            if (matrix[i][j] == 0) {
                const count = solT(i, j)
                min = (min > count && count > -1 ) ? count  : min
            }
        }
    }
    return min
}

// console.time('Part1 Time:')
// console.log("Part 1: ", sol1());
// console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(sampleInput.split('\n\n')));
console.timeEnd('Part2 Time:')

console.timeEnd()