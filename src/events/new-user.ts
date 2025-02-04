
import auth from "../../auth.json";
import { GuildMember, TextChannel } from 'discord.js';
import { Client } from '@typeit/discord';

export function welcomeNewUser(member: GuildMember)
{
    var guild = member.guild;

    var defaultChannel = guild.channels.get(auth["default-channel_id"]) as TextChannel;

    defaultChannel.send("Welkom <@" + member.user.id + ">! Wacht hier tot je geverifieerd bent, tot die tijd ga gerust hier een gesprek aan!"); 
}