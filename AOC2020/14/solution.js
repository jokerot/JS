import { realInput, sampleInput } from "./input.js"

const input1 = realInput.split('mask = ').slice(1)
const input2 = sampleInput.split('mask = ').slice(1)

const toBin = n => n.toString(2).padStart(36, '0');
//From net adBinary

function halfAdder(a, b){
    const sum = xor(a,b);
    const carry = and(a,b);
    return [sum, carry];
  }
  
  function fullAdder(a, b, carry){
    const halfAdd = halfAdder(a,b);
    const sum = xor(carry, halfAdd[0]);
    carry = and(carry, halfAdd[0]);
    carry = or(carry, halfAdd[1]);
    return [sum, carry];
  }
  
  function xor(a, b){return (a === b ? 0 : 1);}
  function and(a, b){return a == 1 && b == 1 ? 1 : 0;}
  function or(a, b){return (a || b);}


function addBinary(a, b){

    let sum = '';
    let carry = '';
  
    for(var i = a.length-1;i>=0; i--){
      if(i == a.length-1){
        //half add the first pair
        const halfAdd1 = halfAdder(a[i],b[i]);
        sum = halfAdd1[0]+sum;
        carry = halfAdd1[1];
      }else{
        //full add the rest
        const fullAdd = fullAdder(a[i],b[i],carry);
        sum = fullAdd[0]+sum;
        carry = fullAdd[1];
      }
    }
  
    return carry ? carry + sum : sum;
  }
// end of net code
const maskIt = (m, code) => {
    let newCode = code.split('');
    for (let i=0; i<32; i++){
        if (m[i] != 'X') newCode[i] = m[i]
    }
    const xx = newCode.join('')
    return newCode.join('')
}

const sol1 = input => {
    const regex = /mem\[(\d*)\] = (\d*)/g
    let arr = []
    let obj = {}
    for (let piece of input) {
        let p = piece.split('\n')
        let mask = p[0];
        let codes = p.slice(1).flatMap(x => [...x.matchAll(regex)])
        .map(y=> [y[1], maskIt(mask, toBin(+y[2])) ])

        arr = [...arr, ...codes]
    }
    // obj = arr.reduce((o, x) => ({...o, [x[0]]: parseInt(x[1], 2)}), {})
    obj = arr.reduce((o, x) => ({...o, [x[0]]: x[1]}), {})
    const sum = Object.values(obj).reduce((s,n)=> addBinary(s,n), toBin(0))
    const isThis = parseInt(sum, 2)
    return sum

}

const part1 = sol1(input1)

// const part2 = sol2(input1)

console.log(part1)
