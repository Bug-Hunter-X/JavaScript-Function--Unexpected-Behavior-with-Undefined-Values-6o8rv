# JavaScript Function: Unexpected Behavior with Undefined Values

This repository demonstrates a common error in JavaScript functions where undefined values are not explicitly handled, leading to unexpected behavior. The function `foo` handles `null` values correctly, but fails to address the case when one or both of the input parameters are `undefined`.

## Bug Description:
The function `foo` adds two numbers. It correctly handles cases where one or both of the inputs are `null`. However, if either `a` or `b` is `undefined`, the addition will result in `NaN` (Not a Number), which is not always desirable.

## Solution:
The solution file (`bugSolution.js`) demonstrates how to explicitly check for `undefined` values and handle them appropriately, ensuring robust and predictable behavior. 