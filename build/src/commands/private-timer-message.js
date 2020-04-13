"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function timer(command, client) {
    if (command.params.length === 0) {
        command.reply("Geef het aantal minuten mee");
        return;
    }
    // Get rid of comma's, make them points
    var timeInMinutes = command.params[0].replace(",", ".");
    var reason = command.params[1];
    // try to parse the given param
    var parsedNumber = Number(timeInMinutes);
    if (isNaN(parsedNumber)) {
        command.reply(timeInMinutes + " is geen nummer. Vul een nummer in.");
        return;
    }
    var response = reason ? "Timer voor " + reason + " gaat af!" : "Beep Boop, je timer gaat af!";
    command.reply("Timer is gezet en gaat over " + timeInMinutes + " minuut/minuten af.");
    setTimeout(() => command.author.send(response), parsedNumber * 60 * 1000);
}
exports.timer = timer;
//# sourceMappingURL=private-timer-message.js.map