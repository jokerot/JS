import { realInput, sampleInput, sampleInput2, sampleInput3, sampleInput4, sampleInput5, sampleInput6 } from "./input.js";
const start = Date.now();

const hexa = n => parseInt(n, 2).toString(16).toUpperCase();
const tobin = n => parseInt(n, 16).toString(2).padStart(4, '0');
const binToInt = arr => parseInt(arr.join(''), 2)
const convertToBin = str => str.split('')
    .reduce((hex, x) => hex + tobin(x), '')

let counterVersions = 0

const operation = (operand, arr) => {
    let val = 0
    switch (operand) {
        case 0:
            val = arr.reduce((s, n) => s + n, 0)
            break;

        case 1:
            val = arr.reduce((s, n) => s * n, 1)
            break;

        case 2:
            val = Math.min(...arr)
            break;

        case 3:
            val = Math.max(...arr)
            break;
        case 5:
            val = arr[0] > arr[1] ? 1 : 0
            break;
        case 6:
            val = arr[0] < arr[1] ? 1 : 0
            break;
        case 7:
            val = arr[0] = arr[1] ? 1 : 0
            break;
        default:
            break;
    }
    return val
}

// let packet = convertToBin(sampleInput2).split('')

const readPacket = (packet, onlyOnce, currStackValues = []) => {
    let value = 0
    let version = binToInt(packet.splice(0, 3))
    counterVersions += version
    let id = binToInt(packet.splice(0, 3))

    if (id == 4) {
        let literalValue = []
        let flag = '1'
        while (flag === '1') {
            flag = packet.splice(0, 1)[0]
            literalValue = [...literalValue, ...packet.splice(0, 4)]
        }
        value = binToInt(literalValue)
    } else {
        let lengthType = packet.splice(0, 1)[0]
        let _;
        if (lengthType === '0') {
            let totalLength = binToInt(packet.splice(0, 15));
            [ _, value, currStackValues ] = readPacket(packet.splice(0, totalLength), 0, [value, ...currStackValues])
            value = operation(id, currStackValues)
        }
        if (lengthType === '1') {
            let values = []
            let numPackets = binToInt(packet.splice(0, 11))
            for (let i = 0; i < numPackets; i++) {
                [ packet, value, currStackValues ] = readPacket(packet, 1, [value, ...currStackValues]);
                values.push(value)
            }
            value = operation(id, values)
        }
    }
    if (packet.filter(x => x != '0').length > 0 && !onlyOnce) readPacket(packet, 0, [value, ...currStackValues])
    return [ packet, value, [value, ...currStackValues] ]

}

// console.log(convertToBin(sampleInput));
// console.log(readPacket(convertToBin(sampleInput).split('')));
console.log(readPacket(convertToBin(sampleInput6).split(''), 0));

console.log("Time spent: ", Date.now() - start, " ms")