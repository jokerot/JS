import { realInput, sampleInput } from "./input.js";
console.time()
const regex = /Sensor at x=(-*\d+), y=(-*\d+): closest beacon is at x=(-*\d+), y=(-*\d+)/g

// const line1 = new Array(60).fill(".")
const line1 = new Array(4000000).fill(".")
const size = 4000000
// const size = 20
const linePos = 2000000
// const linePos = 10
let min = 0

console.time('Part1 Time:')
const sensors1 = realInput.split('\n').map(x => {
    return [...x.matchAll(regex)][0].slice(1).map(y => parseInt(y))
})

const findSides = (x1, y1, x2, y2) => {
    const dX = Math.abs(x1 - x2)
    const dY = Math.abs(y1 - y2)
    const radius = dX + dY
    const s = [
        [x1 + radius, y1, x1, y1 + radius],
        [x1, y1 + radius, x1 - radius, y1],
        [x1 - radius, y1, x1, y1 - radius],
        [x1, y1 - radius, x1 + radius, y1]
    ]
    return s
}

const allSides1 = sensors1.reduce((s, x) => [...s, ...findSides(x[0], x[1], x[2], x[3])], [])

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {

    // Check if none of the lines are of length 0
    if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
        return false
    }

    const denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))

    // Lines are parallel
    if (denominator === 0) {
        return false
    }

    let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
    let ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator

    // is the intersection along the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return false
    }

    // Return a object with the x and y coordinates of the intersection
    let x = x1 + ua * (x2 - x1)
    let y = y1 + ua * (y2 - y1)

    return [x, y]
}

const findIntersections = () => {
    const intersections = []
    for (let i = 0; i < allSides1.length - 1; i++) {
        const currentSide = allSides1.pop()
        allSides1.forEach(e => {
            let [x1, y1, x2, y2] = currentSide;
            let [x3, y3, x4, y4] = e;
            let intersection = intersect(x1, y1, x2, y2, x3, y3, x4, y4)
            if (intersection) intersections.push(intersection)
        })
    }
    return intersections.sort((a, b) => a[1] - b[1])
}

const allIntersections = findIntersections()
const pointsOfInterest = allIntersections.flatMap(x => [[x[0] + 1, x[1]], [x[0] - 1, x[1]], [x[0], x[1] + 1], [x[0], x[1] - 1]])
    .filter(y => y[0] > 0 && y[0] < size && y[1] > 0 && y[1] < size)

const inRange = ([x1, y1, x2, y2], [p1, p2]) => {
    const dX = Math.abs(x1 - x2)
    const dY = Math.abs(y1 - y2)
    const radius = dX + dY
    const pX = Math.abs(x1 - p1)
    const pY = Math.abs(y1 - p2)
    const pRadius = pX + pY
    const t = (pRadius <= radius)
    return (pRadius <= radius)
}


const fillLine = (x1, y1, x2, y2) => {
    const dX = Math.abs(x1 - x2)
    const dY = Math.abs(y1 - y2)
    const radius = dX + dY
    const cut = radius - (Math.abs(y1 - linePos))
    if (cut > 0) {
        for (let i = 0; i <= cut; i++) {
            line1[x1 + i] = '#'
            line1[x1 - i] = '#'
            min = min < x1 - i ? min : x1 - i
        }
    }
    if (y1 == linePos) line1[x1] = 'S'
    if (y2 == linePos) line1[x2] = 'B'
}



const sol1 = () => {
    sensors1.forEach(e => {
        fillLine(e[0], e[1], e[2], e[3],)
    });

    let count = 0
    for (let i = min; i < line1.length; i++) {
        if (line1[i] == "#") count++

    }
    return count
}

const sol2 = () => {
    for (let k = 0; k < pointsOfInterest.length; k++) {

        let isDistress = true
        for (let i = 0; i < sensors1.length; i++) {
            if (inRange(sensors1[i], pointsOfInterest[k])) {
                isDistress = false;
                break;
            }
        }
        if (isDistress) {
            console.log(pointsOfInterest[k])
            return pointsOfInterest[k][0] * 4000000 + pointsOfInterest[k][1]
        }

    }
    return "Finish"
}


console.log("Part 1: ", sol1());
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2());
console.timeEnd('Part2 Time:')

console.timeEnd()