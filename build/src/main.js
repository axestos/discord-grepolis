"use strict";
var DiscordApp_1;
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const discord_1 = require("@typeit/discord");
const auth_json_1 = tslib_1.__importDefault(require("../auth.json"));
const city_of_player_command_1 = require("./commands/city-of-player-command");
const command_not_found_1 = require("./commands/command-not-found");
const help_command_1 = require("./commands/help-command");
const private_timer_message_1 = require("./commands/private-timer-message");
const discord_events_1 = require("./classes/discord-events");
const discord_js_1 = require("discord.js");
const new_user_1 = require("./events/new-user");
let DiscordApp = DiscordApp_1 = class DiscordApp {
    static start() {
        this._client = new discord_1.Client();
        this._client.login(auth_json_1.default.bot_token, `${__dirname}/*Discord.ts`);
        this.getAllCommands();
    }
    static getAllCommands() {
        var commands = discord_1.Client.getCommands("!");
        var commandsString = "De volgende commands zijn geldig: \n";
        commands.forEach(command => {
            // only show commands that have a description
            if (command.description) {
                commandsString += command.prefix + command.commandName + ": " + command.description + "\n";
            }
        });
        this._allCommandsString = commandsString;
    }
    newUser(member) {
        new_user_1.welcomeNewUser(member);
    }
    commandHelp(command, client) {
        help_command_1.help(command, client);
    }
    // world data: https://us.forum.grepolis.com/index.php?threads/world-data.3226/
    async commandCities(command, client) {
        await city_of_player_command_1.getCityOfPlayer(command, client);
    }
    async commandTimer(command, client) {
        await private_timer_message_1.timer(command, client);
    }
    commandNotFound(command, client) {
        command_not_found_1.notFound(command, client);
    }
    /* JOKE COMMANDS */
    commandBeer(command, client) {
        command.reply("Ik zeg proost op " + command.author.username + ", en vergeet niet: Probleem'n? Poar neem'n!");
    }
    commandBelgium(command, client) {
        command.reply("https://youtu.be/MTVnMO6cRfg?t=232");
    }
    commandNetherlands(command, client) {
        command.reply("https://youtu.be/l18j-vrVMCA");
    }
    commandRussia(command, client) {
        command.reply("https://youtu.be/BVWfqOSdzs4");
    }
};
DiscordApp._worldID = 77;
DiscordApp._grepolisUrl = "https://nl" + DiscordApp_1._worldID + ".grepolis.com/data/";
tslib_1.__decorate([
    discord_1.On(discord_events_1.DiscordEvent.GuildMemberAdd),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [discord_js_1.GuildMember]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "newUser", null);
tslib_1.__decorate([
    discord_1.Command("help", { description: "Weergeeft alle commands" }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandHelp", null);
tslib_1.__decorate([
    discord_1.Command("steden", { description: "Weergeeft de steden van een speler. Gebruik command: !steden {{spelernaam}}" }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscordApp.prototype, "commandCities", null);
tslib_1.__decorate([
    discord_1.Command("timer", { description: "Zet een timer(in minuten) en wordt iedere X minuten herinnert doormiddel van een privébericht. Gebruik command !timer {{minuten}} {{reden: optioneel}}" }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", Promise)
], DiscordApp.prototype, "commandTimer", null);
tslib_1.__decorate([
    discord_1.CommandNotFound(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandNotFound", null);
tslib_1.__decorate([
    discord_1.Command("bier"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandBeer", null);
tslib_1.__decorate([
    discord_1.Command("belgie"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandBelgium", null);
tslib_1.__decorate([
    discord_1.Command("nederland"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandNetherlands", null);
tslib_1.__decorate([
    discord_1.Command("rusland"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", void 0)
], DiscordApp.prototype, "commandRussia", null);
DiscordApp = DiscordApp_1 = tslib_1.__decorate([
    discord_1.Discord({ prefix: "!" })
], DiscordApp);
exports.DiscordApp = DiscordApp;
// Start the app
DiscordApp.start();
//# sourceMappingURL=main.js.map