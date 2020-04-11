"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const auth_json_1 = tslib_1.__importDefault(require("../auth.json"));
let DiscordApp = class DiscordApp {
    static start() {
        this._client = new discord_1.Client();
        this._client.login(auth_json_1.default.bot_token, `${__dirname}/*Discord.ts` // glob string to load the classes
        );
    }
    // @Guard(NotBot)
    commandHello(command, client) {
        command.reply("Hello " + command.client.user.username);
    }
    commandNotFound(command, client) {
        command.reply("Kon het commando " + command.content + " niet vinden!");
    }
};
tslib_1.__decorate([
    discord_1.Command("hello"),
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
DiscordApp = tslib_1.__decorate([
    discord_1.Discord({ prefix: "!" })
], DiscordApp);
exports.DiscordApp = DiscordApp;
// Start the app
DiscordApp.start();
//# sourceMappingURL=main.js.map