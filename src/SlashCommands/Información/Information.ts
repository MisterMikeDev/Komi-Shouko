import {
    ApplicationCommandOptionType,
    CommandInteractionOptionResolver
} from "discord.js";
import { SlashCommandStructure } from "../../Interfaces";
import { UserInfo } from "./UserInfo.cmd";
import { BotInfo } from "./BotInfo.cmd";
import { Invite } from "./Invite.cmd";
import { Ping } from "./Ping.cmd";
export default new SlashCommandStructure({
    name: "información",
    description: "Sub SlashCommands de Información.",
    options: [
        {
            name: "ping",
            description: "Muestra el ping de Komi-san.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "invite-me",
            description: "Obten mi invitación para invitarme a tu servidor.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "bot-info",
            description:
                "Comando que muestra toda la información relevante de Komi-san.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "user-info",
            description: "Obten la información de un usuario.",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "user",
                    description:
                        "Selecciona el usuario que quieres revisar (opcional).",
                    type: ApplicationCommandOptionType.User
                },
                {
                    name: "user-id",
                    description:
                        "Selecciona el id del usuario que quieres revisar (opcional).",
                    type: ApplicationCommandOptionType.Number
                }
            ]
        }
    ],
    run: async ({ Komi, interaction }) => {
        const Int = interaction.options as CommandInteractionOptionResolver;
        const DataUserInfo = {
            User: Int.getUser("User"),
            UserId: Int.getNumber("UserId")
        };
        switch (Int.getSubcommand()) {
            case "ping":
                Ping(Komi, interaction);
                break;
            case "invite-me":
                Invite(Komi, interaction);
                break;
            case "bot-info":
                BotInfo(Komi, interaction);
                break;
            case "user-info":
                UserInfo(Komi, interaction, DataUserInfo);
                break;
        }
    }
});
