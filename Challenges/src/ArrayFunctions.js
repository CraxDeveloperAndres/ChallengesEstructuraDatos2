
console.log("=== forEach ===");
[1, 2, 3].forEach(num => console.log(num));

console.log("=== map ===");
const doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); 

console.log("=== flatMap ===");
const flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(flatMapped);

console.log("=== filter ===");
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(evens); 

console.log("=== find ===");
const found = [5, 12, 8, 130].find(num => num > 10);
console.log(found); 

console.log("=== findIndex ===");
const findIdx = [5, 12, 8, 130].findIndex(num => num > 100);
console.log(findIdx); 

console.log("=== some ===");
const hasNegative = [1, -1, 2].some(num => num < 0);
console.log(hasNegative); 

console.log("=== every ===");
const allPositive = [1, 2, 3].every(num => num > 0);
console.log(allPositive); 

console.log("=== includes ===");
console.log([1, 2, 3].includes(2)); 

console.log("=== push ===");
const pushArr = [1, 2];
pushArr.push(3);
console.log(pushArr); 

console.log("=== pop ===");
const popArr = [1, 2, 3];
popArr.pop();
console.log(popArr); 

console.log("=== unshift ===");
const unshiftArr = [2, 3];
unshiftArr.unshift(1);
console.log(unshiftArr); 

console.log("=== shift ===");
const shiftArr = [1, 2, 3];
shiftArr.shift();
console.log(shiftArr); 


console.log("=== concat ===");
const merged = [1, 2].concat([3, 4]);
console.log(merged); 

console.log("=== slice ===");
console.log([1, 2, 3, 4].slice(1, 3)); 

console.log("=== splice ===");
const spliceArr = [1, 2, 3];
spliceArr.splice(1, 1, 99);
console.log(spliceArr);


console.log("=== sort ===");
const sorted = [3, 1, 2].sort();
console.log(sorted); 

console.log("=== reverse ===");
const reversed = [1, 2, 3].reverse();
console.log(reversed); 

console.log("=== reduce ===");
const reduced = [1, 2, 3].reduce((acc, val) => acc + val, 0);
console.log(reduced); 

console.log("=== reduceRight ===");
const reducedRight = [1, 2, 3].reduceRight((acc, val) => acc - val);
console.log(reducedRight); 

console.log("=== flat ===");
console.log([1, [2, [3]]].flat(2)); 

console.log("=== fill ===");
console.log([1, 2, 3].fill(0)); 

console.log("=== indexOf ===");
console.log([1, 2, 3].indexOf(2)); 

console.log("=== lastIndexOf ===");
console.log([1, 2, 1].lastIndexOf(1)); 

console.log("=== join ===");
console.log([1, 2, 3].join('-')); 

console.log("=== toString ===");
console.log([1, 2, 3].toString()); 

console.log("=== at ===");
console.log([10, 20, 30].at(-1)); 
