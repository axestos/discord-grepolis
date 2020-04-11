"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const grepolis_town_1 = require("./classes/grepolis-town");
const grepolis_player_1 = require("./classes/grepolis-player");
const axios_1 = tslib_1.__importDefault(require("axios"));
const main_1 = require("./main");
async function getPlayers() {
    var grepolisPlayers = new Array();
    return await axios_1.default.get(main_1.DiscordApp._grepolisUrl + "players.txt")
        .then((response) => {
        var splitPlayers = response.data.split('\n');
        splitPlayers.forEach((playerRow) => {
            var playerSplitted = playerRow.split(",");
            grepolisPlayers.push(new grepolis_player_1.GrepolisPlayer(playerSplitted));
        });
        return grepolisPlayers;
    })
        .catch((error) => {
        console.log(error);
        return grepolisPlayers;
    });
}
exports.getPlayers = getPlayers;
async function getTowns() {
    var grepolisTowns = new Array();
    return await axios_1.default.get(main_1.DiscordApp._grepolisUrl + "towns.txt")
        .then((response) => {
        var splitTowns = response.data.split('\n');
        splitTowns.forEach((playerRow) => {
            var townSplitted = playerRow.split(",");
            grepolisTowns.push(new grepolis_town_1.GrepolisTown(townSplitted));
        });
        return grepolisTowns;
    })
        .catch((error) => {
        console.log(error);
        return grepolisTowns;
    });
}
exports.getTowns = getTowns;
//# sourceMappingURL=grepolis-get-requests.js.map