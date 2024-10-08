"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const computer_row_1 = __importDefault(require("./computer-row"));
/**
 * Class that represents the computer in the game.
 */
class Computer {
    constructor(numberOfItems, themeArray) {
        this.computerRow = [];
        this.numberOfGuesses = 0;
        this.setNumberOfItems(numberOfItems, themeArray);
    }
    /**
     * Gets the number of items that is used in the game.
     *
     * @returns { number } - number of items used in the game.
     */
    getNumberOfItems() {
        return this.numberOfItems;
    }
    /**
    * Sets the number of items that should be included in the computer row.
    *
    * @param numberOfItems { number } - number of items that should be used in the game.
    */
    setNumberOfItems(numberOfItems, themeArray) {
        if (numberOfItems === null) {
            throw new Error('Pls provide a valid number');
        }
        else {
            this.numberOfItems = numberOfItems;
            this.computerRow = this.createComputerRow(themeArray);
        }
    }
    /**
     * Creates a new instance of the ComputerRow class and calls the generateRow method in the ComputerRow class in order to generate a new row that will represent the computer´s row of items.
     *
     * @param themeArray { string [] } - the array with items from the chosen theme.
     * @returns
     */
    createComputerRow(themeArray) {
        const computerRow = new computer_row_1.default(this.numberOfItems, themeArray);
        return computerRow.generateRow();
    }
    /**
     * Returns an array with the items that represent the current computer row.
     *
     * @returns { string [] } - an array with items
     */
    getComputerRow() {
        if (this.computerRow === undefined) {
            throw new Error('The computer row has not been created yet');
        }
        return this.computerRow;
    }
    /**
     * Gets the number of guesses used in a playround.
     *
     * @returns { number } - number of guesses.
     */
    getNumberOfGuesses() {
        return this.numberOfGuesses;
    }
    /**
     * Method that checks if the row of items provided by the user matches the computer´s row by checking if the item and the position of the item is the same. An object is created for each item. If the item is in the correct place - the item will get the color green. If the item is present in the row, but in the wrong place - the item will get the color yellow and the color red will be used for items that are not present in the computer´s row.
     *
     * @param answer { string [] } - array with items from the user
     * @returns { string } - A text if the user´s guess was correct.
     * @returns { object [] } - An array with objects if the user´s guess wasn´t correct.
     */
    checkAnswer(answer) {
        if (answer.length !== this.computerRow.length) {
            throw new Error(`The guess must contain ${this.numberOfItems}`);
        }
        const answerFromPlayer = answer;
        let answerWithFeedback = [];
        let numberOfCorrectItems = 0;
        for (let i = 0; i < answerFromPlayer.length; i++) {
            let itemObject = { item: String, color: String };
            if (answerFromPlayer[i] === this.computerRow[i]) {
                numberOfCorrectItems++;
                itemObject = { item: answerFromPlayer[i], color: 'green' };
            }
            else if (this.computerRow.includes(answerFromPlayer[i])) {
                itemObject = { item: answerFromPlayer[i], color: 'yellow' };
            }
            else {
                itemObject = { item: answerFromPlayer[i], color: 'red' };
            }
            answerWithFeedback.push(itemObject);
        }
        this.numberOfGuesses++;
        if (numberOfCorrectItems >= this.numberOfItems) {
            return JSON.stringify('Congratulations! You made it!');
        }
        else {
            return JSON.stringify(answerWithFeedback);
        }
    }
}
exports.default = Computer;
//# sourceMappingURL=computer.js.map