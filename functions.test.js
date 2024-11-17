import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './functions.js';

test('capitalize the words',()=>
{
    expect(capitalize("hello")).toBe("Hello");
});

test('reverse string',()=>
{
    expect(reverseString("copy")).toBe("ypoc");
});

test('good calculator',()=>
{   
    const result = calculator(12,3);
    expect(result.add).toBe(15);
    expect(result.subtract).toBe(9);
    expect(result.divide).toBe(4);
    expect(result.multiply).toBe(36);

});

test('shift letters by a cipher', () => 
{
    expect(caesarCipher("abc", 1)).toBe("bcd");
});

test('analyze an array', () => 
{
    const result = analyzeArray([1, 2, 3, 4, 5]);
    expect(result).toEqual({ average: 3, min: 1, max: 5, length: 5 });
});