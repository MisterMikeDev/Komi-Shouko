import {
    CommandInteraction,
    CacheType,
    PermissionsBitField,
    GuildMember
} from "discord.js";
export const NoPerms = (
    interaction: CommandInteraction<CacheType>,
    type: keyof {
        kickAndBanCommand: string;
        adminCommand: string;
        onlyDev: string;
    }
) => {
    const interactionGuildMember = interaction.member as GuildMember;
    const { Administrator, KickMembers, BanMembers } =
        PermissionsBitField.Flags;
    switch (type) {
        case "kickAndBanCommand":
            if (
                interaction.user.id !== "437308398845952001" &&
                interactionGuildMember.permissions.has([
                    KickMembers,
                    BanMembers
                ])
            ) {
                interaction.reply({
                    content:
                        "❌ | Necesitas permisos de `Kick Members` y/o `Ban Members` para usar este comando.",
                    ephemeral: true
                });
                return true;
            }
            break;
        case "adminCommand":
            if (
                interaction.user.id !== "437308398845952001" &&
                interactionGuildMember.permissions.has([Administrator])
            ) {
                interaction.reply({
                    content:
                        "❌ | Necesitas permisos de `Administrador` para usar este comando.",
                    ephemeral: true
                });
                return true;
            }
            break;
        case "onlyDev":
            if (interaction.user.id !== "437308398845952001") {
                interaction.reply({
                    content: "❌ | No tienes permiso para usar este comando.",
                    ephemeral: true
                });
                return true;
            }
            break;
        default:
            return false;
    }
};
