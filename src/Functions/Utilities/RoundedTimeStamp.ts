export const RoundedTimeStamp = (timestamp: number, isForDiscord: boolean) => {
    return isForDiscord
        ? `<t:${Math.round(timestamp / 1000)}>`
        : Math.round(timestamp / 1000);
};
