// 0-empty field;
// 1-wall;
// 2-path;
// 3-finish;

// 5-green key;
// 55-green door;


export const KEYS = [4, 5, 6, 7];
export const DOORS = KEYS.map(e => e*11);
export const OPEN_DOORS = KEYS.map(e => e*11+1);
export const LEVELS = {

    level1: {
        levelGrid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 1, 0],
            [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1],
            [2, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2],
            [2, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 1],
            [1, 1, 2, 1, 1, 2, 2, 1, 1, 0, 0, 1, 2, 2, 1],
            [0, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1],
            [0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 2, 2, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
            [0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1],
            [0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1],
            [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
            [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        levelStart: [14, 3],
        timeLeft: undefined

    },

    level2: {
        levelGrid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 1, 0],
            [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 0, 0, 1, 1],
            [2, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2],
            [2, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 1],
            [1, 1, 2, 1, 1, 2, 2, 1, 1, 0, 0, 1, 2, 2, 1],
            [0, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1],
            [0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 2, 2, 2, 2, 1],
            [0, 0, 1, 1, 3, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
            [0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 1, 2, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1],
            [0, 0, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1],
            [0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
            [0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        levelStart: [14, 3],
        timeLeft: 30
    },

    level3: {
        levelGrid: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 1, 1, 0],
            [2, 1, 1, 1, 1, 1, 1, 2, 2, 66, 1, 0, 0, 1, 1],
            [5, 1, 1, 0, 0, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2],
            [77, 2, 2, 1, 0, 1, 2, 1, 1, 0, 0, 1, 2, 1, 1],
            [1, 2, 2, 1, 1, 2, 2, 1, 1, 0, 0, 1, 2, 2, 1],
            [0, 1, 2, 1, 2, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1],
            [0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 55, 2, 2, 6, 1],
            [0, 0, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1],
            [0, 0, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 7, 2, 1],
            [0, 0, 1, 44, 2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1],
            [1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1],
            [0, 0, 4, 2, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1],
            [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
            [0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
        levelStart: [14, 3],
        timeLeft: 60

    }


};