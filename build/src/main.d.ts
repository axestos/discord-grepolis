import { Client, CommandMessage } from "@typeit/discord";
import { GuildMember } from 'discord.js';
export declare class DiscordApp {
    private static _client;
    static _allCommandsString: string;
    private static _worldID;
    static _grepolisUrl: string;
    static start(): void;
    static getAllCommands(): void;
    newUser(member: GuildMember): void;
    commandHelp(command: CommandMessage, client: Client): void;
    commandCities(command: CommandMessage, client: Client): Promise<void>;
    commandTimer(command: CommandMessage, client: Client): Promise<void>;
    commandNotFound(command: CommandMessage, client: Client): void;
    commandBeer(command: CommandMessage, client: Client): void;
    commandBelgium(command: CommandMessage, client: Client): void;
    commandNetherlands(command: CommandMessage, client: Client): void;
    commandRussia(command: CommandMessage, client: Client): void;
}
