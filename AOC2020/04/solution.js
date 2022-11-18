import { realInput, sampleInput } from "./input.js"

const checklist = ['byr', 'ecl', 'pid', 'iyr', 'hcl', 'eyr', 'hgt'].sort()
const regex = /([a-z]{3}):([A-Za-z0-9#]+)/g
const passports = realInput.split('\n\n')
    .map(x => [...x.matchAll(regex)])
    .map(x => x.reduce((obj, y) => ({ ...obj, [y[1]]: y[2] }), {}))

const validate = passport => {
    if (+passport.byr < 1920 || +passport.byr > 2002) return false
    if (+passport.iyr < 2010 || +passport.iyr > 2020) return false
    if (+passport.eyr < 2020 || +passport.eyr > 2030) return false
    const x = [...passport.hgt.match(/(\d+)(in|cm)/g)];
    const height = x.length ? x[0][1] : 0;
    const measure = x.length ? x[0][2] : '';
    if (!['in','cm'].includes(measure)) return false
    if (measure == 'in' && ((+height < 59) || (+height > 76))) return false;
    if (measure == 'cm' && (+height < 150 || +height > 193)) return false
    if (!/^#[a-f0-9]{6}$/.test(passport.hcl)) return false
    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport.ecl)) return false
    if (!/^[0-9]{9}$/.test(passport.pid)) return false
    return true
}

const sol1 = () => passports
    .filter(x => JSON.stringify(checklist) === JSON.stringify(Object.keys(x).filter(y => y != 'cid').sort()))
    .length

const sol2 = () => passports
    .filter(x => JSON.stringify(checklist) === JSON.stringify(Object.keys(x).filter(y => y != 'cid').sort()))
    .filter(x => validate(x))
    .map(x=>x.hgt)
    // .length

const part1 = sol1()
const part2 = sol2()

console.log(part1)
console.log(part2)
