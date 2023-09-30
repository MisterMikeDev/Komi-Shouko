import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    CacheType,
    ColorResolvable,
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { Komi } from "../../Client";
export const Invite = async (
    Komi: Komi,
    interaction: CommandInteraction<CacheType>
) => {
    const User = Komi.user;
    const { KomiOK } = Komi.customEmojis.Emojis.KomiShouko;
    const { Link } = ButtonStyle;
    let highsterRolHex: ColorResolvable;

    if (interaction.guild?.members.me?.displayHexColor === "#000000") {
        highsterRolHex = "#ffffff";
    } else {
        highsterRolHex = interaction.guild?.members.me
            ?.displayHexColor as ColorResolvable;
    }

    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setAuthor({
                    name: "Invitación",
                    iconURL: `${User?.displayAvatarURL()}`
                })
                .setDescription(
                    `${KomiOK} Aquí tienes la invitación para que me invites a tu servidor. ${KomiOK}`
                )
                .setImage(
                    "https://media.discordapp.net/attachments/880562658401722379/934945810301468782/komi-cant-communicate-komi.gif"
                )
                .setColor(highsterRolHex)
                .setFooter({
                    text: "Gracias por considerar invitarme.",
                    iconURL: `${User?.displayAvatarURL()}`
                })
                .setTimestamp()
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
            )
        ]
    });
};
