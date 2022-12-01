import { BaseGuildTextChannel, GuildMember, EmbedBuilder } from "discord.js";
import { Event } from "../Interfaces";
export const event: Event = {
    name: "guildMemberAdd",
    run: async (Komi, member: GuildMember): Promise<void> => {
        if (member.guild.id === "887356477222834196") {
            if (!member.user.bot) {
                const Channel = Komi.channels.resolve(
                    "887396817422131270"
                ) as BaseGuildTextChannel;
                Channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle("Bye bye~")
                            .setDescription(
                                `Lamentablemente **${member.user.tag}** decidio irse del servidor, hasta luego.`
                            )
                            .setImage(
                                "https://cdn.discordapp.com/attachments/880562658401722379/934945897954017310/komi-san-komi-shouko_2.gif"
                            )
                            .setColor("#FFCC8E")
                            .setThumbnail(`${member.user.avatarURL()}`)
                            .setFooter({
                                text: `Ahora solo somos ${member.guild.memberCount} miembros.`
                            })
                            .setTimestamp()
                    ]
                });
            }
        }
    }
};
