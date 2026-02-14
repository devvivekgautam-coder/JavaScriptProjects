let arr = [1, 2, 3, 4, 5];
let k = 2;

let part1 = arr.slice(k);

let part2 = arr.slice(0, k);

let rotated = part1.concat(part2);

console.log(rotated);