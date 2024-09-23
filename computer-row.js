"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
var ComputerRow = /** @class */ (function () {
    function ComputerRow() {
    }
    ComputerRow.prototype.generateRow = function () {
        var rowLength = 5;
        var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
        var newRow = [];
        for (var i = 0; i < rowLength; i++) {
            var nextColorIndex = Math.floor(Math.random() * colors.length);
            var nextColor = colors[nextColorIndex];
            newRow.push(nextColor);
        }
        return newRow;
    };
    return ComputerRow;
}());
exports.ComputerRow = ComputerRow;