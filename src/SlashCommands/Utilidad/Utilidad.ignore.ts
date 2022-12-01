import { ApplicationCommandOptionType, CommandInteractionOptionResolver, GuildMember } from "discord.js";
import { SlashCommandStructure } from "../../Interfaces";
import { AttachmentBuilder, EmbedBuilder } from "discord.js";
import { profileImage } from "discord-arts";
import { Emojis } from "../../Data/Emojis";
const { Util } = Emojis;
const { Yes, No } = Util;
export default new SlashCommandStructure({
    name: "utilidad",
    description: "Sub SlashCommands de Utilidad.",
    options: [
        {
            name: "say",
            description: "Repito lo que me digas.",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "mensaje",
                    description: "Mensaje que repetiré.",
                    type: ApplicationCommandOptionType.String,
                    required: true,
                },
            ],
        },
        {
            name: "test",
            description: "Test",
            type: ApplicationCommandOptionType.Subcommand,
        },
    ],
    run: async ({ Komi, interaction }): Promise<void> => {
        if ((interaction.options as CommandInteractionOptionResolver).getSubcommand() === "say") {
            let Message = (interaction.options as CommandInteractionOptionResolver).getString("mensaje");
            let InteractionMember = interaction.member as GuildMember;
            if (interaction.user.id !== "437308398845952001") {
                if (!InteractionMember.permissions.has("ManageMessages")) {
                    interaction.reply({
                        content: `${No} | Debes tener el permiso de **__ADMINISTRADOR__** para poder usar este comando.`,
                        ephemeral: true,
                    });
                    return;
                }
            }
            interaction.reply({
                content: `${Yes} | Se ha mandado el mensaje.`,
                ephemeral: true,
            });
            interaction.channel.send({
                content: `${Message}`,
            });
        } else if ((interaction.options as CommandInteractionOptionResolver).getSubcommand() === "test") {
            await interaction.deferReply();
            const profileImg = await profileImage(interaction.user);
            new AttachmentBuilder(profileImg, { name: "profile.png" });
            interaction.followUp({
                embeds: [
                    new EmbedBuilder()
                        .setAuthor({
                            name: "MrMikeDev",
                            iconURL: interaction.user.displayAvatarURL(),
                        })
                        .setImage("attachment://profile.png"),
                ],
            });
        }
    },
});
