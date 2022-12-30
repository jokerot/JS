import { realInput, sampleInput, tinny } from "./input.js";
console.time()
const order = ['N', 'S', 'W', 'E']
const sMatrix = realInput.split('\n').map(x => x.split(''))
let height = sMatrix.length + 20
let width = sMatrix[0].length + 20
let maxX = 15
let minX = 15
let maxY = 15
let minY = 15
let theyMoved = true

let startMatrix = sMatrix.map(x => (".........." + x.join('') + "..........").split(''))
for (let i = 0; i < 10; i++) {
    startMatrix.unshift(new Array(width).fill('.'))
    startMatrix.push(new Array(width).fill('.'))

}

//NEED TO EXPAND THE GROUND ON EVERY ROUND!!!!! DUMBO

const cleanCheck = (x, y) => {
    if (startMatrix[x - 1]) {
        if (startMatrix[x - 1][y - 1] == "#" || startMatrix[x - 1][y] == "#" || startMatrix[x - 1][y + 1] == "#") return false
    }
    if (startMatrix[x][y - 1] == "#" || startMatrix[x][y + 1] == "#") return false
    if (startMatrix[x + 1]) {
        if (startMatrix[x + 1][y - 1] == "#" || startMatrix[x + 1][y] == "#" || startMatrix[x + 1][y + 1] == "#") return false
    }
    return true
}

const propose = (arr, x, y) => {
    let val = null
    for (let i = 0; i <= 3; i++) {
        switch (order[i]) {
            case 'N':
                if (x > 0 && y > 0 && y < width - 1) {
                    if (arr[x - 1][y - 1] == '.' && arr[x - 1][y] == '.' && arr[x - 1][y + 1] == '.') {
                        val = [x - 1, y]
                    }
                }
                break;
            case 'S':
                if (x < height - 1 && y > 0 && y < width - 1) {
                    if (arr[x + 1][y - 1] == '.' && arr[x + 1][y] == '.' && arr[x + 1][y + 1] == '.') {
                        val = [x + 1, y]
                    }
                }
                break;
            case 'W':
                if (x < height - 1 && x > 0 && y > 0) {
                    if (arr[x + 1][y - 1] == '.' && arr[x][y - 1] == '.' && arr[x - 1][y - 1] == '.') {
                        val = [x, y - 1]
                    }
                }
                break;
            case 'E':
                if (x < height - 1 && x > 0 && y < width - 1) {
                    if (arr[x + 1][y + 1] == '.' && arr[x][y + 1] == '.' && arr[x - 1][y + 1] == '.') {
                        val = [x, y + 1]
                    }
                }
                break;

            default:
                val = null
        }
        if (val) break;
    }
    return val;
}

const round = () => {
    const proposals = []
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (startMatrix[i][j] == "#" && (!cleanCheck(i, j))) {
                let p = propose(startMatrix, i, j)

                if (p) {
                    p = p[0] + "-" + p[1]
                    proposals.push([[i, j], p])
                }
            }
        }
    }

    const wannaGo = proposals.map(x => x[1])
    if (wannaGo.length) theyMoved = true
    const doubles = wannaGo.filter((x => wannaGo.filter(y => y == x).length > 1))
    const freeToGo = proposals.filter(x => !doubles.includes(x[1]))

    freeToGo.forEach(e => {
        let [a, b] = e[1].split('-')
        let [x, y] = e[0]
        startMatrix[x][y] = '.';
        startMatrix[a][b] = '#';
        maxX = (maxX < +a) ? +a : maxX
        maxY = (maxY < +b) ? +b : maxY
        minX = (minX > +a) ? +a : minX
        minY = (minY > +b) ? +b : minY
    });

    order.push(order.shift())
}

const sol1 = () => {
    for (let i = 0; i < 10; i++) {
        round()
        // startMatrix.forEach(element => {
        //     console.log(element.join(''))
        // });
        // let h
    }

    const count = startMatrix.reduce((sum, x) => sum + x.filter(y => y == '#').length, 0)
    return (maxX + 1 - minX) * (maxY + 1 - minY) - count
}
const sol2 = () => {
    let moves = 0
    while (theyMoved) {
        moves++
        theyMoved = false
        round()

        if (moves % 10 == 0) {
            startMatrix = startMatrix.map(x => (".........." + x.join('') + "..........").split(''))
            width = startMatrix[0].length
            for (let i = 0; i < 10; i++) {
                startMatrix.unshift(new Array(width).fill('.'))
                startMatrix.push(new Array(width).fill('.'))

            }
            height = startMatrix.length
        }
    }

    return moves + 10
}

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(), maxX, maxY, minX, minY);
console.timeEnd('Part2 Time:')

console.timeEnd()