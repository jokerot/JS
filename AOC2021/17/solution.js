const sampleInput = {
    x1: 20,
    x2: 30,
    y1: -5,
    y2: -10
}
const realInput = {
    x1: 277,
    x2: 318,
    y1: -53,
    y2: -92
}
const realInputF = {
    x1: 70,
    x2: 96,
    y1: -124,
    y2: -179
}

const testHit = (x, y, area) => {
    if (x >= area.x1 && x <= area.x2 && y <= area.y1 && y >= area.y2) return true
    return false
}

const shoot2 = (vX, vY, area) => {
    let hit = false
    let x = 0;
    let y = 0;
    let trajectory = [[0, 0]]
    while (!hit && x <= area.x2 && y >= area.y2) {
        x = x + vX
        y = y + vY
        vX = vX > 0 ? vX - 1 : 0
        vY = vY-1
        if (vX == 0 && !(x >= area.x1 && x <= area.x2)) return ({ hit, trajectory })
        hit = testHit(x, y, area)
        trajectory.push([x, y])
    }
    return ({ hit, trajectory })
}

const sol1 = (input) => {
    const hitTrajectories = []
    let counter = 0

    for (let i = 0; i <= input.x2; i++) {
        for (let j = -100; j < 1000; j++) {
            let { hit, trajectory } = shoot2(i, j, input)
            if (hit) {
                counter++
                hitTrajectories.push(trajectory)
            }
        }
    }

    return [Math.max(...hitTrajectories.flatMap(x => x.flatMap(y => y[1]))), hitTrajectories.length, counter]
}
console.time()
console.log(sol1(realInput))
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");