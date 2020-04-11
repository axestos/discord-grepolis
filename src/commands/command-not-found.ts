import { CommandMessage, Client } from '@typeit/discord';
import { DiscordApp } from '../main';

export function notFound(command: CommandMessage, client: Client)
{
    command.reply("Kon het commando "+ command.content +" niet vinden! \n" + DiscordApp._allCommandsString);
}