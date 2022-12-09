import { realInput, sampleInput } from "./input.js";

const Directory = (name) => ({
    name: name,
    dirs: [],
    files: []
})

const Piece = (path, type, name, size, depth) => ({
    path: path,
    type: type,
    name: name,
    size: size,
    depth: depth
})



const list = (input) => {
    const arr = [Piece('', "dir", "root", 0, 0)]
    let path = "root"
    let currentFolder = ""
    let depth = 0
    input.forEach(line => {
        if (line.match(/\$ cd ([a-z])/)) {
            currentFolder = line.split(' ').slice(-1)[0]
            depth++
            arr.push(Piece(path, "dir", currentFolder, 0, depth))
            path = path + '/' + currentFolder
        } else if (line.match(/\$ cd ../)) {
            let tempPath = path.split('/')
            tempPath.pop()
            currentFolder = tempPath.slice(-1)[0]
            path = tempPath.join('/')
            depth--
        } else if (line.match(/\d+ [a-z]/)) {
            const tempFile = line.split(' ');
            arr.push(Piece(path, "file", tempFile[1], +tempFile[0], depth))
        }

    });
    return arr
}


const listAll = list(realInput.split('\n')).sort((a, b) => b.depth - a.depth)
const files = listAll.filter(x => x.type == "file")
const rootSize = files.reduce((sum, y) => sum + y.size, 0)


const sum = () => {
    for (let i = 0; i < listAll.length; i++) {
        if (listAll[i].type == "dir") {
            const sumPath = listAll[i].path + "/" + listAll[i].name
            listAll[i].size = listAll.filter(x => x.path == sumPath).reduce((sum, y) => sum + y.size, 0)
        }
    }
};

sum();
const spaceToFree = rootSize - 40000000;
const dirs = listAll.filter(x => x.type == "dir" && x.size > spaceToFree).sort((a, b) => a.size - b.size)

const sol1 = listAll.filter(x => x.size < 100000 && x.type == "dir" && x.name != "root")
    .reduce((sum, y) => sum + y.size, 0)
    
const sol2 = dirs[0].size



console.time('Part1 Time:')
console.log("Part 1: ", sol1);
console.timeEnd('Part1 Time:')

console.time('Part2 Time:')
console.log("Part 2: ", sol2);
console.timeEnd('Part2 Time:')