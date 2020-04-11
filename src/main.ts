import { Discord, Client, Command, CommandMessage, CommandNotFound } from "@typeit/discord";
import auth from "../auth.json";

@Discord({ prefix: "!" })
export class DiscordApp {
    private static _client: Client;

    static start() 
    {
        this._client = new Client();
        this._client.login(
            auth.bot_token,
            `${__dirname}/*Discord.ts` // glob string to load the classes
          );
    }

    @Command("hello")
    // @Guard(NotBot)
    commandHello(command: CommandMessage, client: Client)
    {
        command.reply("Hello "+ command.client.user.username);
    }

    @CommandNotFound()
    commandNotFound(command: CommandMessage, client: Client)
    {
        command.reply("Kon het commando "+ command.content +" niet vinden!")
    }
}

// Start the app
DiscordApp.start();