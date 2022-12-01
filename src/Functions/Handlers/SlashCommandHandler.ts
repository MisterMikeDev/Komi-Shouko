import { CommandType, SlashCommandsRegisterOptions } from "../../Interfaces";
import { ApplicationCommandDataResolvable } from "discord.js";
import { promisify } from "util";
import KomiClient from "../../Client";
import glob from "glob";
import chalk from "chalk";
export const SlashCommandsHandler = (Komi: KomiClient): void => {
    const globPromise = promisify(glob);
    async function importFile(filePath: string): Promise<any> {
        return (await import(filePath))?.default;
    }
    function registerCommands({
        commands
    }: SlashCommandsRegisterOptions): void {
        Komi.application?.commands
            .set(commands)
            .then(() =>
                console.log(
                    `${chalk.green("[+]")} ${chalk.red(
                        "SlashCommands"
                    )} cargados ✅`
                )
            )
            .catch((e) =>
                console.log(
                    `${chalk.red("[x]")} ${chalk.red(
                        `${"SlashCommands"}`
                    )} not working: ${chalk.red(e)}`
                )
            );
    }
    (async () => {
        const SlashCommands: ApplicationCommandDataResolvable[] = [];
        const commandFiles = await globPromise(
            `${__dirname}/../../SlashCommands/*/*{.ts,.js}`
        );
        const SlashCommandsWithFilter = commandFiles.filter(
            (value): boolean =>
                !value.includes(".cmd") &&
                !value.includes(".code") &&
                !value.includes(".modal") &&
                !value.includes(".ignore")
        );
        SlashCommandsWithFilter.forEach(
            async (filePath: string): Promise<void> => {
                const command: CommandType = await importFile(filePath);
                if (command.name) {
                    Komi.slashcommands.set(command.name, command);
                    SlashCommands.push(command);
                }
            }
        );
        Komi.on("ready", (): void => {
            registerCommands({
                commands: SlashCommands,
                guildId: process.env.guildId
            });
        });
    })();
};
