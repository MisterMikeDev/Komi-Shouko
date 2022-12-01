import {
    CommandInteraction,
    CacheType,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ComponentType,
} from "discord.js";
import { Emojis } from "../../Data/Emojis";
import Items from "../../Schemas/ItemData";
import KomiClient from "../../Client";
import { Item as ItemInterface } from "../../Interfaces";
export const Shop = async (
    Komi: KomiClient,
    interaction: CommandInteraction<CacheType>
) => {
    const { Util, Economia } = Emojis;
    const { Yes, No } = Util;
    const { KomiCoin } = Economia;
    let allItems = await Items.find().sort({ id: 1 }).exec();
    const shopPages = new Array(Math.ceil(allItems.length / 5))
        .fill(undefined)
        .map((_item) => allItems.splice(0, 5));
    let Shop = shopPages.map((arrayPage, indexPage) => {
        const Page = new EmbedBuilder()
            .setAuthor({
                name: "Tienda de la economía.",
                iconURL: interaction.user.displayAvatarURL(),
            })
            .setColor("Random")
            .setTimestamp()
            .setFooter({
                text: `Página ${indexPage + 1} de ${arrayPage.length}`,
                iconURL: interaction.user.displayAvatarURL(),
            });
        arrayPage.forEach((ItemFromArray) => {
            const { id, Item } = ItemFromArray;
            const { icon, name, prizeForBuy, description } =
                Item as ItemInterface;
            Page.addFields({
                name: `\`${id}\`. ${icon} ${name}  \`-\` ${prizeForBuy} ${KomiCoin}`,
                value: `> ${description}`,
                inline: false,
            });
        });
        return Page;
    });
    let PageNumber = 0;
    let UltimaPagina = Shop.length - 1;
    interaction.reply({
        embeds: [Shop[PageNumber]],
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                new ButtonBuilder()
                    .setEmoji(`${Util.ArrowLeft}`)
                    .setCustomId("Shop_Previous")
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setEmoji(`${Util.No}`)
                    .setCustomId("Shop_Delete")
                    .setStyle(ButtonStyle.Danger),
                new ButtonBuilder()
                    .setEmoji(`${Util.ArrowRight}`)
                    .setCustomId("Shop_Next")
                    .setStyle(ButtonStyle.Secondary)
            ),
        ],
    });
    interaction.channel
        .createMessageComponentCollector({
            componentType: ComponentType.Button,
            time: 120000,
        })
        .on("collect", async (btn) => {
            if (interaction.user.id !== btn.user.id) return;
            if (btn.customId === "Shop_Previous") {
                PageNumber === 0 ? (PageNumber = UltimaPagina) : PageNumber--;
                await interaction
                    .editReply({
                        embeds: [Shop[PageNumber]],
                    })
                    .then(() => btn.deferUpdate());
            } else if (btn.customId === "Shop_Delete") {
                await interaction.deleteReply().then(() => btn.deferUpdate());
            } else if (btn.customId === "Shop_Next") {
                PageNumber === UltimaPagina ? (PageNumber = 0) : PageNumber++;
                await interaction
                    .editReply({
                        embeds: [Shop[PageNumber]],
                    })
                    .then(() => btn.deferUpdate());
            }
        });
};
