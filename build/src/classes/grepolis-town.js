"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GrepolisTown {
    constructor(townAsArray) {
        var _a;
        this.id = Number(townAsArray[0]);
        this.player_id = Number(townAsArray[1]);
        this.name = decodeURI((_a = townAsArray[2]) === null || _a === void 0 ? void 0 : _a.replace(/[+]/g, " "));
        this.island_x = Number(townAsArray[3]);
        this.island_y = Number(townAsArray[4]);
        this.number_on_island = Number(townAsArray[5]);
        this.points = Number(townAsArray[6]);
    }
    ;
}
exports.GrepolisTown = GrepolisTown;
//# sourceMappingURL=grepolis-town.js.map