// src/yams.js

/**
 * === JUST YAMS – TDD Step 3 (FINAL) ===
 * Full + Grande suite + Chance + playYams
 */

/**
 * Compte les occurrences de chaque dé
 */
export const countDice = (dice) => {
    return dice.reduce((acc, die) => {
        acc[die] = (acc[die] || 0) + 1;
        return acc;
    }, {});
};

/**
 * Vérifie s'il y a au moins n dés identiques
 */
export const hasCount = (n) => (dice) => {
    return Object.values(countDice(dice)).some(c => c >= n);
};

/**
 * Vérifie si c'est un Full (3 + 2)
 */
export const isFull = (dice) => {
    const counts = Object.values(countDice(dice)).sort((a, b) => a - b);
    return counts.length === 2 && counts[0] === 2 && counts[1] === 3;
};

/**
 * Vérifie si c'est une grande suite
 */
export const isStraight = (dice) => {
    const sorted = [...dice].sort((a, b) => a - b);
    const str = sorted.join('');
    return str === '12345' || str === '23456';
};

/**
 * Liste des figures (ordre décroissant de points)
 */
export const FIGURES = [
    { name: 'YAMS', points: 50, check: hasCount(5) },
    { name: 'Grande suite', points: 40, check: isStraight },
    { name: 'Carré', points: 35, check: hasCount(4) },
    { name: 'Full', points: 30, check: isFull },
    { name: 'Brelan', points: 28, check: hasCount(3) },
    { name: 'Chance', points: 0, check: () => true }
];

/**
 * Retourne la meilleure figure possible
 */
export const getBestFigure = (dice) => {
    const sum = dice.reduce((a, b) => a + b, 0);
    let best = { name: 'Chance', points: sum };

    for (const fig of FIGURES) {
        if (fig.name === 'Chance') continue;
        if (fig.check(dice) && fig.points > best.points) {
            best = { name: fig.name, points: fig.points };
        }
    }

    return best;
};

/**
 * Programme principal
 */
export const playYams = (rolls) => {
    if (!Array.isArray(rolls) || rolls.length === 0) return 0;

    let total = 0;
    for (const roll of rolls) {
        if (!Array.isArray(roll) || roll.length !== 5) continue;
        total += getBestFigure(roll).points;
    }
    return total;
};