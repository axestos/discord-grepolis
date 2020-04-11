import { CommandMessage, Client } from '@typeit/discord';
import { DiscordApp } from '../main';
import { cpus } from 'os';

export function help(command: CommandMessage, client: Client)
{
    command.reply(DiscordApp._allCommandsString);
}