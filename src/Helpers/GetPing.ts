import { Komi } from "../Client";
import { Emojis } from "../Data/Emojis";

const {
    Ping1: AppallingPing,
    Ping2: BadPing,
    Ping3: RegularPing,
    Ping4: GoodPing,
    Ping5: AwesomePing
} = Emojis.Ping;

export const noNegativeNumber = (number: number) => {
    if (number < 0) return 0;
    return number;
};

export const getColorByPing = (ping: number) => {
    const fixedPing = noNegativeNumber(ping);
    if (fixedPing >= 0 && fixedPing <= 60) return "#2BFF00";
    if (fixedPing >= 61 && fixedPing <= 100) return "#FFF300";
    if (fixedPing >= 101 && fixedPing <= 150) return "#FF9B00";
    if (fixedPing >= 151 && fixedPing <= 200) return "#FF0000";
    if (fixedPing >= 201) return "#930000";
    return "#000000";
};

export const getEmojiByPing = (ping: number) => {
    const fixedPing = noNegativeNumber(ping);
    if (fixedPing >= 0 && fixedPing <= 60) return AwesomePing;
    if (fixedPing >= 61 && fixedPing <= 100) return GoodPing;
    if (fixedPing >= 101 && fixedPing <= 150) return RegularPing;
    if (fixedPing >= 151 && fixedPing <= 200) return BadPing;
    if (fixedPing >= 201) return AppallingPing;
    return AppallingPing;
};

export const getLocalResponsePing = (interactionTimeStamp: number) => {
    const localPing = Date.now() - interactionTimeStamp;
    return {
        ping: noNegativeNumber(localPing),
        emoji: getEmojiByPing(localPing),
        color: getColorByPing(localPing),
        message:
            localPing >= 0 && localPing <= 60
                ? "¡Ping de respuesta excelente!"
                : "¡Ping de respuesta malo!"
    };
};

export const getDiscordAPIPing = (Komi: Komi) => {
    const komiPing = Komi.ws.ping;
    return {
        ping: noNegativeNumber(komiPing),
        emoji: getEmojiByPing(komiPing),
        color: getColorByPing(komiPing),
        message:
            komiPing >= 0 && komiPing <= 60
                ? "¡Ping de respuesta excelente!"
                : "¡Ping de respuesta malo!"
    };
};
