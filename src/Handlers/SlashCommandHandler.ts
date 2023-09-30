import { CommandType, SlashCommandsRegisterOptions } from "../Interfaces";
import { ApplicationCommandDataResolvable } from "discord.js";
import { Komi } from "../Client";
import { ColorText } from "../Helpers";
import { readdirSync } from "fs";
export const SlashCommandsHandler = (Komi: Komi): void => {
    async function importFile(filePath: string): Promise<any> {
        return (await import(filePath))?.default;
    }
    function registerCommands({
        commands
    }: SlashCommandsRegisterOptions): void {
        Komi.application?.commands
            .set(commands)
            .then(() => {
                console.log(`${ColorText("SlashCommands", "red")} cargados ✅`);
            })
            .catch((e) =>
                console.log(
                    `${ColorText(
                        `${"SlashCommands"}`,
                        "red"
                    )} not working: ${ColorText(e, "red")}`
                )
            );
    }

    (async () => {
        const SlashCommands: ApplicationCommandDataResolvable[] = [];

        readdirSync(`${__dirname}/../SlashCommands`).forEach(async (dir) => {
            const commandFiles = readdirSync(
                `${__dirname}/../SlashCommands/${dir}`
            ).filter(
                (file): boolean =>
                    (file.endsWith(".js") || file.endsWith(".ts")) &&
                    !file.includes(".cmd") &&
                    !file.includes(".code") &&
                    !file.includes(".modal") &&
                    !file.includes(".ignore")
            );

            for (const file of commandFiles) {
                const command: CommandType = await importFile(
                    `../SlashCommands/${dir}/${file}`
                );
                if (command.name) {
                    Komi.slashcommands.set(command.name, command);
                    SlashCommands.push(command);
                }
            }
        });

        Komi.on("ready", (): void => {
            registerCommands({
                commands: SlashCommands,
                guildId: process.env.guildId
            });
        });
    })();
};
