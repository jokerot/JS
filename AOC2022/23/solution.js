import { realInput, sampleInput, tinny } from "./input.js";
console.time()
const order = ['N', 'S', 'W', 'E']
const startMatrix = realInput.split('\n').map(x => x.split(''))
const height = startMatrix.length
const width = startMatrix[0].length

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
            if (startMatrix[i][j] == "#" && (!cleanCheck(i,j))) {
                let p = propose(startMatrix, i, j)

                if (p) {
                    p = p[0] + "-" + p[1]
                    proposals.push([[i, j], p])
                }
            }
        }
    }

    const wannaGo = proposals.map(x => x[1])
    const doubles = wannaGo.filter((x => wannaGo.filter(y => y == x).length > 1))
    const freeToGo = proposals.filter(x => !doubles.includes(x[1]))

    freeToGo.forEach(e => {
        let [a, b] = e[1].split('-')
        let [x, y] = e[0]
        startMatrix[x][y] = '.';
        startMatrix[a][b] = '#';

    });

    order.push(order.shift())
}

const sol1 = () => {
    for (let i = 0; i < 10; i++) {
        round()
        startMatrix.forEach(element => {
            console.log(element.join(''))
        });
        let h
    }

    const count = startMatrix.reduce((sum, x) => sum + x.filter(y=> y=='.').length, 0)
}
const sol2 = () => 1

console.time('Part1 Time:')
console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()