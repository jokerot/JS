import { realInput, sampleAlgo, sampleInput } from "./input.js"

const algo = sampleAlgo

const startImage = sampleInput.split('\n').map(x => x.split('').map(y => y == '#' ? 1 : 0))

const expandImage = image => {
    image = image.map(x => [0, ...x, 0])
    image.unshift(new Array(image[0].length).fill(0))
    image.push(new Array(image[0].length).fill(0))
    return image
}

const expandedImage = expandImage(expandImage(startImage))

const checkLight = (x, y, img) => {
    const code = parseInt([img[x - 1][y - 1], img[x-1][y], img[x - 1][y +1], img[x][y-1], img[x][y], img[x][y+1], img[x +1][y - 1], img[x+1][y], img[x + 1][y + 1]].join(''), 2)
    console.log(code)
    return (algo[code] == "#") ? 1 : 0
}

const enhance = (img) => {
    checkLight(5,5,img)
    const newImg = Array.from(Array(img.length), () => {
        return new Array(img[0].length).fill(0)
    })
    for (let i = 1; i < img.length - 1; i++) {
        for (let j = 1; j < img[0].length - 1; j++) {
            newImg[i][j] = checkLight(i, j, img)
        }
    }
    return newImg
}

const e = enhance(expandedImage)

const sol1 = () => 1
const sol2 = () => 1

console.time()
console.log(sol1())
console.timeEnd()
// console.log(velocities.filter(x=>x[2].length > 100))
console.log("done");