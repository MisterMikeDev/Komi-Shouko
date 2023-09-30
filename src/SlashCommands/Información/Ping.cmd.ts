import {
    CacheType,
    ColorResolvable,
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import { Komi } from "../../Client";
import {
    getLocalResponsePing,
    getDiscordAPIPing,
    windTextTemplate
} from "../../Helpers";
export const Ping = async (
    Komi: Komi,
    interaction: CommandInteraction<CacheType>
) => {
    const { emoji: localEmoji, ping: localPing } = getLocalResponsePing(
        interaction.createdTimestamp
    );
    const {
        emoji: discordEmoji,
        color: discordColor,
        ping: discordPing
    } = getDiscordAPIPing(Komi);

    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setTitle("¡Ping de Komi-san!")
                .setColor(discordColor as ColorResolvable)
                .setTimestamp()
                .addFields(
                    {
                        name: windTextTemplate("Ping de Respuesta"),
                        value: `> ¡**__${localPing}__** ms! ${localEmoji}`,
                        inline: false
                    },
                    {
                        name: windTextTemplate("Ping de la API"),
                        value: `> ¡**__${discordPing}__** ms! ${discordEmoji}`,
                        inline: false
                    }
                )
                .setFooter({
                    text: `Comando hecho por @${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
        ]
    });
};
