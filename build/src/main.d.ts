import { Client, CommandMessage } from "@typeit/discord";
export declare class DiscordApp {
    private static _client;
    static _allCommandsString: string;
    private static _worldID;
    static _grepolisUrl: string;
    static start(): void;
    static getAllCommands(): void;
    commandHelp(command: CommandMessage, client: Client): void;
    commandHello(command: CommandMessage, client: Client): void;
    commandCities(command: CommandMessage, client: Client): Promise<void>;
    commandTimer(command: CommandMessage, client: Client): Promise<void>;
    commandNotFound(command: CommandMessage, client: Client): void;
}
