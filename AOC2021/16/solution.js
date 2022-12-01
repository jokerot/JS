import { realInput, sampleInput, sampleInput2, sampleInput3, sampleInput4 } from "./input.js";
const start = Date.now();

const hexa = n => parseInt(n, 2).toString(16).toUpperCase();
const tobin = n => parseInt(n, 16).toString(2).padStart(4, '0');
const binToInt = arr => parseInt(arr.join(''), 2)
const convertToBin = str => str.split('')
    .reduce((hex, x) => hex + tobin(x), '')

let counterVersions = 0

// let packet = convertToBin(sampleInput2).split('')

const readPacket = (packet, onlyOnce) => {
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
    } else {
        let lengthType = packet.splice(0, 1)[0]
        if (lengthType === '0') {
            let totalLength = binToInt(packet.splice(0, 15))
            readPacket(packet.splice(0, totalLength), 0)
        }
        if (lengthType === '1') {
            let numPackets = binToInt(packet.splice(0, 11))
            for (let i = 0; i < numPackets; i++) {
                packet = readPacket(packet, 1)
            }
        }
    }
    if (packet.filter( x=> x !='0').length > 0 && !onlyOnce) readPacket(packet, 0)
    return packet

}

// console.log(convertToBin(sampleInput));
// console.log(readPacket(convertToBin(sampleInput).split('')));
console.log(readPacket(convertToBin(sampleInput4).split(''), 0));

console.log("Time spent: ", Date.now() - start, " ms")