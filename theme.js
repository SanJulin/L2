"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
var Theme = /** @class */ (function () {
    function Theme(theme) {
        this.colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
        this.animals = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile'];
        this.flags = ['sweden', 'japan', 'italy', 'norway', 'germany', 'china', 'usa', 'uk'];
        this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.setTheme(theme);
    }
    Theme.prototype.getTheme = function () {
        return this.theme;
    };
    Theme.prototype.setTheme = function (theme) {
        this.theme = theme;
        this.setArr();
    };
    Theme.prototype.getArr = function () {
        return this.arr;
    };
    Theme.prototype.setArr = function () {
        if (this.theme === 'colors') {
            this.arr = this.colors;
        }
        if (this.theme === 'animals') {
            this.arr = this.animals;
        }
        if (this.theme === 'flags') {
            this.arr = this.flags;
        }
        if (this.theme === 'letters') {
            this.arr = this.letters;
        }
        else {
            console.log('no theme set');
        }
    };
    return Theme;
}());
exports.Theme = Theme;
