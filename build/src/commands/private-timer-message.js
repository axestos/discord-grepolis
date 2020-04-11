"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function timer(command, client) {
    if (command.params.length === 0) {
        command.reply("Geef het aantal minuten mee");
        return;
    }
    setTimeout(() => command.author.sendMessage("Beep Boop, je timer gaat af!"), Number(command.params[0]) * 60 * 1000);
}
exports.timer = timer;
//# sourceMappingURL=private-timer-message.js.map