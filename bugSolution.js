function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(10, null)); // Output: 0
console.log(foo(5, 10));   // Output: 15
console.log(foo(undefined,5)); //Output: 0
console.log(foo(5,undefined)); //Output: 0