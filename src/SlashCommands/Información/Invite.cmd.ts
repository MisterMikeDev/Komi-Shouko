import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    CacheType,
    ColorResolvable,
    CommandInteraction,
    EmbedBuilder,
} from "discord.js";
import { Emojis } from "../../Data/Emojis";
import KomiClient from "../../Client";
export const Invite = async (
    Komi: KomiClient,
    interaction: CommandInteraction<CacheType>
) => {
    const { KomiShouko } = Emojis;
    const { KomiOK } = KomiShouko;
    const { Link } = ButtonStyle;
    const highsterRolHex =
        interaction.guild.members.me.displayHexColor === "#000000"
            ? "#ffffff"
            : (interaction.guild.members.me.displayHexColor as ColorResolvable);
    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setAuthor({
                    name: `Invitación`,
                    iconURL: `${Komi.user.displayAvatarURL()}`,
                })
                .setDescription(
                    `${KomiOK} Aquí tienes la invitación para que me invites a tu servidor. ${KomiShouko.KomiOK}`
                )
                .setImage(
                    "https://media.discordapp.net/attachments/880562658401722379/934945810301468782/komi-cant-communicate-komi.gif"
                )
                .setColor(highsterRolHex)
                .setFooter({
                    text: "Gracias por considerar invitarme.",
                    iconURL: `${Komi.user.displayAvatarURL()}`,
                })
                .setTimestamp(),
        ],
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                new ButtonBuilder()
                    .setStyle(Link)
                    .setURL(
                        "https://discord.com/api/oauth2/authorize?client_id=875166925884370994&permissions=8&scope=applications.commands%20bot"
                    )
                    .setLabel("Invitame"),
                new ButtonBuilder()
                    .setStyle(Link)
                    .setURL("https://discord.gg/9rvvC9XFvX")
                    .setLabel("Soporte")
            ),
        ],
    });
};
