import { realInput, sampleInput } from "./input.js"

const input = realInput
let changed = false;
const seats = input.split('\n');
let bigMatrix = [new Array(seats[0].length + 2).fill('.').join(''),
...seats.map(x => '.' + x + '.'),
new Array(seats[0].length + 2).fill('.').join('')
]

const countL = (x, y, matrix) => {
    let count = 0;
    for (let i = -1; i <= 1; i++)
        for (let j = -1; j <= 1; j++)
            if (matrix[x + i][y + j] == '#') count++
    if (matrix[x][y] == '#') count--

    if (matrix[x][y] == '#' && count >= 4) {
        changed = true
        return "L"
    }

    if (matrix[x][y] == 'L' && count == 0) {
        changed = true
        return "#"
    }

    return matrix[x][y]
}

const change = (matrix) => {
    const tempMatrix = [...matrix]
    return tempMatrix.map((x, xi) => x.split('').map((y, yi) => y == '.' ? '.' : countL(xi, yi, matrix)).join(''))
}



const sol1 = () => {
    let isChanging = true
    while (isChanging) {
        bigMatrix = change(bigMatrix)
        isChanging = changed;
        changed = false;
    }
    return bigMatrix.flatMap(x=> x.split('').filter(y=>y=='#')).length
}


const part1 = sol1()
// const part2 = sol2()

console.log(part1)
// console.log(part2)
