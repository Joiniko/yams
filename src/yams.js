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