// const  caesar = require('../code/caesar');

import caesar from "./caesar";

test('Test 1: Caesar use with one shift key and LowerCase String',() =>
    expect(caesar('b',25)).toBe('a')
);

test('Test 2: Caesar use with one shift key and UpperCase String',() =>
    expect(caesar('M',25)).toBe('L')
);

test('Test 3: Caesar use with one shift key with all alphabets in reverse',() =>
    expect(caesar('zyxwvutsrqponmlkjihgfedcba',1)).toBe('azyxwvutsrqponmlkjihgfedcb')
);

test('Test 4: Caesar use with 2 shift key and spaces with mixed case',()=>
    expect(caesar('I Love JS',3)).toBe('L Oryh MV')
);

test('Test 5: Caesar use with 5 sift key and symbols',()=>
    expect(caesar('Good Morning Boies, Code Hard!!!',5)).toBe('Ltti Rtwsnsl Gtnjx, Htij Mfwi!!!')
);

test('Test 5: Caesar use with 25 sift key',()=>
    expect(caesar('Hello World',25)).toBe('Gdkkn Vnqkc')
);

test('Test 5: Caesar use with 25 sift key',()=>
    expect(caesar('Si nKSO',25)).toBe('Rh mJRN')
);

test('Test 6: Caesar use with 0 sift key',()=>
    expect(caesar('JavaScript is amazing',0)).toBe('JavaScript is amazing')
);