import { CacheType, CommandInteraction, EmbedBuilder } from "discord.js";
import { Komi } from "../../Client";
import { quoteTextWithIconTemplate, windTextTemplate } from "../../Helpers";
export const BotInfo = async (
    Komi: Komi,
    interaction: CommandInteraction<CacheType>
) => {
    const User = Komi.user;
    const { Util, KomiShouko, Badge } = Komi.customEmojis.Emojis;
    const { KomiMaidExcited } = KomiShouko;
    const { Owner, Developer } = Badge;
    const {
        Arrow,
        VisualStudioCodeInsider,
        Terminal,
        OCI,
        Users,
        Bot,
        SlashCommands,
        Discordjs,
        NodeJS,
        TypeScript,
        Tags,
        Channels
    } = Util;
    const Hosts = {
        Oracle: `> ${Arrow} ${OCI} [Oracle Cloud (OCI)](https://www.oracle.com/mx/cloud/)`,
        Local: `> ${Arrow} ${VisualStudioCodeInsider} [Visual Studio Code](https://code.visualstudio.com/insiders/)\n> ${Arrow} ${Terminal} [Terminal](https://www.microsoft.com/es-mx/p/windows-terminal/9n0dx20hk701)`
    };
    const hexColor = interaction.guild?.members.me?.displayHexColor;
    const roleColor =
        hexColor === "#000000" ? "#ffffff" : hexColor ?? "#ffffff";
    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setAuthor({
                    name: "Komi Info",
                    iconURL: User?.displayAvatarURL()
                })
                .setThumbnail(User?.displayAvatarURL() ?? "")
                .addFields(
                    {
                        name: windTextTemplate("Desarrolladores de Komi-san"),
                        value: `> ${Arrow} Owner [MrMikeDev#9081](https://discord.com/users/437308398845952001) ${Owner} ${Developer}`,
                        inline: false
                    },
                    {
                        name: windTextTemplate("Estadísticas de Komi-san"),
                        value:
                            quoteTextWithIconTemplate(
                                Tags,
                                `${Komi.guilds.cache.size} servers.`
                            ) +
                            " " +
                            quoteTextWithIconTemplate(
                                Users,
                                `${Komi.users.cache.size} usuarios.`
                            ) +
                            " " +
                            quoteTextWithIconTemplate(
                                Channels,
                                `${Komi.channels.cache.size} canales.`
                            ),
                        inline: false
                    },
                    {
                        name: windTextTemplate("Hosteada en"),
                        value: `${
                            process.env.ENV === "dev"
                                ? Hosts.Local
                                : Hosts.Oracle
                        }`,
                        inline: false
                    },
                    {
                        name: windTextTemplate("Caracteristicasd de Komi-san"),
                        value: `${quoteTextWithIconTemplate(
                            KomiMaidExcited,
                            "**Fecha de Creación:** <t:1628722800>."
                        )} ${quoteTextWithIconTemplate(
                            TypeScript,
                            "**Lenguaje usado:** TypeScript."
                        )} ${quoteTextWithIconTemplate(
                            Discordjs,
                            "**Libreria usada:** Discord.js *v14.13.0*"
                        )} ${quoteTextWithIconTemplate(
                            NodeJS,
                            `**Entorno de ejecución:** NodeJS *${process.version}*.`
                        )}`,
                        inline: false
                    },
                    {
                        name: windTextTemplate("Cuento con"),
                        value: quoteTextWithIconTemplate(
                            SlashCommands,
                            `**${Komi.slashcommands.size}** Slash Commands.`
                        ),
                        inline: false
                    },
                    {
                        name: windTextTemplate("Versión del Komi-san"),
                        value: quoteTextWithIconTemplate(
                            Bot,
                            "Komi Shouko **v0.0.1**"
                        ),
                        inline: false
                    }
                )
                .setImage(
                    "https://cdn.discordapp.com/attachments/930674284425265182/934612890219085884/standard.gif"
                )
                .setFooter({
                    text: `Comando hecho por @${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
                .setColor(roleColor)
                .setTimestamp()
        ]
    });
};
