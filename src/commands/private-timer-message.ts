import { CommandMessage, Client } from '@typeit/discord';
import { DiscordApp } from '../main';
import { cpus } from 'os';

export async function timer(command: CommandMessage, client: Client)
{
    if(command.params.length === 0)
    {
        command.reply("Geef het aantal minuten mee");
        return;
    }

    // Get rid of comma's, make them points
    command.params[0] = command.params[0].replace(",", ".");

    try 
    {
        Number(command.params[0]);
    } catch (error) 
    {
        command.reply(command.params[0] + " is geen nummer. Vul een nummer in.")
    }

    setTimeout(() => command.author.sendMessage("Beep Boop, je timer gaat af!"), Number(command.params[0]) * 60 * 1000);
}