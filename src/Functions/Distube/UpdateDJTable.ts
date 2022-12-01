import {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    TextBasedChannel,
    CommandInteraction,
    CacheType,
    ButtonStyle,
} from "discord.js";
import KomiClient from "../../Client";
import SchemaMusicSystem from "../../Schemas/SchemaMusicSystem";
import { Emojis } from "../../Data/Emojis";

interface DBDataMusic {
    ServerID: string;
    MusicChannelID: string;
    MusicMessageID: string;
}

export const updateDJTable = async (
    Komi: KomiClient,
    interaction: CommandInteraction<CacheType>,
    guildId: string
): Promise<void> => {
    const { Yes, No } = Emojis.Util;
    const { Secondary } = ButtonStyle;
    let MusicData = await SchemaMusicSystem.findOne({
        ServerID: guildId,
    });

    if (!MusicData) {
        await new SchemaMusicSystem<DBDataMusic>({
            ServerID: guildId,
            MusicChannelID: null,
            MusicMessageID: null,
        }).save();
        interaction.reply({
            content: `${Yes} | Se registro el servidor, usa nuevamente el comando.`,
        });
        return;
    }
    const { MusicChannelID, MusicMessageID } = MusicData as DBDataMusic;
    const MessageTable = await (
        Komi.guilds
            .resolve(guildId)
            .channels.resolve(MusicChannelID) as TextBasedChannel
    ).messages.fetch(MusicMessageID);
    if (!MessageTable) {
        interaction.reply({
            content: `${No} | No se ha encontrado el mensaje para actualizar el tablero.`,
        });
        return;
    }
    const Queue = {} as any;
    const RawInformation = {
        PlayingSong: Queue.songs[0],
        VolumeNow: Queue.volume,
        LoopStatus: Queue.repeatMode,
    };
    const MusicTableInformation = {
        PlayingSong: `*[${RawInformation.PlayingSong.name}](${RawInformation.PlayingSong.url})*`,
        Volume: Queue.volume || "*100%*",
        RequestUser: Queue.songs[0].user || "*Nadie...*",
        Loop: Queue.repeatMode || "*Apagado...*",
        QueueFormatedList: Queue
            ? "*Nada...*"
            : `${Queue.songs
                  .map(
                      (song, i: number): string =>
                          `\`${i + 1}\`.- __${song.name}__ - \`${
                              song.formattedDuration
                          }\``
                  )
                  .join("\n")}`,
    };
    MessageTable.edit({
        content: `**Komi Queue:**\n\n${MusicTableInformation.QueueFormatedList}`,
        embeds: [
            new EmbedBuilder()
                .setTitle("¡Music with Komi Shouko!")
                .addFields(
                    {
                        name: `Canción en reproducción:`,
                        value: `${MusicTableInformation.PlayingSong}`,
                        inline: false,
                    },
                    {
                        name: `Volumen:`,
                        value: `${MusicTableInformation.Volume}`,
                        inline: true,
                    },
                    {
                        name: `Loop:`,
                        value: `${MusicTableInformation.Loop}`,
                        inline: true,
                    },
                    {
                        name: `Pedida por:`,
                        value: `${MusicTableInformation.RequestUser}`,
                        inline: true,
                    }
                )
                .setImage(
                    `https://cdn.discordapp.com/attachments/930674284425265182/934614467705192478/standard_1.gif`
                )
                .setColor("#4F00FF")
                .setFooter({
                    text: "Escribe tu canción en el chat.",
                    iconURL: `${Komi.user.displayAvatarURL()}`,
                }),
        ],
        components: [
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                new ButtonBuilder()
                    .setCustomId("musicButtonLoop")
                    .setStyle(Secondary)
                    .setEmoji("880916354591518750"),
                new ButtonBuilder()
                    .setCustomId("musicButtonPause")
                    .setStyle(Secondary)
                    .setEmoji("880916295749603409"),
                new ButtonBuilder()
                    .setCustomId("musicButtonJoin")
                    .setStyle(Secondary)
                    .setEmoji("912474426992394310"),
                new ButtonBuilder()
                    .setCustomId("musicButtonResume")
                    .setStyle(Secondary)
                    .setEmoji("880916317006336040"),
                new ButtonBuilder()
                    .setCustomId("musicButtonStop")
                    .setStyle(Secondary)
                    .setEmoji("880916336417591337")
            ),
            new ActionRowBuilder<ButtonBuilder>().addComponents(
                new ButtonBuilder()
                    .setCustomId("musicButtonPrevious")
                    .setStyle(Secondary)
                    .setEmoji("909273239769993256"),
                new ButtonBuilder()
                    .setCustomId("musicButtonVolumeDown")
                    .setStyle(Secondary)
                    .setEmoji("915037333726830612"),
                new ButtonBuilder()
                    .setCustomId("musicButtonPlayNow")
                    .setStyle(Secondary)
                    .setEmoji("885986305828352045"),
                new ButtonBuilder()
                    .setCustomId("musicButtonVolumeUp")
                    .setStyle(Secondary)
                    .setEmoji("915037333798158347"),
                new ButtonBuilder()
                    .setCustomId("musicButtonSkip")
                    .setStyle(Secondary)
                    .setEmoji("880916399634149427")
            ),
        ],
    });
};
