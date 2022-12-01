import {
    CommandInteraction,
    CacheType,
    AttachmentBuilder,
    EmbedBuilder,
    User
} from "discord.js";
import { RoundedTimeStamp } from "../../Functions/Utilities/RoundedTimeStamp";
import { profileImage } from "discord-arts";
import KomiClient from "../../Client";
export const UserInfo = async (
    Komi: KomiClient,
    interaction: CommandInteraction<CacheType>,
    {
        User: UserProp,
        UserId
    }: {
        User: User | null;
        UserId: number | null;
    }
) => {
    const idToString = `${UserId ?? 0}`;
    const User =
        UserProp ??
        Komi.users.resolve(idToString) ??
        Komi.users.resolve(idToString) ??
        Komi.users.cache.get(idToString) ??
        interaction.user;
    interaction.deferReply();
    if (!User) {
        interaction.followUp({
            embeds: [
                new EmbedBuilder()
                    .setDescription(
                        "x | Necesitas mencionar a un usuario o colocar su id."
                    )
                    .setColor("#990000")
            ]
        });
    }
    const rawUserImage = await profileImage(User);
    new AttachmentBuilder(rawUserImage, { name: "profile.png" });
    interaction.followUp({
        embeds: [
            new EmbedBuilder()
                .setTitle("¡User Info!")
                .setFields(
                    {
                        name: "Usuario:",
                        value: `${User.username}`,
                        inline: false
                    },
                    {
                        name: "ID:",
                        value: `${User.id}`,
                        inline: false
                    },
                    {
                        name: "Tag:",
                        value: `#${User.discriminator}`
                    },
                    {
                        name: "Creación de cuenta:",
                        value: `${RoundedTimeStamp(
                            User.createdTimestamp,
                            true
                        )}`
                    }
                    // {
                    //     name: "Union al servidor:",
                    //     value: `${RoundedTimeStamp(User.joinedTimestamp, true)}`
                    // }
                )
                .setThumbnail(User.displayAvatarURL())
                .setImage("attachment//profile.png")
                .setColor("#AF00FF")
                .setFooter({
                    text: `Pedido por: ${interaction.user.username}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
        ]
    });
};
