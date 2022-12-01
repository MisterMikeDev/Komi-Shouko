import { CacheType, CommandInteraction, EmbedBuilder } from "discord.js";
import { Emojis } from "../../Data/Emojis";
import KomiClient from "../../Client";
import PackageJSON from "../../../package.json";
export const BotInfo = async (
    Komi: KomiClient,
    interaction: CommandInteraction<CacheType>
) => {
    const { dependencies: allPkg, version } = PackageJSON;
    const { Util, KomiShouko, Badge } = Emojis;
    const { KomiMaidExcited } = KomiShouko;
    const { Owner, Developer } = Badge;
    const {
        Arrow,
        Replit,
        Uptimerobot,
        VisualStudioCodeInsider,
        Terminal,
        WindL,
        WindR,
        Users,
        Bot,
        SlashCommands,
        Discordjs,
        MongoDB,
        PostgreSQL,
        NodeJS,
        TypeScript,
        Tags,
        Channels
    } = Util;
    const Hosts = {
        Replit: `> ${Arrow} ${Replit} [Repl.it](https://replit.com).\n> ${Arrow} ${Uptimerobot} [Uptimerobot](https://uptimerobot.com).`,
        Local: `> ${Arrow} ${VisualStudioCodeInsider} [Visual Studio Code](https://code.visualstudio.com/insiders/).\n> ${Arrow} ${Terminal} [Terminal](https://www.microsoft.com/es-mx/p/windows-terminal/9n0dx20hk701).`
    };
    const roleColor =
        interaction.guild?.members.me?.displayHexColor === "#000000"
            ? "#ffffff"
            : interaction.guild?.members.me?.displayHexColor;
    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setAuthor({
                    name: "Komi Info",
                    iconURL: Komi.user?.avatarURL()
                })
                .setThumbnail(Komi.user?.avatarURL())
                .addFields(
                    {
                        name: `${WindL} Desarrolladores de Komi-san: ${WindR}`,
                        value: `> ${Arrow} Owner [MrMikeDev#9081](https://discord.com/users/437308398845952001) ${Owner} ${Developer}`,
                        inline: false
                    },
                    {
                        name: `${WindL} Estadísticas de Komi-san: ${WindR}`,
                        value: `> ${Arrow} ${Tags} ${Komi.guilds.cache.size} servers.\n> ${Arrow} ${Channels} ${Komi.channels.cache.size} canales.\n> ${Arrow} ${Users} ${Komi.users.cache.size} usuarios.`,
                        inline: false
                    },
                    {
                        name: `${WindL} Hosteada en: ${WindR}`,
                        value: `${Hosts.Local}`,
                        inline: false
                    },
                    {
                        name: `${WindL} Caracteristicas de desarrollo: ${WindR}`,
                        value: `> ${Arrow} ${KomiMaidExcited} **Fecha de Creación:** <t:1628722800>.\n> ${Arrow} ${TypeScript} **Lenguaje usado:** TypeScript\n> ${Arrow} ${Discordjs} **Libreria usada:** Discord.js v${allPkg["discord.js"]}\n> ${Arrow} ${MongoDB} **Database NoSQL:** MongoDB v${allPkg.mongoose}\n> ${Arrow} ${PostgreSQL} **Database SQL:** PostgreSQL v${allPkg.pg}\n> ${Arrow} ${NodeJS} **Entorno de ejecución:** NodeJS ${process.version}`,
                        inline: false
                    },
                    {
                        name: `${WindL} Cuento con: ${WindR}`,
                        value: `> ${Arrow} ${SlashCommands} **${Komi.slashcommands.size}** Slash Commands.`,
                        inline: false
                    },
                    {
                        name: `${WindL} Versión del Bot: ${WindR}`,
                        value: `> ${Arrow} ${Bot} Komi Shouko **v${version}**.`,
                        inline: false
                    }
                )
                .setImage(
                    "https://cdn.discordapp.com/attachments/930674284425265182/934612890219085884/standard.gif"
                )
                .setColor(`${roleColor}`)
                .setFooter({
                    text: `Comando hecho por ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL()
                })
                .setTimestamp()
        ]
    });
};
