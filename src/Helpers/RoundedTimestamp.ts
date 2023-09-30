const timestampTypes = {
    shortDateAndTime: "<t:{timestamp}>",
    shortDate: "<t:{timestamp}:d>",
    longDateAndTime: "<t:{timestamp}:F>",
    relativeTime: "<t:{timestamp}:R>",
    relativeTimeLong: "<t:{timestamp}:R>",
    shortTime: "<t:{timestamp}:t>"
};

export const timeStampConverter = (timestamp: string | number) => {
    return Math.round(Number(timestamp) / 1000);
};

export const RoundedTimeStamp = (
    timestamp: number | string,
    {
        itsForDiscord = false,
        type
    }: {
        itsForDiscord: boolean;
        type: keyof typeof timestampTypes;
    }
) => {
    const fixedTimestamp = timeStampConverter(timestamp);
    const timestampType = timestampTypes[type];

    if (itsForDiscord) {
        return timestampType.replace("{timestamp}", fixedTimestamp.toString());
    }

    return fixedTimestamp;
};
