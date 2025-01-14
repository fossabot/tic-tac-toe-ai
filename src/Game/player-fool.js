import ComputerFool from "./ComputerFool";

export default class PlayerFool {
    constructor(me) {
        this.me = me;
    }

    nextMove(squares, game, callback) {
        let bitmap = squares.map(s => {
            if (s === 'X') {
                return 1;
            }

            if (s === 'O') {
                return -1;
            }

            return 0;
        });

        game.handleClick(ComputerFool.nextMove(bitmap), callback);
    }

    getWeights() {
        return [];
    }

    getLearningEnabled() {
        return false;
    }


    setWeightsUpdatedCallback() {
    }

    clean() {
    }
}