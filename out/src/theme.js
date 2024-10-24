"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("./item"));
/**
 * Class that represents the theme of the game.
 */
class Theme {
    constructor(theme) {
        this.theme = '';
        this.themeArray = [];
        this.itemArray = [];
        this.availableThemes = ['flags', 'animals', 'colors', 'professions', 'movies'];
        if (theme) {
            this.setTheme(theme);
        }
        else {
            this.theme = '';
        }
    }
    /**
    * Gets the current theme of the game which will be used when the items are created.
    *
    * @returns { string } - the theme of the items used in the game.
    */
    getTheme() {
        if (this.theme) {
            throw new Error('No theme has been set for the game');
        }
        return this.theme;
    }
    /**
     * Sets the theme for the game if the theme string is not empty and calls the setItemArray method.
     *
     * @param theme { string } - the theme of the items used in the game.
     */
    setTheme(theme) {
        this.theme = theme;
        if (this.theme) {
            this.setThemeArray();
        }
    }
    /**
     * Gets all the themes available in the current version of the module.
     *
     * @returns { string [] } available themes - the themes available in the current version of the module.
     */
    getAvailableThemes() {
        return this.availableThemes;
    }
    /**
     * Gets the current array with items.
     *
     * @returns { Item [] } - an array with items.
     */
    getItemArray() {
        try {
            return this.itemArray;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
    /**
 * Gets the current array with items.
 *
 * @returns { string [] } - an array with items.
 */
    getThemeArray() {
        try {
            return this.themeArray;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
    /**
     * Sets the theme and itemArray for other themes than the available themes included in the module. The user of the module must provide a theme name and an array that includes 8 items in order to create a themes of their choice.
     *
     * @param theme { string } - the name of the theme
     * @param themeArray { object [] } - the array with 8 items that should be included in the itemArray.
     */
    setOtherTheme(theme, themeArray) {
        if (themeArray.length !== 8) {
            throw Error('The themeArray must contain 8 items.');
        }
        if (theme === '') {
            throw Error('Pls provide a theme "name" for the game');
        }
        else {
            this.theme = theme;
            this.themeArray = themeArray;
            this.createItemArray();
        }
    }
    /**
     * Checks if this.theme is undefined and throws an error if it is. Sets the array with items that should be used in the game by checking what the current theme is.
     */
    setThemeArray() {
        if (this.theme) {
            if (this.theme === 'flags') {
                this.themeArray = ['Sweden', 'Japan', 'Italy', 'New Zealand', 'Kenya', 'China', 'Brazil', 'United Kingdom'];
            }
            if (this.theme === 'animals') {
                this.themeArray = ['Bear', 'Crocodile', 'Elefant', 'Giraff', 'Gorilla', 'Tiger', 'Whale', 'Zebra'];
            }
            if (this.theme === 'colors') {
                this.themeArray = ['Black', 'Blue', 'Green', 'Pink', 'Purple', 'Red', 'Turquoise', 'Yellow'];
            }
            if (this.theme === 'professions') {
                this.themeArray = ['Actor', 'Chef', 'Developer', 'Doctor', 'Fireman', 'Pilot', 'Police', 'Teacher'];
            }
            if (this.theme === 'movies') {
                this.themeArray = ['Alive', 'Casablanca', 'Leon', 'Lord of the rings', 'Matrix', 'Pulp fiction', 'The shawshank redemption', 'Titanic'];
            }
        }
        else {
            throw new Error('There is no theme set for the game');
        }
        this.createItemArray();
    }
    /**
     * Creates an array with items based on the provided theme array. Uncomment the url row and insert url when creating an item if the image should be included in the item. (const item = new Item(i + 1, this.themeArray[i], url))
     */
    createItemArray() {
        if (this.themeArray) {
            for (let i = 0; i < this.themeArray.length; i++) {
                //const url = `/img/${this.theme}/${(this.themeArray[i])}.jpg`
                const item = new item_1.default(i + 1, this.themeArray[i]);
                this.itemArray.push(item);
            }
        }
        else {
            throw Error('There is no themeArray set for the game');
        }
    }
}
exports.default = Theme;
//# sourceMappingURL=theme.js.map