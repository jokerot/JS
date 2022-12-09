import { otherInput, realInput, sampleInput } from "./input.js";

console.time()

const moves = realInput.split('\n')

const moveH = (direction, [x, y]) => {
    switch (direction) {
        case 'U':
            return [x, y + 1]
            break;
        case 'D':
            return [x, y - 1]
            break;
        case 'L':
            return [x - 1, y]
            break;
        case 'R':
            return [x + 1, y]
            break;

        default:
            return [x, y]
            break;
    }

}

const moveT = ([xT, yT], [xH, yH]) => {
    if ((Math.abs(xH - xT) == 2 && (Math.abs(yH - yT) >= 1)) || (Math.abs(xH - xT) >= 1 && (Math.abs(yH - yT) == 2))) return [xT + Math.abs(xH - xT) / (xH - xT), yT + Math.abs(yH - yT) / (yH - yT)]
    if (Math.abs(xH - xT) == 2) return [xT + Math.abs(xH - xT) / (xH - xT), yT]
    if (Math.abs(yH - yT) == 2) return [xT, yT + Math.abs(yH - yT) / (yH - yT)]
    return [xT, yT]
}


const sol1 = input => {

    const positions = new Map()
    let currH = [0, 0]
    let currT = [0, 0]

    input.forEach(m => {
        const move = m.split(' ');
        const dir = move[0]
        const count = +move[1]
        for (let i = 0; i < count; i++) {
            currH = moveH(dir, currH)
            currT = moveT(currT, currH)
            positions.set(currT[0].toString() + '-' + currT[1].toString(), 1)
        }
    });
    return positions.size
}

const sol3 = input => {

    const positions = new Map()
    let currH = [0, 0]
    let currT1 = [0, 0]
    let currT2 = [0, 0]
    let currT3 = [0, 0]
    let currT4 = [0, 0]
    let currT5 = [0, 0]
    let currT6 = [0, 0]
    let currT7 = [0, 0]
    let currT8 = [0, 0]
    let currT9 = [0, 0]

    input.forEach(m => {
        const move = m.split(' ');
        const dir = move[0]
        const count = +move[1]
        for (let i = 0; i < count; i++) {
            currH = moveH(dir, currH)
            currT1 = moveT(currT1, currH)
            currT2 = moveT(currT2, currT1)
            currT3 = moveT(currT3, currT2)
            currT4 = moveT(currT4, currT3)
            currT5 = moveT(currT5, currT4)
            currT6 = moveT(currT6, currT5)
            currT7 = moveT(currT7, currT6)
            currT8 = moveT(currT8, currT7)
            currT9 = moveT(currT9, currT8)



            positions.set(currT9[0].toString() + '-' + currT9[1].toString(), 1)
        }
    });
    return positions.size
}


const sol2 = input => {
    let ropePos = [];
    let currH = [0, 0]
    let positions
    input.forEach(m => {
        const move = m.split(' ');
        const dir = move[0]
        const count = +move[1]
        for (let i = 0; i < count; i++) {
            currH = moveH(dir, currH)
            ropePos.push(currH)
        }
    });
    for (let i = 0; i < 9; i++) {
        positions = new Map
        const tempArr = []
        let currT = [0, 0]
        ropePos.forEach(m => {
            currT = moveT(currT, m)
            tempArr.push(currT)
            positions.set(currT[0].toString() + '-' + currT[1].toString(), 1)

        })
        ropePos = tempArr;
    }
    return positions.size;

}

console.time('Part1 Time:')
console.log("Part 1: ", sol1(moves));
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(moves));
console.timeEnd('Part2 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol3(moves));
console.timeEnd('Part2 Time:')
console.timeEnd()