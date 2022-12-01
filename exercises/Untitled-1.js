// const queueTime = (customers, n) => {
//   let tills = new Array(n).fill(0);
//   let sum = 0;
//   let nextTillTime = 0;
//   for (let i = 0; i < customers.length; i++) {
//     if (tills.includes(0)) tills[tills.indexOf(0)] = customers[i]
//     else {
//       nextTillTime = Math.min(...tills);
//       sum += nextTillTime;
//       tills = tills.map(x => x-nextTillTime);
//       tills[tills.indexOf(0)] = customers[i];
//     }
//   }
//   return sum + Math.max(...tills)
// }

const queueTime = (customers, n) => {
    let t = new Array(n).fill(0)
    let idx
    for (let c in customers) {
      console.log(customers[c], t)
      idx = t.indexOf(Math.min(...t));
      t[idx] += customers[c];
      console.log(idx)
    }
    return Math.max(...t)
  }

console.log(queueTime([1,2,3,4], 1))