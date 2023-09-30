/* eslint-disable no-unused-vars */
import {
    ChatInputApplicationCommandData,
    CommandInteraction,
    CommandInteractionOptionResolver,
    GuildMember,
    PermissionResolvable
} from "discord.js";
import { Komi } from "../../Client";

export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

interface RunOption {
    Komi: Komi;
    interaction: CommandInteraction;
    args: CommandInteractionOptionResolver;
}

type RunFunction = (options: RunOption) => any;

export type CommandType = {
    userPermisions?: PermissionResolvable[];
    run: RunFunction;
} & ChatInputApplicationCommandData;
