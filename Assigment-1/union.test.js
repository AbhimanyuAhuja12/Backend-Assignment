import union from './union.js';

describe('Union Function Tests', () => {
    test('Union of [1, 2, 3] and [3, 4, 5]', () => {
        expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Union of objects', () => {
        expect(union([{ a: 1 }, { b: 2 }], [{ b: 2 }, { c: 3 }]))
            .toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
    });

    test('Union with nested arrays', () => {
        expect(union([1, [2, 3]], [[2, 3], 4]))
            .toEqual([1, [2, 3], 4]);
    });

    test('Union with deeply nested objects', () => {
        expect(union([{ a: { b: 1 } }], [{ a: { b: 1 } }, { c: 3 }]))
            .toEqual([{ a: { b: 1 } }, { c: 3 }]);
    });

    test('Union with null, undefined, and NaN', () => {
        expect(union([null, undefined, NaN], [NaN, undefined, null]))
            .toEqual([null, undefined, NaN]);
    });

    test('Union of empty arrays', () => {
        expect(union([], [])).toEqual([]);
    });
});




describe('Union Function Tests', () => {
    test('should merge unique values', () => {
        expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
    });

    test('should merge objects correctly', () => {
        expect(union([{ a: 1 }], [{ b: 2 }])).toEqual([{ a: 1 }, { b: 2 }]);
    });
});


