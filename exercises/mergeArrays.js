const arr1 = [
    {id: 1, name: "Test", permissions: {view: true, create: false, update: true}},
    {id: 2, name: "Mest", permissions: {view: true, create: false, update: true}},
    {id: 3, name: "Fest", permissions: {view: true, create: false, update: true}},
]

const arr2 = [
    {id: 1, name: "Test", permissions: {view: false, create: true, update: true}},
    {id: 2, name: "Mest", permissions: {view: false, create: false, update: true}},
    {id: 4, name: "Gest", permissions: {view: true, create: false, update: true}},
]

const p = ["view", "create", "update"]

const mergePermissions = (p1, p2) => {
    const obj = {};
    p.forEach(pm => {
        obj[pm] = p1[pm] || p2[pm]
    });
    return obj
}

const map = new Map();
arr1.forEach(item => map.set(item.id, item));
arr2.forEach(item => map.has(item.id)
 ? map.set(item.id, {...map.get(item.id), "permissions": mergePermissions(map.get(item.id).permissions, item.permissions)}) 
 : map.set(item.id, item));

const mergedArr = Array.from(map.values());

console.log(mergedArr);
console.log(JSON.stringify(mergedArr));