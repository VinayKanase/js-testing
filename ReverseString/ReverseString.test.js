// const ReverseString = require('../code/ReverseString');
import ReverseString from './ReverseString';

test('Test 1: Reverse the string word',()=>
    expect(ReverseString('string')).toBe('gnirts')
);

test('Test 2: Reverse the string and spaces',()=>
    expect(ReverseString('reverse this string')).toBe('gnirts siht esrever')
);

test('Test 3: Reverse the string and symbols',()=>
    expect(ReverseString('Testing is Great!!!')).toBe('!!!taerG si gnitseT')
);