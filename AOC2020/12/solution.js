import { realInput, sampleInput } from "./input.js"

const input1 = realInput.split('\n').map(x => [x[0], Number(x.slice(1))])
const input2 = sampleInput.split('\n').map(x => [x[0], Number(x.slice(1))])


const changeDirection = (direction, turn, degrees) => {
    let left = ['E', 'S', 'W', 'N']
    let right = ['E', 'S', 'W', 'N', 'E', 'S', 'W', 'N']
    return turn == 'R' ? right[left.indexOf(direction) + degrees / 90] : right[left.indexOf(direction) + 4 - degrees / 90]
}

const rotateWaypoint = (turn, degrees, x, xW, y, yW) => {
    const diffX = xW - x;
    const diffY = yW - y;
    if (degrees == 180) return [x - diffX, y - diffY]
    if ((degrees == 90 && turn == 'L') || (degrees == 270 && turn == 'R')) return [x + diffY, y - diffX]
    if ((degrees == 270 && turn == 'L') || (degrees == 90 && turn == 'R')) return [x - diffY, y + diffX]

}

const moveShip = (x, xW, y, yW, times) => {

}


const sol1 = input => {
    let [x, y] = [0, 0];
    let currentDirection = 'E'
    for (let move of input) {
        switch (move[0]) {
            case 'N': y += move[1]
                break;
            case 'S': y -= move[1]
                break;
            case 'E': x += move[1]
                break;
            case 'W': x -= move[1]
                break;
            case 'L': currentDirection = changeDirection(currentDirection, 'L', move[1])
                break;
            case 'R': currentDirection = changeDirection(currentDirection, 'R', move[1])
                break;
            case 'F':
                switch (currentDirection) {
                    case 'N': y += move[1]
                        break;
                    case 'S': y -= move[1]
                        break;
                    case 'E': x += move[1]
                        break;
                    case 'W': x -= move[1]
                        break;
                }
        }
    }
    return Math.abs(x) + Math.abs(y);
}
const sol2 = input => {
    let [x, y, xW, yW] = [0, 0, 10, -1];
    for (let move of input) {
        switch (move[0]) {
            case 'N': yW -= move[1]
                break;
            case 'S': yW += move[1]
                break;
            case 'E': xW += move[1]
                break;
            case 'W': xW -= move[1]
                break;
            case 'L': [xW, yW] = rotateWaypoint('L', move[1], x, xW, y, yW)
                break;
            case 'R': [xW, yW] = rotateWaypoint('R', move[1], x, xW, y, yW)
                break;
            case 'F':
                const difX = xW - x;
                const difY = yW - y;
                x = x + difX * move[1];
                y = y + difY * move[1];

                [xW, yW] = [x + difX, y + difY]
                break;

        }
    }
    return Math.abs(x) + Math.abs(y);
}

// const pp1 = rotateWaypoint('L', 270, 0, 2, 0, -5)
// const pp2 = rotateWaypoint('R', 270, 0, 2, 0, -5)
// const pp3 = rotateWaypoint('R', 90, 0, 2, 0, -5)
// const pp4 = rotateWaypoint('L', 90, 0, 2, 0, -5)

const part1 = sol1(input1)
const part1demo = sol1(input2)

const part2 = sol2(input1)
const part2demo = sol2(input2)

console.log(part1demo, part1)
console.log(part2demo, part2)
