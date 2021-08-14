// const calculator = require('../code/calculator');

import calculator from "./calculator";

test('Test 1: Use of Add method from calculator object',() =>
expect(calculator.add(2,2)).toBe(4)
);

test('Test 2: Use of Subtract method from calculator object',() =>
expect(calculator.subtract(2,2)).toBe(0)
);

test('Test 3: Use of Multiply method from calculator object',() =>
expect(calculator.multiply(2,3)).toBe(6)
);

test('Test 4: Use of Divide method from calculator object',() =>
expect(calculator.divide(4,2)).toBe(2)
);
