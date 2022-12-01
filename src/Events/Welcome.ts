import { BaseGuildTextChannel, GuildMember, EmbedBuilder } from "discord.js";
import { Config } from "../Data/Config";
import { Event } from "../Interfaces";
export const event: Event = {
    name: "guildMemberAdd",
    run: async (Komi, Member: GuildMember): Promise<void> => {
        if (Member.guild.id === Config.DiscordBot.SupportServer.ID) {
            if (Member.user.bot) {
                Member.roles.add("888287304697913424");
                Member.setNickname(`➠║ ${Member.user.username}`);
            } else {
                const Channel = Komi.channels.resolve(
                    Config.DiscordBot.SupportServer.WelcomeChannel
                ) as BaseGuildTextChannel;
                Channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle(
                                "¡Bienvenido(a) al soporte de Komi Shouko!"
                            )
                            .setDescription(
                                `¡Hola **${Member.user.tag}**, bienvenido(a) al soporte de **🌸 Komi Shouko 🌸** esperamos que sea de tu agrado este servidor.`
                            )
                            .setImage(
                                "https://cdn.discordapp.com/attachments/880562658401722379/934945897295527956/komi-san-komi-shouko_1.gif"
                            )
                            .setColor("#FFCC8E")
                            .setThumbnail(Member.user.avatarURL())
                            .setFooter({
                                text: `¡Wow contigo ya somos ${Member.guild.memberCount} miembros!`
                            })
                            .setTimestamp()
                    ]
                });
            }
        }
    }
};
