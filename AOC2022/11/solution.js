import { realInput, sampleInput } from "./input.js";

console.time()

const getMmonkeys = m => {
    const monkeyArray = []
    m.forEach(e => {
        const lines = e.split('\n')
        const obj = {}
        lines.shift()
        obj.items = lines[0].trim().slice("Starting items: ".length - 1).split(',').map(x => +x)
        obj.operation = lines[1].trim().slice("Operation: new = old ".length, "Operation: new = old ".length + 1)
        obj.worry = lines[1].split(' ').pop()
        obj.divider = +lines[2].split(" ").pop()
        obj.trueMonkey = +lines[3].split(' ').pop()
        obj.falseMonkey = +lines[4].split(' ').pop()
        obj.count = 0
        monkeyArray.push(obj)
    });
    return monkeyArray
}

const sol1 = monkeys => {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < monkeys.length; j++) {
            const monkey = monkeys[j];
            for (let k = 0; k < monkey.items.length; k++) {
                const item = monkey.items[k]
                const w = Math.floor(isNaN(monkey.worry) ? item * item / 3 : Math.floor(monkey.operation == "*" ? item * +monkey.worry / 3 : (item + +monkey.worry) / 3))
                if (w % monkey.divider == 0) monkeys[monkey.trueMonkey].items.push(w)
                else monkeys[monkey.falseMonkey].items.push(w)
                monkey.count = monkey.count + 1
            }
            monkey.items = []
        }
    }

    return monkeys.sort((a, b) => a.count - b.count).slice(-2).reduce((m, x) => m * x.count, 1)
}

const sol2 = monkeys => {
    const nzs = monkeys.reduce((nzs, x) => nzs * x.divider, 1)
    for (let i = 1; i <= 10000; i++) {
        for (let j = 0; j < monkeys.length; j++) {
            const monkey = monkeys[j];
            for (let k = 0; k < monkey.items.length; k++) {
                const item = monkey.items[k]
                let w = isNaN(monkey.worry) ? item * item : monkey.operation == "*" ? item * parseInt(monkey.worry) : (item + parseInt(monkey.worry))
                w = w % nzs
                if (w % monkey.divider == 0) {
                    monkeys[monkey.trueMonkey].items.push(w)
                }
                else monkeys[monkey.falseMonkey].items.push(w)
                monkey.count = monkey.count + 1
            }
            monkey.items = []
        }
    }

    return monkeys.sort((a, b) => a.count - b.count).slice(-2).reduce((m, x) => m * x.count, 1)
}


console.time('Part1 Time:')
console.log("Part 1: ", sol1(getMmonkeys(realInput.split('\n\n'))));
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2(getMmonkeys(realInput.split('\n\n'))));
console.timeEnd('Part2 Time:')

console.timeEnd()