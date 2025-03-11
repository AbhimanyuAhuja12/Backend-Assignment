import union  from './union.js';


console.log(union([1, 2, 3], [3, 4, 5]));
console.log(union([{ a: 1 }, { b: 2 }], [{ b: 2 }, { c: 3 }])); 
console.log(union([1, [2, 3]], [[2, 3], 4])); 
console.log(union([{ a: { b: 1 } }], [{ a: { b: 1 } }, { c: 3 }])); 
console.log(union([null, undefined, NaN], [NaN, undefined, null])); 
console.log(union([], [])); 