function modulo(divident, divisor){
    return Array.from(divident).map(c => parseInt(c)).reduce((remainder, value) => (remainder * 10 + value) % divisor,0);
 };

 const mod = (num, a) => {
     
    // Initialize result
    let res = 0;
 
    // One by one process
    // all digits of 'num'
    for(let i = 0; i < num.length; i++)
        res = (res * 10 +
            parseInt(num[i])) % a;
 
    return res;
}

let x = "3715290469715693021198967285016729344580685479654510946723";
let y = "68819615221552997273737174557165657483427362207517952651";
let x1 = x.split('').pop()

console.log(modulo(y,4), mod(y,x1))
let x2 = 4

for (let i = 0; i<20; i++) {
    console.log(x2, " ^ ", i, " = ", Math.pow(x2, i))
}
const mods = {0: 1, 1: 1, 2: 4, 3: 4, 4: 2, 5:1, 6:1, 7: 4, 8: 4, 9: 2}