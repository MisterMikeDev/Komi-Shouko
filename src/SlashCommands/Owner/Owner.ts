import {
    ApplicationCommandOptionType,
    CommandInteractionOptionResolver,
} from "discord.js";
import { SlashCommandStructure } from "../../Interfaces";
import { Eval } from "./Eval.cmd";
export default new SlashCommandStructure({
    name: "owner",
    description: "Sub SlashCommands de Owner.",
    options: [
        {
            name: "embeds",
            description: "Sistema de embeds exclusivo del owener de Komi-san.",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "embed-type",
                    description: "Embed a enviar.",
                    type: ApplicationCommandOptionType.String,
                    choices: [
                        {
                            name: "verificación",
                            value: "verificacion",
                        },
                        {
                            name: "bienvenida",
                            value: "bienvenida",
                        },
                        {
                            name: "despedida",
                            value: "despedida",
                        },
                    ],
                    required: true,
                },
            ],
        },
        {
            name: "eval",
            description: "Evalúa un codigo.",
            type: ApplicationCommandOptionType.Subcommand,
        },
    ],
    run: async ({ Komi, interaction }) => {
        switch (
            (
                interaction.options as CommandInteractionOptionResolver
            ).getSubcommand()
        ) {
            case "eval":
                Eval(Komi, interaction);
                break;
        }
        /*
    if (interaction.user.id !== "437308398845952001") {
      interaction.reply({
        embeds: [
          new MessageEmbed()
            .setDescription(
              `${Util.No} | No tienes permisos suficientes para usar este comando.`
            )
            .setColor("#990000"),
        ],
      });
    }
    if (interaction.options.getSubcommand() === "embeds") {
      let Type = interaction.options.getString("embed-type");
      if (Type === "verificacion") {
        interaction.reply({
          embeds: [
            new MessageEmbed()
              .setDescription(
                `${Util.Yes} | Se ha mandado el embed correctamente.`
              )
              .setColor("#00FF00"),
          ],
          ephemeral: true,
        });
        interaction.channel.send({
          embeds: [
            new MessageEmbed()
              .setTitle("Verificación")
              .setDescription(
                `Para poder Verificarte solo debes de precionar el boton con el emoji ${Util.Yes}`
              )
              .setColor("#F6A4FF")
              .setImage(
                "https://cdn.discordapp.com/attachments/880562658401722379/934945895420690512/7346b5cdfe464210f2b40c432de63cf1.gif"
              ),
          ],
          components: [
            new MessageActionRow().addComponents(
              new MessageButton()
                .setCustomId("verificationButton")
                .setStyle("SUCCESS")
                .setEmoji("880884055489515630")
            ),
          ],
        });
      } else if (Type === "bienvenida") {
        interaction.reply({
          embeds: [
            new MessageEmbed()
              .setDescription(
                `${Util.Yes} | Se ha mandado el embed correctamente.`
              )
              .setColor("#00FF00"),
          ],
          ephemeral: true,
        });
        interaction.channel.send({
          embeds: [
            new MessageEmbed()
              .setAuthor({
                name: "¡Bienvenido(a) al soporte de Komi Shouko!",
                iconURL: `${interaction.user.displayAvatarURL({
                  dynamic: true,
                })}`,
              })
              .setDescription(
                `¡Hola **${interaction.user.tag}**, bienvenido(a) al soporte de **__🌸 Komi Shouko 🌸__** esperamos que sea de tu agrado este servidor.`
              )
              .setImage(
                "https://cdn.discordapp.com/attachments/880562658401722379/934945897295527956/komi-san-komi-shouko_1.gif"
              )
              .setColor("#FFCC8E")
              .setThumbnail(
                interaction.user.displayAvatarURL({ dynamic: true })
              )
              .setFooter({
                text: `¡Wow contigo ya somos ${interaction.guild.memberCount} Miembros!`,
                iconURL: `${interaction.user.displayAvatarURL({
                  dynamic: true,
                })}`,
              })
              .setTimestamp(),
          ],
        });
      } else if (Type === "despedida") {
        interaction.reply({
          embeds: [
            new MessageEmbed()
              .setDescription(
                `${Util.Yes} | Se ha mandado el embed correctamente.`
              )
              .setColor("#00FF00"),
          ],
          ephemeral: true,
        });
        interaction.channel.send({
          embeds: [
            new MessageEmbed()
              .setAuthor({
                name: "Bye bye~",
                iconURL: `${interaction.user.displayAvatarURL({
                  dynamic: true,
                })}`,
              })
              .setDescription(
                `Lamentablemente **${interaction.user.tag}** decidio irse del servidor, hasta luego.`
              )
              .setImage(
                "https://cdn.discordapp.com/attachments/880562658401722379/934945897954017310/komi-san-komi-shouko_2.gif"
              )
              .setColor("#FFCC8E")
              .setThumbnail(
                interaction.user.displayAvatarURL({ dynamic: true })
              )
              .setFooter({
                text: `Ahora solo somos ${interaction.guild.memberCount} Miembros.`,
                iconURL: `${interaction.user.displayAvatarURL({
                  dynamic: true,
                })}`,
              })
              .setTimestamp(),
          ],
        });
      }
    } else if (interaction.options.getSubcommand() === "eval") {
    }
    */
    },
});
