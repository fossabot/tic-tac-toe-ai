const boardSides = {
    top: [0, 1, 2],
    left: [0, 3, 6],
    right: [2, 5, 8],
    bottom: [6, 7, 8],
    center: [3, 4, 5],
    middle: [1, 4, 7],
    slash: [2, 4, 6],
    antiSlash: [0, 4, 8]
};

const sides = [
    boardSides.top,
    boardSides.center,
    boardSides.bottom,
    boardSides.left,
    boardSides.middle,
    boardSides.right,
    boardSides.slash,
    boardSides.antiSlash
];

function checkSides(bitmap) {
    let d = 0;
    let dead = 0;
    let w = 0;
    let c = 0;

    for (let i = 0; i < sides.length; i++) {
        let side = bitmap.filter((_, j) => sides[i].indexOf(j) >= 0);

        let negatives = side.filter(b => b === -1);
        let zeros = side.filter(b => b === 0);
        let ones = side.filter(b => b === 1);

        if (negatives.length === 2 && zeros.length === 1) {
            d++;
        }

        if (negatives.length === 3) {
            dead++;
        }

        if (ones.length === 3) {
            w++;
        }

        if (ones.length === 2 && zeros.length === 1) {
            c++;
        }
    }

    return {danger: d, lost: dead, chance: c, win: w};
}

export default class Strategy {
    static getInitialWeights() {
        return [0, 1, 1]
    }

    static getNamedStrategy(factors) {
        return {
            const: factors[0],
            danger: factors[1],
            occupyCenter: factors[2]
        };
    }

    static getBoardStatus(bitmap) {
        let {danger, lost, chance, win} = checkSides(bitmap);
        return {
            danger, lost, chance, win,
            factors:
                [
                    1,
                    danger,
                    bitmap[4] === 1 ? 1 : -1
                ]
        }
            ;
    }
}
