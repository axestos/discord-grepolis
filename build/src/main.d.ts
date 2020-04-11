import { Client, CommandMessage } from "@typeit/discord";
export declare class DiscordApp {
    private static _client;
    static start(): void;
    commandHello(command: CommandMessage, client: Client): void;
    commandNotFound(command: CommandMessage, client: Client): void;
}
