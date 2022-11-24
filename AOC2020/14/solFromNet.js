import { realInput, sampleInput, sampleInput2 } from "./input.js";

const lines = sampleInput.split('\n');
const lines2 = sampleInput2.split('\n');
const lines3 = realInput.split('\n');



class Program {
    constructor(input) {
        this.code = input;
        this.memory = new Map();
    }

    run() {
        this.code.forEach((line) => {
            if (/^mask/.test(line)) {
                const { groups } = /^mask = (?<mask>.*)$/.exec(line);
                this.mask = [...groups.mask];
            } else {
                const { groups } = /^mem\[(?<address>\d+)\] = (?<value>\d+)$/.exec(line);
                let address = parseInt(groups.address);
                let decimal = parseInt(groups.value);
                let string = [...decimal.toString(2).padStart(36, '0')].map((value, index) => {
                    if (this.mask[index] === 'X') return value;
                    return this.mask[index];
                }).join('')
                let value = parseInt(string, 2);
                this.memory.set(address, value);
            }

        })
    }

    getSum() {
        let result = 0;
        this.memory.forEach((v) => {
            result += v;
        })
        // console.log(this.memory);
        return result;
    }
}

const p = new Program(lines);

p.run();

console.log(p.getSum());


const combs = n => {
    let c = []
    for (let i = 0; i < 2 ** n; i++) {
        c.push(i.toString(2).padStart(n, "0"))
    }
    return c;
}

class Program2 {
    constructor(input) {
        this.code = input;
        this.memory = new Map();
    }

    run() {
        this.code.forEach((line) => {
            if (/^mask/.test(line)) {
                const { groups } = /^mask = (?<mask>.*)$/.exec(line);
                this.mask = [...groups.mask];
                this.combinations = combs(this.mask.filter(x => x == 'X').length)
            } else {
                const { groups } = /^mem\[(?<address>\d+)\] = (?<value>\d+)$/.exec(line);
                let address = parseInt(groups.address);
                let decimal = parseInt(groups.value);
                let binaryAddress = [...address.toString(2).padStart(36, '0')]

                this.combinations.forEach((x) => {
                    let counter = 0
                    let newAddress = []
                    for (let i = 0; i < this.mask.length; i++) {
                        if (this.mask[i] == "1") newAddress.push("1")
                        if (this.mask[i] == "0") newAddress.push(binaryAddress[i])
                        if (this.mask[i] == "X") {
                            newAddress.push(x[counter])
                            counter++
                        }
                    }
                    this.memory.set(parseInt(newAddress.join(''), 2), decimal);
                })

                
            }

        })
    }

    getSum() {
        let result = 0;
        this.memory.forEach((v) => {
            result += v;
        })
        // console.log(this.memory);
        return result;
    }
}

const p2 = new Program2(lines3);

p2.run();

console.log(p2.getSum());