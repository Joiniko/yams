import { describe, test, expect } from 'vitest';
import { countDice, hasCount } from '../src/yams.js';

describe('Step 1: countDice', () => {
    test('counts dice correctly', () => {
        expect(countDice([1, 1, 1, 2, 3])).toEqual({ 1: 3, 2: 1, 3: 1 });
        expect(countDice([2, 2, 2, 2, 2])).toEqual({ 2: 5 });
        expect(countDice([1, 2, 3, 4, 5])).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
    });
});

describe('Step 2: hasCount - Brelan, Carré, YAMS', () => {
    test('hasCount(3) detects Brelan', () => {
        expect(hasCount(3)([1, 1, 1, 2, 3])).toBe(true);
        expect(hasCount(3)([1, 2, 3, 4, 5])).toBe(false);
    });

    test('hasCount(4) detects Carré', () => {
        expect(hasCount(4)([2, 2, 2, 2, 3])).toBe(true);
        expect(hasCount(4)([1, 1, 1, 1, 1])).toBe(false);
    });

    test('hasCount(5) detects YAMS', () => {
        expect(hasCount(5)([5, 5, 5, 5, 5])).toBe(true);
        expect(hasCount(5)([1, 1, 1, 1, 1])).toBe(false);
    });
});