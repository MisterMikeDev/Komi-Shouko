import {
    ApplicationCommandOptionType,
    CommandInteractionOptionResolver,
    GuildMember
} from "discord.js";
import { SlashCommandStructure } from "../../Interfaces";
import { UserInfo } from "./UserInfo.cmd";
import { BotInfo } from "./BotInfo.cmd";
import { Invite } from "./Invite.cmd";
import { Ping } from "./Ping.cmd";
const { Subcommand, Mentionable } = ApplicationCommandOptionType;
export default new SlashCommandStructure({
    name: "información",
    description: "Sub SlashCommands de Información.",
    options: [
        {
            name: "ping",
            description: "Muestra el ping de Komi-san.",
            type: Subcommand
        },
        {
            name: "invite-me",
            description: "Obten mi invitación para invitarme a tu servidor.",
            type: Subcommand
        },
        {
            name: "bot-info",
            description:
                "Comando que muestra toda la información relevante de Komi-san.",
            type: Subcommand
        },
        {
            name: "user-info",
            description: "Obten la información de un usuario.",
            type: Subcommand,
            options: [
                {
                    name: "user",
                    description:
                        "Selecciona el id del usuario que quieres revisar.",
                    type: Mentionable
                }
            ]
        }
    ],
    run: async ({ Komi, interaction }): Promise<void> => {
        const Int = interaction.options as CommandInteractionOptionResolver;
        const subCommand = Int.getSubcommand();
        const IntMap = {
            ping: () => {
                Ping(Komi, interaction);
            },
            "invite-me": () => {
                Invite(Komi, interaction);
            },
            "bot-info": () => {
                BotInfo(Komi, interaction);
            },
            "user-info": () => {
                const UserId =
                    (Int.getMentionable("user") as GuildMember)?.id ??
                    interaction.user.id;
                UserInfo(Komi, interaction, UserId);
            }
        };

        IntMap[subCommand as keyof typeof IntMap]();
    }
});
