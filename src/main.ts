import { Discord, Client, Command, CommandMessage, CommandNotFound } from "@typeit/discord";
import auth from "../auth.json";
import { cpus } from 'os';

interface Infos 
{
    requiredRole: string;
}

@Discord({ prefix: "!" })
export class DiscordApp {
    private static _client: Client;
    private static allCommandsString: string;

    static start() 
    {
        this._client = new Client();
        this._client.login(
            auth.bot_token,
            `${__dirname}/*Discord.ts` // glob string to load the classes
          );
        this.getAllCommands();
    }
    
    static getAllCommands() {
        var commands = Client.getCommands<Infos>("!");
        var commandsString = "De volgende commands zijn geldig: \n";

        commands.forEach(command => 
        {
            commandsString += command.prefix + command.commandName + ": " + (command.description ?? "[no description found]") + "\n";
        });

        this.allCommandsString = commandsString;
    }

    @Command("help", { description: "Weergeeft alle commands" })
    commandHelp(command: CommandMessage, client: Client)
    {
        command.reply(DiscordApp.allCommandsString);
    }

    @Command("hello", { description: "Zegt hallo" })
    commandHello(command: CommandMessage, client: Client)
    {
        command.reply("Hello "+ command.author.username);
    }

    @CommandNotFound()
    commandNotFound(command: CommandMessage, client: Client)
    {
        command.reply("Kon het commando "+ command.content +" niet vinden! \n" + DiscordApp.allCommandsString)
    }

}

// Start the app
DiscordApp.start();