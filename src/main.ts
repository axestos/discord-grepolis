import { Discord, Client, Command, CommandMessage, CommandNotFound, On } from "@typeit/discord";
import auth from "../auth.json";
import { getCityOfPlayer } from './commands/city-of-player-command';
import { notFound } from './commands/command-not-found';
import { help } from './commands/help-command';
import { timer } from './commands/private-timer-message';
import { DiscordEvent } from './classes/discord-events';
import { GuildMember } from 'discord.js';
import { welcomeNewUser } from './events/new-user';

interface Infos 
{
    requiredRole: string;
}

@Discord({ prefix: "!" })
export class DiscordApp {
    private static _client: Client;
    public static _allCommandsString: string;
    private static _worldID = 77; 
    public static _grepolisUrl = "https://nl"+DiscordApp._worldID+".grepolis.com/data/"

    static start() 
    {
        this._client = new Client();
        this._client.login(
            auth.bot_token,
            `${__dirname}/*Discord.ts`
          );
        this.getAllCommands();
    }
    
    static getAllCommands() {
        var commands = Client.getCommands<Infos>("!");
        var commandsString = "De volgende commands zijn geldig: \n";

        commands.forEach(command => 
        {
            // only show commands that have a description
            if(command.description)
            {
                commandsString += command.prefix + command.commandName + ": " + command.description  + "\n";
            }
        });

        this._allCommandsString = commandsString;
    }

    @On(DiscordEvent.GuildMemberAdd)
    newUser(member: GuildMember)
    {
        welcomeNewUser(member);
    }

    @Command("help", { description: "Weergeeft alle commands" })
    commandHelp(command: CommandMessage, client: Client)
    {
        help(command, client);
    }

    // world data: https://us.forum.grepolis.com/index.php?threads/world-data.3226/
    @Command("steden", { description:"Weergeeft de steden van een speler. Gebruik command: !steden {{spelernaam}}" })
    async commandCities(command: CommandMessage, client: Client)
    {
        await getCityOfPlayer(command, client);
    }

    @Command("timer", {description: "Zet een timer(in minuten) en wordt iedere X minuten herinnert doormiddel van een privébericht. Gebruik command !timer {{minuten}} {{reden: optioneel}}"})
    async commandTimer(command: CommandMessage, client: Client)
    {
        await timer(command, client);
    }

    @CommandNotFound()
    commandNotFound(command: CommandMessage, client: Client)
    {
        notFound(command, client);
    }

    /* JOKE COMMANDS */
    @Command("bier")
    commandBeer(command: CommandMessage, client: Client)
    {
        command.reply("Ik zeg proost op "+ command.author.username + ", en vergeet niet: Probleem'n? Poar neem'n!");
    }

    @Command("belgie")
    commandBelgium(command: CommandMessage, client: Client){
        command.reply("https://youtu.be/MTVnMO6cRfg?t=232");
    }
    
    @Command("nederland")
    commandNetherlands(command: CommandMessage, client: Client){
        command.reply("https://youtu.be/l18j-vrVMCA");
    }

    @Command("rusland")
    commandRussia(command: CommandMessage, client: Client){
        command.reply("https://youtu.be/BVWfqOSdzs4");
    }
}

// Start the app
DiscordApp.start();