import {
    CacheType,
    ColorResolvable,
    CommandInteraction,
    EmbedBuilder,
} from "discord.js";
import { PingInterface } from "../../Interfaces";
import { Emojis } from "../../Data/Emojis";
import KomiClient from "../../Client";
import mongoose from "mongoose";
export const Ping = async (
    Komi: KomiClient,
    interaction: CommandInteraction<CacheType>
) => {
    const { Ping: PingEmojis, Util } = Emojis;
    const { Ping1, Ping2, Ping3, Ping4, Ping5 } = PingEmojis;
    const { WindL, WindR } = Util;
    const PING_LIST = {
        AppallingPing: Ping1,
        BadPing: Ping2,
        RegularPing: Ping3,
        GoodPing: Ping4,
        AwesomePing: Ping5,
    };
    const { AppallingPing, BadPing, RegularPing, GoodPing, AwesomePing } =
        PING_LIST;
    let PING_STATUS: PingInterface = {
        BotPing_Value: 0,
        BotPing_Emoji: "",
        BotPing_Color: "",
        BotResponse_Value: 0,
        BotResponse_Emoji: "",
        MongoDBPing_Value: 0,
        MongoDBPing_Emoji: "",
    };

    let PreDate = Date.now();
    PING_STATUS.BotResponse_Value = Date.now() - interaction.createdTimestamp;
    PING_STATUS.BotPing_Value = Komi.ws.ping;
    PING_STATUS.MongoDBPing_Value = await new Promise((r, j) => {
        mongoose.connection.db
            .admin()
            .ping((err, result): void =>
                err || !result ? j(err || result) : r(Date.now() - PreDate)
            );
    });
    if (
        PING_STATUS.BotResponse_Value >= 0 &&
        PING_STATUS.BotResponse_Value <= 60
    ) {
        PING_STATUS.BotResponse_Emoji = AwesomePing;
    } else if (
        PING_STATUS.BotResponse_Value >= 61 &&
        PING_STATUS.BotResponse_Value <= 100
    ) {
        PING_STATUS.BotResponse_Emoji = GoodPing;
    } else if (
        PING_STATUS.BotResponse_Value >= 101 &&
        PING_STATUS.BotResponse_Value <= 150
    ) {
        PING_STATUS.BotResponse_Emoji = RegularPing;
    } else if (
        PING_STATUS.BotResponse_Value >= 151 &&
        PING_STATUS.BotResponse_Value <= 200
    ) {
        PING_STATUS.BotResponse_Emoji = BadPing;
    } else if (
        PING_STATUS.BotResponse_Value >= 201 ||
        PING_STATUS.BotResponse_Value < 0
    ) {
        PING_STATUS.BotResponse_Emoji = AppallingPing;
    }

    if (
        PING_STATUS.MongoDBPing_Value >= 0 &&
        PING_STATUS.MongoDBPing_Value <= 60
    ) {
        PING_STATUS.MongoDBPing_Emoji = AwesomePing;
    } else if (
        PING_STATUS.MongoDBPing_Value >= 61 &&
        PING_STATUS.MongoDBPing_Value <= 100
    ) {
        PING_STATUS.MongoDBPing_Emoji = GoodPing;
    } else if (
        PING_STATUS.MongoDBPing_Value >= 101 &&
        PING_STATUS.MongoDBPing_Value <= 150
    ) {
        PING_STATUS.MongoDBPing_Emoji = RegularPing;
    } else if (
        PING_STATUS.MongoDBPing_Value >= 151 &&
        PING_STATUS.MongoDBPing_Value <= 200
    ) {
        PING_STATUS.MongoDBPing_Emoji = BadPing;
    } else if (
        PING_STATUS.MongoDBPing_Value >= 201 ||
        PING_STATUS.MongoDBPing_Value < 0
    ) {
        PING_STATUS.MongoDBPing_Emoji = AppallingPing;
    }

    if (PING_STATUS.BotPing_Value >= 0 && PING_STATUS.BotPing_Value <= 60) {
        PING_STATUS.BotPing_Emoji = AwesomePing;
        PING_STATUS.BotPing_Color = "#2BFF00";
    } else if (
        PING_STATUS.BotPing_Value >= 61 &&
        PING_STATUS.BotPing_Value <= 100
    ) {
        PING_STATUS.BotPing_Emoji = GoodPing;
        PING_STATUS.BotPing_Color = "#FFF300";
    } else if (
        PING_STATUS.BotPing_Value >= 101 &&
        PING_STATUS.BotPing_Value <= 150
    ) {
        PING_STATUS.BotPing_Emoji = RegularPing;
        PING_STATUS.BotPing_Color = "#FF9B00";
    } else if (
        PING_STATUS.BotPing_Value >= 151 &&
        PING_STATUS.BotPing_Value <= 200
    ) {
        PING_STATUS.BotPing_Emoji = BadPing;
        PING_STATUS.BotPing_Color = "#FF0000";
    } else if (
        PING_STATUS.BotPing_Value >= 201 ||
        PING_STATUS.BotPing_Value < 0
    ) {
        PING_STATUS.BotPing_Emoji = AppallingPing;
        PING_STATUS.BotPing_Color = "#930000";
    }

    interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setTitle("¡Ping de Komi-san!")
                .setColor(PING_STATUS.BotPing_Color as ColorResolvable)
                .setTimestamp()
                .addFields(
                    {
                        name: `${WindL} \`Ping de Respuesta:\` ${WindR}`,
                        value: `> ¡**__${PING_STATUS.BotResponse_Value}__** ms! ${PING_STATUS.BotPing_Emoji}`,
                        inline: false,
                    },
                    {
                        name: `${WindL} \`Ping de la API:\` ${WindR}`,
                        value: `> ¡**__${PING_STATUS.BotPing_Value}__** ms! ${PING_STATUS.BotPing_Emoji}`,
                        inline: false,
                    },
                    {
                        name: `${WindL} \`Ping de MongoDB:\` ${WindR}`,
                        value: `> ¡**__${PING_STATUS.MongoDBPing_Value}__** ms! ${PING_STATUS.MongoDBPing_Emoji}`,
                        inline: false,
                    },
                    {
                        name: `${Util.WindL} \`Ram usada:\` ${Util.WindR}`,
                        value: `> **__${(
                            process.memoryUsage().heapUsed /
                            1024 /
                            1024
                        ).toFixed(2)}__** MB`,
                        inline: false,
                    }
                )
                .setFooter({
                    text: `Comando hecho por ${interaction.user.tag}`,
                    iconURL: interaction.user.displayAvatarURL(),
                }),
        ],
    });
};
