import { realInput, sampleInput } from "./input.js";


const array = sampleInput.split('\n').map(x => x.split(''))
const rows = array.length
const cols = array[0].length
const transposed = array[0].map((_, colIndex) => array.map(row => row[colIndex]));

const visible = (arr, tarr) => {
    let counter = 0;
    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            const tree = arr[i][j]
            const l = arr[i].slice(0, j)
            const r = arr[i].slice(j + 1)
            const u = tarr[j].slice(0, i)
            const d = tarr[j].slice(i + 1)

            if (Math.max(...arr[i].slice(0, j)) < tree || Math.max(...arr[i].slice(j + 1)) < tree
                || Math.max(...tarr[j].slice(0, i)) < tree || Math.max(...tarr[j].slice(i + 1)) < tree) {
                counter++
            }
        }

    }
    return counter + 2 * cols + 2 * (rows - 2)
}

const scores = (x, y, arr) => {
    const tree = arr[x][y]
    let [l, r, u, d] = [1, 1, 1, 1]
    for (let i = 1; i <= y; i++) {
        if (y > 0 && arr[x][y - i] < tree) l++
        else break
    }
    for (let i = y + 1; i < cols; i++) {
        if (y < cols && arr[x][i] < tree) r++
        else break
    }
    for (let i = 1; i <= x; i++) {
        if (x > 0 && arr[x - i][y] < tree) u++
        else break
    }
    for (let i = x + 1; i < rows; i++) {
        if (x < rows && arr[i][y] < tree) d++
        else break
    }
    return l * r * u * d
}

const maxScore = () => {
    let max = 0
    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            let s = scores(i, j, array);
            max = (max > s) ? max : s
        }
    }
}

const sol1 = visible(array, transposed)
const sol2 = maxScore()



console.time('Part1 Time:')
console.log("Part 1: ", sol1);
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2);
console.timeEnd('Part2 Time:')