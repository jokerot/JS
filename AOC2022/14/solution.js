import { realInput, sampleInput } from "./input.js";

console.time()

let [maxX, maxY] = [0, 0]

const buildCave = input => {
    // const caves = Array.from(Array(20), () => {
    //     return new Array(50).fill(".")
    // })
    const caves = Array.from(Array(175), () => {
        return new Array(1000).fill(".")
    })
    input.forEach(line => {
        const moves = line.split(' -> ')
        for (let i = 1; i < moves.length; i++) {
            const [Y1, X1] = moves[i - 1].split(',').map(x => +x)
            const [Y2, X2] = moves[i].split(',').map(x => +x)
            const [sX, eX] = X1 <= X2 ? [X1, X2] : [X2, X1]
            const [sY, eY] = Y1 <= Y2 ? [Y1, Y2] : [Y2, Y1]
            // const [sY, eY] = Y1 <= Y2 ? [Y1 - 475, Y2 - 475] : [Y2 - 475, Y1 - 475]
            for (let j = sX; j <= eX; j++) {
                for (let k = sY; k <= eY; k++) {
                    caves[j][k] = '#'
                    maxX = maxX < j ? j : maxX
                    maxY = maxY < k ? k : maxY
                }

            }

        }
    });
    return caves
}

const moveSnowlake = (x, y, arr) => {
    if (arr[x + 1][y] == '.') return [false, x + 1, y]
    if (arr[x + 1][y - 1] == '.') return [false, x + 1, y - 1]
    if (arr[x + 1][y + 1] == '.') return [false, x + 1, y + 1]
    return [true, x, y]
}

const moveSnowlake2 = (x, y, arr) => {
    if (x > 170) return [true, x, y]
    if (arr[x + 1][y] == '.') return [false, x + 1, y]
    if (arr[x + 1][y - 1] == '.') return [false, x + 1, y - 1]
    if (arr[x + 1][y + 1] == '.') return [false, x + 1, y + 1]
    return [true, x, y]
}

const sol1 = () => {
    const caveMatrix = buildCave(realInput.split('\n'))
    let count = 0
    let endlessVoid = false
    while (!endlessVoid) {
        let newSnowflake = [0, 500]
        let rest = false;
        while (!rest) {
            let res = moveSnowlake(...newSnowflake, caveMatrix)
            rest = res[0]
            if (rest) {
                caveMatrix[newSnowflake[0]][newSnowflake[1]] = 'o'
                count++
            }
            else if (res[1] > 170) {
                endlessVoid = true
                break
            } else {
                newSnowflake = [res[1], res[2]]
            }
        }
    }

    return count
}

const sol2 = () => {
    const caveMatrix = buildCave(realInput.split('\n'))
    caveMatrix[172] = new Array(1000).fill("#")

    let count = 0
    let endlessVoid = false
    while (!endlessVoid) {
        let newSnowflake = [0, 500]
        let rest = false;
        while (!rest) {
            let res = moveSnowlake2(...newSnowflake, caveMatrix)
            rest = res[0]
            if (rest) {
                // console.log(newSnowflake[0],newSnowflake[1]);
                caveMatrix[newSnowflake[0]][newSnowflake[1]] = 'o'
                count++
            } else {
                newSnowflake = [res[1], res[2]]
            }
        }
        if (caveMatrix[1][499] != '.' && caveMatrix[1][500] != '.' && caveMatrix[1][501] != '.') {
            // caveMatrix.forEach(element => {
            //     console.log(element.join(''))
            // });
            return ++count
        }
    }

    caveMatrix.forEach(element => {
        console.log(element)
    });

    return count
}


console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.log(maxX, maxY);

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()