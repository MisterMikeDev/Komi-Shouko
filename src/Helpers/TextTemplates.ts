import { Emojis } from "../Data/Emojis";
const { WindL, WindR, Arrow } = Emojis.Util;

export const windTextTemplate = (text: string) => {
    return `${WindL} \`${text}:\` ${WindR}`;
};

export const quoteTextWithIconTemplate = (icon: string, text: string) => {
    return `> ${Arrow} ${icon} ${text}\n`;
};
