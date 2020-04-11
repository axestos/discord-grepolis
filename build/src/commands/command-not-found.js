"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../main");
function notFound(command, client) {
    command.reply("Kon het commando " + command.content + " niet vinden! \n" + main_1.DiscordApp._allCommandsString);
}
exports.notFound = notFound;
//# sourceMappingURL=command-not-found.js.map