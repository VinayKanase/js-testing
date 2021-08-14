import Capitalize from "./Capitalize";

// const Capitalize = require('../code/Capitalize');

test('Test 1: First LowerCase charactor with irregular Cases in between', () => 
    expect(Capitalize('viNaY')).toBe('Vinay')
);

test('Test 2: All characters with capital string', () => 
    expect(Capitalize('SANKET')).toBe('Sanket')
);


test('Test 3: All characters with capital string and whitespace', () => 
    expect(Capitalize('hello World')).toBe('Hello world')
);
