"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GrepolisPlayer {
    constructor(playerAsArray) {
        var _a;
        this.id = Number(playerAsArray[0]);
        this.name = decodeURIComponent((_a = playerAsArray[1]) === null || _a === void 0 ? void 0 : _a.replace(/[+]/g, " "));
        this.alliance_id = Number(playerAsArray[2]);
        this.points = Number(playerAsArray[3]);
        this.rank = Number(playerAsArray[4]);
        this.towns = Number(playerAsArray[5]);
    }
    ;
}
exports.GrepolisPlayer = GrepolisPlayer;
//# sourceMappingURL=grepolis-player.js.map