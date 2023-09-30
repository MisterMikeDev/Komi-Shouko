import {
    CommandInteraction,
    CacheType,
    AttachmentBuilder,
    EmbedBuilder
} from "discord.js";
import { RoundedTimeStamp } from "../../Helpers/RoundedTimestamp";
import { profileImage } from "discord-arts";
import { Komi } from "../../Client";
export const UserInfo = async (
    Komi: Komi,
    interaction: CommandInteraction<CacheType>,
    UserId: string
) => {
    const user = Komi.guilds
        .resolve(`${interaction.guild?.id}`)
        ?.members.resolve(UserId);
    const rawUserImage = await profileImage(`${UserId}`, {
        customTag: `${user?.user.tag}`
    });
    const att = new AttachmentBuilder(rawUserImage, { name: "card.png" });
    interaction.reply({
        files: [att],
        embeds: [
            new EmbedBuilder()
                .setTitle("¡User Info!")
                .setThumbnail(`${user?.displayAvatarURL()}`)
                .setImage("attachment://card.png")
                .setColor("#AF00FF")
                .setFooter({
                    text: `Pedido por: @${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
                .setFields(
                    {
                        name: "Usuario:",
                        value: `${user?.displayName}`
                    },
                    {
                        name: "Mención:",
                        value: `<@${user?.user.id}>`,
                        inline: true
                    },
                    {
                        name: "Union al servidor:",
                        value: `${RoundedTimeStamp(`${user?.joinedTimestamp}`, {
                            itsForDiscord: true,
                            type: "relativeTimeLong"
                        })}`
                    },
                    {
                        name: "Union a Discord:",
                        value: `${RoundedTimeStamp(
                            `${user?.user.createdTimestamp}`,
                            {
                                itsForDiscord: true,
                                type: "relativeTimeLong"
                            }
                        )}`,
                        inline: true
                    }
                )
        ]
    });
};
