import { SlashCommandsHandler, EventHandler } from "../Functions";
import { MongoDBConnect } from "../Databases/MongoDB";
import { Client, Collection } from "discord.js";
import { CommandType, Snipe } from "../Interfaces";
import { Config } from "../Data/Config";
import chalk from "chalk";
export default class Komi extends Client {
    public events: Collection<string, Event> = new Collection();
    public slashcommands: Collection<string, CommandType> = new Collection();
    public snipe: Map<string, Snipe> = new Map();
    constructor() {
        super({
            intents: Config.DiscordBot.Intents,
            allowedMentions: {
                repliedUser: false
            },
            ws: { properties: { browser: "Discord Android" } }
        });
    }
    start(): void {
        /* Bot Login */
        this.login(Config.DiscordBot.Token).catch(({ message }: Error) => {
            console.log(
                `${chalk.red("[x]")} ${chalk.magenta(
                    `${"Komi Shouko"}`
                )} not connected: ${chalk.red(message)}`
            );
        });

        /* Database Connection */
        MongoDBConnect();

        /* Event Handler */
        EventHandler(this);

        /* SlashCommands */
        SlashCommandsHandler(this);

        /* UnhandledRejection */
        process.on("unhandledRejection", (e) => console.log(e));
    }
}
