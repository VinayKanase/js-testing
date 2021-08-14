// const arrayAnalyze = require('./arrayAnalyze');

import arrayAnalyze from './arrayAnalyze';

test('Test 1: Array Analyze with array of 5 natural numbers',()=>
    expect(arrayAnalyze([1,2,3,4,5])).toStrictEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    })
);

test('Test 2: Array Analyze with empty array',()=>
    expect(arrayAnalyze([])).toStrictEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    })
);

test('Test 3: Array Analyze with no array specified',()=>
    expect(arrayAnalyze()).toStrictEqual({
        average: null,
        min: null,
        max: null,
        length: undefined
    })
);


test('Test 4: Array Analyze with complex floating point numbers array',()=>
    expect(arrayAnalyze([4.65, 2.6, 7.68, 0.87, 9.23, 6.45, 4.07, 5.67, 9.83, 4.36, 6.76, 0.98, 8.9, 9.08, 8.72, 1.55, 1.74, 2.7, 5.36, 2.96, 2.72, 3.36, 1.55, 0.18, 2.8, 7.02, 0.97, 3.29, 5.06, 9.77, 3.78])).toStrictEqual({
        average: 4.666451612903225,
        min: 0.18,
        max: 9.83,
        length: 31
    })
);