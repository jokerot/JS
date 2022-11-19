import { fInput, realInput, sampleInput } from "./input.js";

const instructions = realInput.split('\n')
    .map(x => ({
        operation: x.slice(0, 3),
        value: +x.slice(3),
        visited: false
    }))

const sol1 = () => {
    let i = 0;
    let accumulator = 0;
    while (true) {
        if (instructions[i].visited) return accumulator;
        instructions[i].visited = true;
        switch (instructions[i].operation) {
            case 'acc': { accumulator += instructions[i].value; i++; }
                break;
            case 'jmp': { i += instructions[i].value }
            break;
            default: i++
        }
    }
}

const checkShort = (ins) => {
    let i = 0;
    let accumulator = 0;
    while (true) {
        if (ins[i].visited) return false;
        ins[i].visited = true;
        switch (ins[i].operation) {
            case 'acc': { accumulator += ins[i].value; i++; }
                break;
            case 'jmp': { i += ins[i].value }
            break;
            default: i++
        }
        if (i == ins.length) return accumulator 
    }
}

const sol2 = (x) => {
    
    for (let i = 0; i<x.length;i++) {
        let temp = x.map(x => ({...x}));
        let t = temp[i]
        if (t.operation == 'nop' && t.value) {temp[i].operation = 'jmp'}
        else if (t.operation == 'jmp') temp[i].operation = 'nop'  
        let check = checkShort(temp)
        if (check) return check

    }

}


// const part1 = sol1()
const part2 = sol2(instructions)


console.log(part2)