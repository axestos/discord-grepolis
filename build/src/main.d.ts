import { Client, CommandMessage } from "@typeit/discord";
export declare class DiscordApp {
    private static _client;
    private static allCommandsString;
    static start(): void;
    static getAllCommands(): void;
    commandHelp(command: CommandMessage, client: Client): void;
    commandHello(command: CommandMessage, client: Client): void;
    commandNotFound(command: CommandMessage, client: Client): void;
}
