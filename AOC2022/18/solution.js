import { kosta, realInput, sampleInput } from "./input.js";
console.time()

function createNDimArray(dimensions) {
    if (dimensions.length > 0) {
        var dim = dimensions[0];
        var rest = dimensions.slice(1);
        var newArray = new Array();
        for (var i = 0; i < dim; i++) {
            newArray[i] = createNDimArray(rest);
        }
        return newArray;
    } else {
        return -1;
    }
}


const cubes = realInput.split('\n').map(x => x.split(',').map(y => +y + 1))
const size = 24
const myCubes = createNDimArray([size, size, size])
let sides = 0

const sol1 = () => {
    let counter = cubes.length * 6
    cubes.forEach(c => {
        cubes.forEach(e => {
            const m = e
            const k = c
            if ((e[0] == c[0] && e[1] == c[1] && Math.abs(e[2] - c[2]) == 1)
                || (e[0] == c[0] && e[2] == c[2] && Math.abs(e[1] - c[1]) == 1)
                || (e[1] == c[1] && e[2] == c[2] && Math.abs(e[0] - c[0]) == 1)
            ) counter--
        });
    });
    return counter
}

const checkCube = (a, b, c) => {
    if (myCubes[a][b][c] >= 0) return
    myCubes[a][b][c] = 0
    if (a > 0) {
        if (cubes.some(x => x[0] == a - 1 && x[1] == b && x[2] == c)) {
            sides++
            myCubes[a - 1][b][c] = 0
        } else {
            if (myCubes[a - 1][b][c] == -1) checkCube(a - 1, b, c)
        }
    }
    if (a < size-1) {
        if (cubes.some(x => x[0] == a + 1 && x[1] == b && x[2] == c)) {
            sides++
            myCubes[a + 1][b][c] = 0
        } else {
            if (myCubes[a + 1][b][c] == -1) checkCube(a + 1, b, c)
        }
    }
    if (b > 0) {
        if (cubes.some(x => x[0] == a && x[1] == b - 1 && x[2] == c)) {
            sides++
            myCubes[a][b - 1][c] = 0
        } else {
            if (myCubes[a][b - 1][c] == -1) checkCube(a, b - 1, c)
        }
    }
    if (b < size-1) {
        if (cubes.some(x => x[0] == a && x[1] == b + 1 && x[2] == c)) {
            sides++
            myCubes[a][b + 1][c] = 0
        } else {
            if (myCubes[a][b + 1][c] == -1) checkCube(a, b + 1, c)
        }
    }
    if (c > 0) {
        if (cubes.some(x => x[0] == a && x[1] == b && x[2] == c - 1)) {
            sides++
            myCubes[a][b][c - 1] = 0
        } else {
            if (myCubes[a][b][c - 1] == -1) checkCube(a, b, c - 1)
        }
    }
    if (c <size-1) {
        if (cubes.some(x => x[0] == a && x[1] == b && x[2] == c + 1)) {
            sides++
            myCubes[a][b][c + 1] = 0
        } else {
            if (myCubes[a][b][c + 1] == -1) checkCube(a, b, c + 1)
        }
    }
    return

}

checkCube(22, 22, 22)

// const sol2 = () => {
//     let airCounter = 0
//     for (let i = 2; i < size; i++) {
//         for (let j = 2; j < size; j++) {
//             for (let k = 2; k < size; k++) {
//                 if ((cubes.some(x => x[0] == i && x[1] == j && x[2] == k + 1))
//                     && (cubes.some(x => x[0] == i && x[1] == j && x[2] == k - 1))
//                     && (cubes.some(x => x[0] == i && x[1] == j - 1 && x[2] == k))
//                     && (cubes.some(x => x[0] == i && x[1] == j + 1 && x[2] == k))
//                     && (cubes.some(x => x[0] == i + 1 && x[1] == j && x[2] == k))
//                     && (cubes.some(x => x[0] == i - 1 && x[1] == j && x[2] == k))
//                 ) airCounter++
//             }
//         }
//     }
//     return sol1() - airCounter * 6

// }

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sides);
console.timeEnd('Part2 Time:')

console.timeEnd()