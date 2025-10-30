import { describe, test, expect } from 'vitest';
import { countDice } from '../src/yams.js';

describe('Step 1: countDice', () => {
    test('counts dice correctly', () => {
        expect(countDice([1, 1, 1, 2, 3])).toEqual({ 1: 3, 2: 1, 3: 1 });
        expect(countDice([2, 2, 2, 2, 2])).toEqual({ 2: 5 });
        expect(countDice([1, 2, 3, 4, 5])).toEqual({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 });
    });
});