"use strict";
var DiscordApp_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const auth_json_1 = tslib_1.__importDefault(require("../auth.json"));
let DiscordApp = DiscordApp_1 = class DiscordApp {
    static start() {
        this._client = new discord_1.Client();
        this._client.login(auth_json_1.default.bot_token, `${__dirname}/*Discord.ts` // glob string to load the classes
        );
        this.getAllCommands();
    }
    static getAllCommands() {
        var commands = discord_1.Client.getCommands("!");
        var commandsString = "De volgende commands zijn geldig: \n";
        commands.forEach(command => {
            var _a;
            commandsString += command.prefix + command.commandName + ": " + ((_a = command.description) !== null && _a !== void 0 ? _a : "[no description found]") + "\n";
        });
        this.allCommandsString = commandsString;
    }
    commandHelp(command, client) {
        command.reply(DiscordApp_1.allCommandsString);
    }
    commandHello(command, client) {
        command.reply("Hello " + command.author.username);
    }
    commandNotFound(command, client) {
        command.reply("Kon het commando " + command.content + " niet vinden! \n" + DiscordApp_1.allCommandsString);
    }
};
tslib_1.__decorate([
    discord_1.Command("help", { description: "Weergeeft alle commands" }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandHelp", null);
tslib_1.__decorate([
    discord_1.Command("hello", { description: "Zegt hallo" }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandHello", null);
tslib_1.__decorate([
    discord_1.CommandNotFound(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandNotFound", null);
DiscordApp = DiscordApp_1 = tslib_1.__decorate([
    discord_1.Discord({ prefix: "!" })
], DiscordApp);
exports.DiscordApp = DiscordApp;
// Start the app
DiscordApp.start();
//# sourceMappingURL=main.js.map