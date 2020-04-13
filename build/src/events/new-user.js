"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const auth_json_1 = tslib_1.__importDefault(require("../../auth.json"));
function welcomeNewUser(member) {
    var guild = member.guild;
    var defaultChannel = guild.channels.get(auth_json_1.default["default-channel_id"].toString());
    defaultChannel.send("Welkom <@" + member.user.id + ">! Wacht hier tot je geverifieerd bent, tot die tijd ga gerust hier een gesprek aan!");
}
exports.welcomeNewUser = welcomeNewUser;
//# sourceMappingURL=new-user.js.map