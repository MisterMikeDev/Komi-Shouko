import { ApplicationCommandDataResolvable } from "discord.js";

export interface SlashCommandsRegisterOptions {
    guildId?: string;
    commands: ApplicationCommandDataResolvable[];
}
