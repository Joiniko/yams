export const countDice = (dice) => {
    return dice.reduce((acc, die) => {
        acc[die] = (acc[die] || 0) + 1;
        return acc;
    }, {});
};