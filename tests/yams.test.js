// tests/yams.test.js
import { describe, test, expect } from 'vitest';
import {
    countDice,
    hasCount,
    isFull,
    isStraight,
    getBestFigure,
    playYams
} from '../src/yams.js';

describe('Step 1: countDice', () => {
    test('counts dice correctly', () => {
        expect(countDice([1, 1, 1, 2, 3])).toEqual({ 1: 3, 2: 1, 3: 1 });
        expect(countDice([2, 2, 2, 2, 2])).toEqual({ 2: 5 });
    });
});

describe('Step 2: hasCount - Brelan, Carré, YAMS', () => {
    test('hasCount(3) detects Brelan', () => {
        expect(hasCount(3)([1, 1, 1, 2, 3])).toBe(true);
        expect(hasCount(3)([1, 2, 3, 4, 5])).toBe(false);
    });

    test('hasCount(4) detects Carré', () => {
        expect(hasCount(4)([2, 2, 2, 2, 3])).toBe(true);
    });

    test('hasCount(5) detects YAMS', () => {
        expect(hasCount(5)([5, 5, 5, 5, 5])).toBe(true);
    });
});

describe('Step 3: Full, Grande suite, Chance, playYams', () => {
    test('isFull detects Full', () => {
        expect(isFull([1, 1, 1, 2, 2])).toBe(true);
        expect(isFull([1, 1, 1, 1, 1])).toBe(false);
    });

    test('isStraight detects grande suite', () => {
        expect(isStraight([1, 2, 3, 4, 5])).toBe(true);
        expect(isStraight([2, 3, 4, 5, 6])).toBe(true);
        expect(isStraight([1, 2, 3, 4, 6])).toBe(false);
    });

    test('getBestFigure picks highest score', () => {
        expect(getBestFigure([1, 1, 1, 2, 2]).name).toBe('Full');
        expect(getBestFigure([5, 5, 5, 5, 5]).name).toBe('YAMS');
        expect(getBestFigure([1, 2, 3, 4, 5]).name).toBe('Grande suite');
        expect(getBestFigure([1, 2, 3, 4, 6]).name).toBe('Chance');
    });

    test('playYams sums best figures', () => {
        const rolls = [
            [1, 1, 1, 2, 2], // 30
            [5, 5, 5, 5, 5], // 50
            [1, 2, 3, 4, 5]  // 40
        ];
        expect(playYams(rolls)).toBe(120);
    });

    test('playYams handles invalid input', () => {
        expect(playYams([])).toBe(0);
        expect(playYams([[]])).toBe(0);
        expect(playYams([[1, 2]])).toBe(0);
    });
});